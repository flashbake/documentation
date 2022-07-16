# Run your own Relay

The Public Goods relay is available to submit your transactions, however you may want to deploy your own:

* for extra privacy: directly send transactions to the endpoint without sharing them with a third-party relay operator
* for reliability: send your transactions to flashbakers even when the public relay is unavailable.

## Relay Operation

The Flashbake relay requires a regular Tezos node running in the background. The Tezos node RPC URL must be passed with the `--tezos_rpc_url` argument.

It proxies most requests to the node, but intercepts the "injection" operation. Consequently, a Tezos client or library can interact with a Flashbake Relay the same way they would interact with a node. The port the relay is listening to must be passed with the `--relay_port` argument.

When receiving an inbound operation, the relay queries the Flashbake registry for the endpoint URL of the next Flashbaker. It assembles the operation into a "bundle" and forwards it to the Flashbake endpoint. The registry address must be passed with the `--registry_contract` argument.

It then monitors new blocks and waits for the transaction to be included. It keeps forwarding transactions until they are included, or expired.

## How to Run the Flashbake Relay

### Install it with NPM

```
npm install -g @flashbake/relay
```

Then run it:

```
flashbake-relay run --tezos_rpc_url http://localhost:8732 --registry_contract KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --relay_port 10732
```

### Install it with docker

```
docker run ghcr.io/flashbake/relay:latest run --tezos_rpc_url http://localhost:8732 --registry_contract KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --relay_port 10732
```

### Install it with Helm

```
helm repo add flashbake https://flashbake.github.io/endpoints-monorepo/
helm install flashbake-relay flashbake/relay --namespace flashbake --set tezos_rpc_url=http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732
```
