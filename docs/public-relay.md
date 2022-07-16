# Use the Public Relay

## On Ghostnet

Simply use the relay address as endpoint:

```
tezos-client --endpoint https://ghostnet.relay.flashbake.xyz transfer 1 from alice to bob
```

This will take longer than using a regular endpoint, because not every baker is a flashbaker. However, the transaction will not be seen in the mempool, and therefore will be included privately.

You can observe that the transaction is indeed invisible to the mempool by visiting [TzFlow](https://ghostnet.tzflow.com/), an online mempool observation tool.
