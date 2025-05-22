module launchpad::token;
use sui::coin::{ TreasuryCap, create_currency};

// custom token type 
public struct CAMPAIGN_TOKEN has store, drop {}

public struct TokenAdmin has key{
    id: UID
}

// Create a custom token for a campaign
public fun create_campaign_token(
    name: vector<u8>,
    symbol: vector<u8>,
    decimals: u8,
    ctx: &mut TxContext
): (TreasuryCap<CAMPAIGN_TOKEN>){
    let (treasury, metadata) = create_currency(
        CAMPAIGN_TOKEN{},
        decimals,
        name,
        symbol,
        b"https://campaign-token.png",
        option::none(),
        ctx 
    );
    transfer::public_freeze_object(metadata);
    transfer::transfer(TokenAdmin{
        id: object::new(ctx)
    }, tx_context::sender(ctx));

    treasury
}