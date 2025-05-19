module launchpad::token;
public struct Token has key, store {
    id: UID,
    name: vector<u8>,
    symbol: vector<u8>,
    decimals: u8,
    total_supply: u64,
}

public fun create_token(
    name: vector<u8>,
    symbol: vector<u8>,
    decimals: u8,
    total_supply: u64,
    ctx: &mut TxContext
): Token {
    let id = object::new(ctx);
    let token = Token {
        id,
        name,
        symbol,
        decimals,
        total_supply,
    };
    token
}