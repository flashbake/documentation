# Flashbake Endpoint

Every Flashbaker must expose an HTTP endpoint to receive bundles from the relay. The purpose of the Flashbake Endpoint software is to listen to this endpoint, run an auction, then submit the winning bundle to the baker.

## Endpoint operation

The endpoint listens to 2 http endpoints:

* the bundle endpoint. This is the endpoint advertised in the registry.
* the baker endpoint. When the baker prepares for baking a block, it queries the external mempool specified with the `--operations-pool` argument.

The Flashbake endpoint may receive several bundles for inclusion from potentially several relays. When receiving a mempool query from the baker, the endpoint performs an **auction**: the transaction with the highest fee gets included.

The other transactions get discarded.


## How to run the Flashbake Endpoint

### Install it with NPM

```
npm install @flashbake/endpoint
```

Then run it:

```
flashbake-endpoint start --node_rpc_endpoint http://localhost:8732
```

### Install it with docker

```
docker run ghcr.io/flashbake/relay:latest --node_rpc_endpoint http://localhost:8732
```
