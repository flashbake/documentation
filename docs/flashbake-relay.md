# Flashbake Relay

The Flashbake Relay acts as a Tezos Node, but instead of sending incoming transactions to the mempool, it sends them straight to the baker.

A public Flashbake relay is available at [flashbake.xyz](https://flashbake.xyz), but anyone can run a relay.

## How the Flashbake Relay works

A Flashbake relay is a process written in Typescript that needs a regular Tezos node running in the background. It proxies most requests to the node, but intercepts the "injection" operation.

When receiving an inbound operation, the relay queries the Flashbake registry for the endpoint URL of the next flashbaker. It assembles the operation into a "bundle" and forwards it to the flashbake endpoint.

It then monitors new blocks and waits for the transaction to be included. It keeps forwarding transactions until they are included, or expired.

## Deploying the Flashbake Relay

The Public Goods relay is available to submit your transactions, however you may want to deploy your own:

* for extra privacy: directly send transactions to the endpoint without sharing them with a third-party relay operator
* for reliability: send your transactions to flashbakers even when the public relay is unavailable.
