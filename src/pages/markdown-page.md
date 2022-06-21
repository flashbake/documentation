---
title: What is Flashbake
---

# What is flashbake

Tezos is a proof-of-stake blockchain. Like every blockchain, there are validators (bakers) putting together new blocks.

Typically, the content of the blocks is assembled by the baker based on the **mempool**, a set of operations exchanged by nodes in a peer-to-peer network.

Is it very efficient to send transactions through the mempool. But there are drawbacks: in particular, anyone can see the transaction before it gets included into a block.

**Flashbake** lets you send a transaction to a baker directly, bypassing the mempool.

## Flashbake architecture

There are two software components of flashbake: the Flashbake Relay (FBR) and Flashbake Endpoint (FBE).

This is the path of a typical Tezos transaction:

```
Tezos-client => Tezos-node => mempool => Tezos baker
```

In contrast, a Flashbake transaction follows the path:

```
Tezos-client => Flashbake Relay => Flashbake Endpoint => Tezos baker
```

### Flashbake Relay

The Relay is a software component that acts as a Tezos node. But when injecting a transaction, the Relay does not send it to the mempool. Instead, it parses the Flashbake registry to figure out the next flashbaker. It sends the transaction directly to the next flashbaker, bypassing the public mempool.

Anyone can run a relay, but we operate a public goods relay at https://flashbake.xyz

### Flashbake endpoint

The Endpoint is an extension to the Tezos baker that listens to incoming Flashbake transactions. Before the baker bakes a block, it queries the Flashbake endpoint for any operations received, and includes them in the block in addition to the operations present in the mempool.
