# Flashbake Endpoint

Every Flashbaker must expose a `https` endpoint to receive bundles from the relay. The purpose of the Flashbake Endpoint software is to listen to this endpoint, run an auction, then submit the winning bundle to the baker.

The Flashbake relay is aware of who the next flashbaker is. This means, the flashbake endpoint will receive transactions shortly before it is their turn to bake, and will pick the most lucrative one for inclusion. Outside of this time period, the endpoint should generally not receive any transaction.

## Endpoint Operation

The Flashbake Endpoint listens on two ports:

* `relay_listener_port`: this is the endpoint advertised in the registry.
* `baker_listener_port`: the baker sends a query to this port when preparing for baking a block.

The Flashbake endpoint may receive several bundles for inclusion from potentially several relays. When receiving a mempool query from the baker, the endpoint performs an **auction**: the transaction with the highest fee gets included.

The other transactions get discarded.

:::caution

In order to accept transactions, the address of your baker endpoint is published on-chain. It is therefore public and may be victim of DDoS attacks. It is a good idea to protect your endpoint with anti-DDoS services such as [Cloudflare](https://cloudflare.com).

On the Tezos network, the baker's IP addresses are hidden. It is recommended to host your flashbake endpoint in a different system than your baker, with a different IP. Otherwise, your baker's address will be exposed. The flashbake endpoint must be able to communicate with the baker and vice-versa.

:::

## How to Run the Flashbake Endpoint

The endpoint needs access to the RPC of the node associated with the baker. Pass the RPL URL with the `--tezos_rpc_url` parameter.

### Install it with NPM

```
npm install -g @flashbake/baker-endpoint
```

Then run it:

```
flashbake-baker-endpoint run --tezos_rpc_url http://localhost:8732 --relay_listener_port 11732 --baker_listener_port 12732
```

### Install it with docker

To run the flashbake endpoint in a containerized environment:

```
docker run ghcr.io/flashbake/baker-endpoint:latest run --tezos_rpc_url http://localhost:8732 --relay_listener_port 11732 --baker_listener_port 12732
```

### Install it with Helm

To run the flashbake endpoint in a kubernetes environment (for example, in combination with [Tezos-k8s](https://tezos-k8s.xyz)):
```
helm repo add flashbake https://flashbake.github.io/endpoints-monorepo/
helm install flashbake-endpoint-0 flashbake/baker-endpoint --namespace flashbake --set tezos_rpc_url=http://flashbake-baker-0:8732 --set relay_listener_port=11732 --set baker_listener_port=12732
```

## Configure the baker to query the Flashbake Endpoint

In order for your Octez baker to query the endpoint and receive Flashbake operations each time it bakes, pass the following argument:

```
--operations-pool http(s)://<ENDPOINT_HOSTNAME>:<ENDPOINT_BAKER_LISTENER_PORT>
```

Full example:

```
tezos-baker-013-PtJakart bake with local node /path/to/local/node/datadir --operations-pool http://localhost:12732 mybakert
```
