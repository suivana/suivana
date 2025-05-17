module launchpad::utils {
    const E_OVERFLOW: u64 = 0;
    const E_UNDERFLOW: u64 = 1;

    public fun safe_add(a: u64, b: u64): u64 {
        let res = a + b;
        if (res < a) { abort E_OVERFLOW};
        res
    }

    public fun safe_sub(a: u64, b: u64): u64 {
        if (a < b) { abort E_UNDERFLOW};
        a - b
    }

    public fun format_timestamp(_ts: u64): vector<u8> {
        b"timestamp"
    }
}