module launchpad::launchpad {
    use sui::coin;
    use sui::sui;
    use sui::clock;

    public struct Contribution has store{
        contributor: address,
        amount: u64,
    }

    public struct Campaign has key, store {
        id: UID,
        owner: address,
        goal_amount: u64,
        raised_amount: u64,
        end_time: u64,
        finalized: bool,
        contributions: vector<Contribution>,
    }

    const E_NOT_OWNER: u64 = 0;
    const E_CAMPAIGN_FINALIZED: u64 = 1;
    const E_CAMPAIGN_NOT_OVER: u64 = 2;
    const E_CAMPAIGN_OVER: u64 = 3;

    public entry fun create_campaign(
        goal_amount: u64,
        end_time: u64,
        ctx: &mut TxContext
    ) {
        let id = object::new(ctx);
        let owner = tx_context::sender(ctx);
        let contributions = vector::empty<Contribution>();
        let campaign = Campaign {
            id,
            owner,
            goal_amount,
            raised_amount: 0,
            end_time,
            finalized: false,
            contributions,
        };
        transfer::public_transfer(campaign, owner);
    }

    public entry fun contribute(
        clock: &clock::Clock,
        campaign: &mut Campaign,
        payment: coin::Coin<sui::SUI>,
        ctx: &mut TxContext
    ) {
        let now = clock::timestamp_ms(clock);
        if (campaign.finalized) { abort E_CAMPAIGN_FINALIZED };
        if (now > campaign.end_time) { abort E_CAMPAIGN_OVER };
        let sender = tx_context::sender(ctx);
        let amount = coin::value(&payment);

        transfer::public_transfer(payment, campaign.owner);
        let contribution = Contribution{
            contributor: sender,
            amount,
        };
        campaign.raised_amount = campaign.raised_amount + amount;
        vector::push_back(&mut campaign.contributions, contribution);
    }

    public entry fun finalize_campaign(
        clock: &clock::Clock,
        campaign: &mut Campaign,
        ctx: &TxContext
    ) {
        let now = clock::timestamp_ms(clock);
        if (tx_context::sender(ctx) != campaign.owner) { abort E_NOT_OWNER};
        if (campaign.finalized) { abort E_CAMPAIGN_FINALIZED};
        if (now < campaign.end_time) { abort E_CAMPAIGN_NOT_OVER};
        campaign.finalized = true;
        // Optionally transfer funds to owner if goal met.
        // if (campaign.raised_amount >= campaign.goal_amount) {
        //     let funds = option::extract(&mut campaign.funds);
        //     coin::transfer(funds, campaign.owner);
        // }
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
}