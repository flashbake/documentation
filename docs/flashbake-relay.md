# Flashbake Relay

The Flashbake Relay acts as a Tezos Node, but instead of sending incoming transactions to the mempool, sends them straight to the baker.

A public Flashbake relay is available at [flashbake.xyz](https://flashbake.xyz), but anyone can run a relay.

## Relay Operation

The Flashbake relay requires a regular Tezos node running in the background. It proxies most requests to the node, but intercepts the "injection" operation.

When receiving an inbound operation, the relay queries the Flashbake registry for the endpoint URL of the next flashbaker. It assembles the operation into a "bundle" and forwards it to the flashbake endpoint.

It then monitors new blocks and waits for the transaction to be included. It keeps forwarding transactions until they are included, or expired.

## Using the Public Goods Flashbake Relay

### With Octez CLI

Simply use the relay address as endpoint:

```
tezos-client --endpoint https://ghostnet.relay.flashbake.xyz transfer 1 from alice to bob
```

## How to Run the Flashbake Relay

The Public Goods relay is available to submit your transactions, however you may want to deploy your own:

* for extra privacy: directly send transactions to the endpoint without sharing them with a third-party relay operator
* for reliability: send your transactions to flashbakers even when the public relay is unavailable.

### Install it with NPM

```
npm install -g @flashbake/relay
```

Then run it:

```
flashbake-relay run --tezos_rpc_url http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732
```

### Install it with docker

```
docker run ghcr.io/flashbake/relay:latest run --tezos_rpc_url http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732
```

### Install it with Helm

```
helm repo add flashbake https://flashbake.github.io/endpoints-monorepo/
helm install flashbake-relay flashbake/relay --namespace flashbake --set tezos_rpc_url=http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732
```
