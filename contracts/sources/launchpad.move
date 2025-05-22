module launchpad::launchpad;
use sui::coin::{Self, TreasuryCap, Coin};
use sui::sui::SUI;
use sui::clock;
use sui::event;

use launchpad::token::{CAMPAIGN_TOKEN};

public struct TokenAdmin has key{
    id: UID,
    treasury_cap: TreasuryCap<CAMPAIGN_TOKEN>,
}

public struct CampaignCreatedEvent has drop, store, copy {
    campaign_id: ID,
    owner: address,
    goal_amount: u64,
    end_time: u64,
}

public struct ContributionEvent has drop, store, copy {
    campaign_id: ID,
    contributor: address,
    amount: u64,
}

public struct CampaignFinalizedEvent has drop, store, copy {
    campaign_id: ID,
    owner: address,
    goal_amount: u64,
    raised_amount: u64,
    end_time: u64,
}

public struct Campaign has key, store {
    id: UID,
    owner: address,
    treasury_cap: TreasuryCap<CAMPAIGN_TOKEN>,
    goal_amount: u64,
    end_time: u64,
    finalized: bool,
    treasury: Option<Coin<SUI>>,
    raised_amount: u64,
    is_active: bool,
}

const E_NOT_OWNER: u64 = 0;
const E_CAMPAIGN_FINALIZED: u64 = 1;
const E_CAMPAIGN_NOT_OVER: u64 = 2;
const E_CAMPAIGN_OVER: u64 = 3;

public fun create_campaign(
    goal_amount: u64,
    end_time: u64,
    treasury_cap: TreasuryCap<CAMPAIGN_TOKEN>,
    ctx: &mut TxContext,
    raised_amount: u64,
    treasury: Option<Coin<SUI>>,
): Campaign{
    let id = object::new(ctx);
    let owner = tx_context::sender(ctx);
    // let contributions = vector::empty<Coin<SUI>>();
    let campaign = Campaign {
        id,
        owner,
        treasury_cap,
        goal_amount,
        end_time,
        finalized: false,
        raised_amount,
        treasury,
        is_active: true,
    };
    event::emit(CampaignCreatedEvent{
        campaign_id: object::id(&campaign),
        owner,
        goal_amount,
        end_time,
    });
    campaign
}

public fun mint_coins(
    admin: &mut TokenAdmin,
    amount: u64,
    recipient: address,
    ctx: &mut TxContext,
){
    let token = coin::mint(&mut admin.treasury_cap, amount, ctx);

    transfer::public_transfer(token, recipient);
}

public fun contribute(
    clock: &clock::Clock,
    campaign: &mut Campaign,
    payment: Coin<SUI>,
    ctx:&mut TxContext,
    admin: &mut TokenAdmin,
){
    assert!(campaign.is_active, 0);
    let now = clock::timestamp_ms(clock);
    if (campaign.finalized) { abort E_CAMPAIGN_FINALIZED };
    if (now > campaign.end_time) { abort E_CAMPAIGN_OVER };
    let sender = tx_context::sender(ctx);
    let amount = coin::value(&payment);
    campaign.raised_amount = campaign.raised_amount + amount;

   if (option::is_some(&campaign.treasury)) {
    // SAFELY extract the existing coin from the Option
    let mut existing = option::extract(&mut campaign.treasury);

    // Merge the incoming coin into the existing coin
    coin::join(&mut existing, payment); // ✅ this returns ()

    // Fill the treasury again with the updated coin
    option::fill(&mut campaign.treasury, existing);
} else {
    // Just initialize treasury with the incoming payment
    option::fill(&mut campaign.treasury, payment);
};

    mint_coins(
        admin,
        amount,
        sender,
        ctx
    );
    event::emit(ContributionEvent{
        campaign_id: object::id(campaign),
        contributor: sender,
        amount,
    });
}

public fun finalize_campaign(
    clock: &clock::Clock,
    campaign: &mut Campaign,
    ctx: &TxContext,
) {
    let now = clock::timestamp_ms(clock);
    if (tx_context::sender(ctx) != campaign.owner) { abort E_NOT_OWNER};
    if (campaign.finalized) { abort E_CAMPAIGN_FINALIZED};
    if (now < campaign.end_time) { abort E_CAMPAIGN_NOT_OVER};
    campaign.finalized = true;

    // Transfer funds if goal is met
    if (campaign.raised_amount >= campaign.goal_amount) {
        if (!option::is_some(&campaign.treasury)) {
            // Just in case - should never happen if contributions exist
            return
        };
        let funds = option::extract(&mut campaign.treasury);
        transfer::public_transfer(funds, campaign.owner);
    };

    event::emit(CampaignFinalizedEvent{
        campaign_id: object::id(campaign),
        owner: campaign.owner,
        goal_amount: campaign.goal_amount,
        raised_amount: campaign.raised_amount,
        end_time: campaign.end_time,
    });
}

public fun fake_admin(cap: TreasuryCap<CAMPAIGN_TOKEN>, ctx: &mut TxContext): TokenAdmin {
    let id = object::new(ctx);
    TokenAdmin { id, treasury_cap: cap }
}

public fun get_campaign_info(campaign: &Campaign): (address, u64, u64, u64, bool) {
    (
        campaign.owner,
        campaign.goal_amount,
        campaign.raised_amount,
        campaign.end_time,
        campaign.finalized
    )
}