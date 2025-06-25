import { Clarinet, Tx, Chain, Account, types } from 'https://deno.land/x/clarinet@v1.0.0/index.ts';
import { assertEquals } from 'https://deno.land/std@0.166.0/testing/asserts.ts';

Clarinet.test({
    name: "Verify licensing tier configuration",
    async fn(chain: Chain, accounts: Map<string, Account>) {
        // Initial test setup for finality-licensing contract
        const deployer = accounts.get('deployer')!;
        const block = chain.mineBlock([
            // Initial test transaction
        ]);

        assertEquals(block.height, 2);
    }
});