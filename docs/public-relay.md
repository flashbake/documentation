# Use the Public Relay

Simply use the relay address as endpoint:


### On Ghostnet

```
tezos-client --endpoint https://ghostnet.relay.flashbake.xyz \
  transfer 1 from alice to bob
```

This will take longer than using a regular endpoint, because not every baker is a flashbaker. However, the transaction will not be seen in the mempool, and therefore will be included privately.

You can observe that the transaction is indeed invisible to the mempool by visiting [TzFlow](https://ghostnet.tzflow.com/), an online mempool observation tool.

### On Mainnet

```
tezos-client --endpoint https://relay.flashbake.xyz \
  transfer 1 from alice to bob
```

This may never complete! In this early stage of Flashbake, few bakers are participating. If the next flashbaker is in more than 120 blocks, your transaction will expire and no longer be valid.
