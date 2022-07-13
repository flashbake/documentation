# Architecture

## Normal Transaction Flow

This is how a Tezos transaction normally happens:

![Normal Flow](/img/normal_transaction_flow.drawio.svg)

1. User submits a transaction to a Tezos node actings as RPC gateway: it could be a local node, or a backend node operated by the Defi or NFT Dapp,
1. The transaction is added to the mempool and propagates via the peer-to-peer network,
1. The baker bakes a block and injects it to its node,
1. The block gets propagated to the Tezos network.

We can see that this transcation is **not private** before getting included in a block: the RPC Gateway, the baker and anyone observing the mempool can see the transaction.

## Flashbake Transaction Flow

![Flashbake Flow](/img/flashbake_flow.svg)

1. User submits a transaction to the **Flashbake Relay**. It could be the relay hosted here (`https://ghostnet.relay.flashbake.xyz`) or you can also run your own,
1. For all intents and purposes (**except injection**), the Flasbake Relay acts as a Tezos Node and forwards all RPC queries to it,
1. The injection operation is intercepted. The node queries the Registry Contact for the next flashbake-capable baker's endpoint address, then forwards the operation to it,
1. The flashbake-capable baker (or **Flashbaker**) queries the Flashbake Endpoint for Flashbake operations and uses them, as well as it's node mempool, to assemble a block,
1. The baker bakes a block and injects it to its node,
1. The block gets propagated to the Tezos network.

The operation is kept private from anyone except the relay and the baker, until the block is propagated. Assuming the user is running their own relay, the operation is private from **everyone but the baker**.
