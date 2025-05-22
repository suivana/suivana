module launchpad::vesting;                                  
use sui::clock;                                               
use sui::event;
use sui::balance::{Self, Balance};
use sui::coin;
use sui::sui::SUI;
    
    public struct VestingCreatedEvent has drop, store, copy {        
        // vesting_id: ID,                                         
        token_id: address,                                        
        beneficiary: address,                                     
        unlock_timestamp: u64,                                        
    }

    public struct VestingUnlockedEvent has drop, store, copy {     
        // vesting_id: ID,                                          
        beneficiary: address,                                    
        unlock_timestamp: u64,                                        
    }

    public struct VestingClaimedEvent has drop, store, copy {      
        // vesting_id: ID,                                          
        beneficiary: address,                                     
        unlock_timestamp: u64,                                         
    }

    public struct Vesting has key, store {                        
        id: UID,                                                 
        token_id: address,
        balance: Balance<SUI>,                                        
        beneficiary: address,                                    
        unlock_timestamp: u64,                                         
        claimed: bool,                                            
    }

    const E_TOO_EARLY: u64 = 0;                                   
    const E_ALREADY_CLAIMED: u64 = 1;                             
    const E_NOT_BENEFICIARY: u64 = 2;
    const E_INVALID_LOCK_DURATION: u64 = 3;
    const E_INSUFFICIENT_BALANCE: u64 = 4;

    public  fun lock_tokens(                                  
        token_id: address, 
        coin_in: coin::Coin<SUI>,  
        lock_duration_seconds: u64,
        clock: &clock::Clock,   
        beneficiary: address,                                        
        ctx: &mut TxContext                                       
    ): Vesting {
        // ensure lock duration is reasonable (at least 1 minute)
        assert!(lock_duration_seconds >= 60, E_INVALID_LOCK_DURATION);

        // Get the current time
        let current_time = clock::timestamp_ms(clock) / 1000;

        // calculate unlock time
        let unlock_time = current_time + lock_duration_seconds;

        // get the balance from the coin
        let balance = coin::into_balance(coin_in);

        // ensure there's a balance to lock
        assert!(balance::value(&balance) > 0, E_INSUFFICIENT_BALANCE);

        // create a locked token / vesting object
        let id = object::new(ctx);                                
        let vesting = Vesting {                                   
            id,                                                   
            token_id,  
            balance,
            beneficiary,                                          
            unlock_timestamp: unlock_time,                                          
            claimed: false,                                       
        };

        // // transfer the coin to the vesting object
        // transfer::public_transfer(coin_in, object::id(&vesting));

        event::emit(VestingCreatedEvent {                        
            // vesting_id: object::id(&vesting),                     
            token_id: token_id,                                  
            beneficiary: beneficiary,                            
            unlock_timestamp: unlock_time,                            
        });  
        vesting                                  
    }

    public fun unlock_tokens(                               
        clock: &clock::Clock,                                     
        vesting: &mut Vesting,                                    
        ctx: &mut TxContext,
        token_id: address, 
        coin_in: coin::Coin<SUI>,  
        lock_duration_seconds: u64,   
        beneficiary: address,                                          
    ) : Vesting {
        let sender = tx_context::sender(ctx);                     
        if (sender != vesting.beneficiary) { abort E_NOT_BENEFICIARY}; 
        if (vesting.claimed) { abort E_ALREADY_CLAIMED};  

        let current_time = clock::timestamp_ms(clock) / 1000;                     
        if (current_time < vesting.unlock_timestamp) { 
            abort E_TOO_EARLY 
        };
        assert!(sender == vesting.beneficiary, 0);

        // calculate unlock time
        let unlock_time = current_time + lock_duration_seconds;

        // get the balance from the coin
        let balance = coin::into_balance(coin_in);

        // create a locked token / vesting object
        let id = object::new(ctx);                                
        let vesting = Vesting {                                   
            id,                                                   
            token_id, 
            balance,
            beneficiary,                                          
            unlock_timestamp: unlock_time,                                          
            claimed: true,                                       
        };

        // // // convert the balance to a coin
        // let coin_to_transfer = coin::from_balance(coin_in, ctx);

        // transfer the coin to the beneficiary
        // transfer::public_transfer(, sender);

        // let vesting = Vesting{
        //     id,
        //     token_id,
        //     balance,
        //     unlock_timestamp: _,
        //     owner: _,
        //     beneficiary,
        //     claimed,
        // };

        // object::delete(id);

        // let unlocked_coin = suix_getBalance(&mut balance, ctx);

        // transfer::public_transfer(unlocked_coin, sender);

        event::emit(VestingUnlockedEvent {                     
            // vesting_id: object::id(vesting),                     
            beneficiary: beneficiary,                    
            unlock_timestamp: unlock_time,                    
        });                                   
        event::emit(VestingClaimedEvent {                       
            // vesting_id: object::id(vesting),                     
            beneficiary: beneficiary,                    
            unlock_timestamp: unlock_time,                    
        });
        vesting
        // object::delete(vesting.id);
    }


    // get the unlock timestamp of a locked token
    public fun unlock_timestamp(vesting: &Vesting): u64{
        vesting.unlock_timestamp
    }
    // check the remaining lock time
    public fun remaining_lock_time(vesting: &Vesting, clock: &clock::Clock): u64{
        let current_time = clock::timestamp_ms(clock) / 1000;

        if (current_time >= vesting.unlock_timestamp){0} else{
            vesting.unlock_timestamp - current_time
        }
    }

    // get the balance of a locked token
    public fun locked_balance(vesting: &Vesting): u64{
        balance::value(&vesting.balance)
    }


    public fun get_vesting_info(vesting: &Vesting): (address, u64, bool) { 
        (
            vesting.beneficiary,                                 
            vesting.unlock_timestamp,                                 
            vesting.claimed                                      // Return claimed status.
        )
    }