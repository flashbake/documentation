# Flashbake Endpoint

Every Flashbaker must expose a `https` endpoint to receive bundles from the relay. The purpose of the Flashbake Endpoint software is to listen to this endpoint, run an auction, then submit the winning bundle to the baker.

## Endpoint Operation

The Flashbake Endpoint listens on two ports:

* `relay_listener_port`: this is the endpoint advertised in the registry.
* `baker_listener_port`: the baker sends a query to this port when preparing for baking a block.

The Flashbake endpoint may receive several bundles for inclusion from potentially several relays. When receiving a mempool query from the baker, the endpoint performs an **auction**: the transaction with the highest fee gets included.

The other transactions get discarded.

## How to Run the Flashbake Endpoint

The endpoint is unique per Tezos baker and needs access to the RPC of the node associated with the baker.

### Install it with NPM

```
npm install -g @flashbake/baker-endpoint
```

Then run it:

```
flashbake-baker-endpoint run --tezos_rpc_url http://localhost:8732 --relay_listener_port 11732 --baker_listener_port 12732
```

### Install it with docker

```
docker run ghcr.io/flashbake/baker-endpoint:latest run --tezos_rpc_url http://localhost:8732 --relay_listener_port 11732 --baker_listener_port 12732
```

### Install it with Helm

```
helm repo add flashbake https://flashbake.github.io/endpoints-monorepo/
helm install flashbake-endpoint-0 flashbake/baker-endpoint --namespace flashbake --set tezos_rpc_url=http://flashbake-baker-0:8732 --set relay_listener_port=11732 --set baker_listener_port=12732
```

## Configure the baker to query the Flashbake Endpoint

Pass the operation to the baker
