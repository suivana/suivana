module launchpad::token {
    public struct Token has key, store {
        id: UID,
        name: vector<u8>,
        symbol: vector<u8>,
        decimals: u8,
        total_supply: u64,
    }

    public entry fun create_token(
        name: vector<u8>,
        symbol: vector<u8>,
        decimals: u8,
        total_supply: u64,
        ctx: &mut TxContext
    ) {
        let id = object::new(ctx);
        let token = Token {
            id,
            name,
            symbol,
            decimals,
            total_supply,
        };
        transfer::public_transfer(token, tx_context::sender(ctx));
    }
}