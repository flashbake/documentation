---
sidebar_position: 1
---

# Flashbake

When a Tezos user submits a transaction, it is transmitted to the bakers who store it in their mempool until it is included in a block.

Every transaction contains a fee for the baker. When it is their turn to bake a block, the baker picks the transactions with the highest fees and assembles them into a block up to the size limit.

What happens then when blocks become full? The default baker implementation will prefer transactions with higher fees. The user can increase the fee to get the block included quicker, in the event of network congestion.

But including transactions in decreasing order of fees is not a requirement of the Tezos economic protocol. The protocol assigns baking rights to bakers, but the choice of transaction to include in a given block is a pure prerogative of the baker.

As is turns out, picking the transactions with the highest fees is not always the most lucrative choice. Consider for example Liquidity Baking. With every block may come an arbitrage opportunity between tez and tzBTC. The baker of the block has the power to capture this opportunity by inserting a trade as the first transaction of the block.

In Quipuswap or other automated market maker contracts, every trade changes the exchange rate of the traded pair. This creates additional opportunities for the baker to extract value from the transaction by inserting another transaction before and/or after the user’s trade.

This is detrimential to Tezos users, who generally want their transactions to be included cheaply, quickly and privately.

The theoretical gain for the baker is called BPEV: block producer extractable value, also known as Miner Extractable Value (MEV) in other ecosystems.

All it takes to wield this power is to modify the Tezos baker code. Bakers may select and order transactions themselves or outsource it to bots, which in turn pay the bakers for access. Anyone pushing a transaction to the network is at risk of being reordered or censored. This is colloquially known in the Ethereum ecosystem as the dark forest.

This is very much a reality in Ethereum and could become an issue in the Tezos ecosystem too. The Flashbake initiative addresses this.

## A Private Mempool

Profitable transactions on Tezos are bid upon in the public mempool. Flashbake is a private, off chain, system to send a transaction to a baker. It benefits the Tezos network and its users in a few ways:

* Less Mempool Congestion — By moving bidding transactions off chain, there are less transactions in the mempool, which lowers the memory consumption of Tezos Nodes, decreases P2P network I/O and quicker inclusion for other transactions
* Less Consumed Blockspace — Any transactions that are outbid for a profitable opportunity will generally fail, but still be included in a block. This failure consumes available block space, baker compute resources, and increases the amount of disk space required to run the Tezos chain.

Additionally, users of this system benefit in a few ways:

* Privacy — Users may submit transactions that are not publicly visible until inclusion in a block
* Decreased Cost — Since the private system drops transactions not able to be executed, transaction fees from these transactions are not paid by the users.
