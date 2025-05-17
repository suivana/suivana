module launchpad::vesting {                                       // Declare a Move module named 'vesting' in the 'launchpad' package.
    use sui::clock;                                               // Import the 'clock' module from Sui for time-related functions.

    public struct Vesting has key, store {                        // Define a public struct 'Vesting' as a Sui object (has key ability).
        id: UID,                                                  // Unique object ID required for all Sui objects.
        token_id: address,                                        // Address of the token to be vested (locked).
        beneficiary: address,                                     // Address of the beneficiary who can unlock (claim) the tokens.
        unlock_time: u64,                                         // Unix timestamp (milliseconds) after which tokens can be claimed.
        claimed: bool,                                            // Flag indicating whether the tokens have already been claimed.
    }

    const E_TOO_EARLY: u64 = 0;                                   // Error code for attempting to claim tokens before unlock_time.
    const E_ALREADY_CLAIMED: u64 = 1;                             // Error code for attempting to claim tokens that are already claimed.
    const E_NOT_BENEFICIARY: u64 = 2;                             // Error code for someone other than the beneficiary trying to claim.

    public entry fun lock_tokens(                                  
        token_id: address,                                        // Address of the token to be locked.
        beneficiary: address,                                     // Address of the beneficiary.
        unlock_time: u64,                                         // Unlock timestamp.
        ctx: &mut TxContext                                       // Mutable reference to the transaction context.
    ) {
        let id = object::new(ctx);                                // Create a new unique object ID for the Vesting object.
        let vesting = Vesting {                                   // Construct the Vesting struct (object).
            id,                                                   // Set the object ID.
            token_id,                                             // Set the token address to be locked.
            beneficiary,                                          // Set the beneficiary's address.
            unlock_time,                                          // Set the unlock timestamp.
            claimed: false,                                       // Mark as not yet claimed.
        };
        transfer::public_transfer(vesting, beneficiary);           // Transfer the Vesting object to the beneficiary's address.
    }

    public entry fun unlock_tokens(                               
        clock: &clock::Clock,                                     // Reference to the Sui clock object (for current time).
        vesting: &mut Vesting,                                    // Mutable reference to the Vesting object.
        ctx: &TxContext                                           // Reference to the transaction context.
    ) {
        let sender = tx_context::sender(ctx);                     // Get the sender's address from the transaction context.
        if (sender != vesting.beneficiary) { abort E_NOT_BENEFICIARY}; // Abort if the sender is not the beneficiary.
        if (vesting.claimed) { abort E_ALREADY_CLAIMED};        // Abort if tokens have already been claimed.
        let now = clock::timestamp_ms(clock);                     // Get the current timestamp from the clock.
        if (now < vesting.unlock_time) { 
            abort E_TOO_EARLY;
            // Abort if current time is before unlock_time.
            vesting.claimed = true; // Mark the tokens as claimed.
        }
    }

    public fun get_vesting_info(vesting: &Vesting): (address, u64, bool) { // Public function to get vesting info.
        (
            vesting.beneficiary,                                 // Return beneficiary address.
            vesting.unlock_time,                                 // Return unlock timestamp.
            vesting.claimed                                      // Return claimed status.
        )
    }
}