# Flashbake Registry

Once you have set up your flashbake endpoint, you must register it on-chain.

The Flashbake Registry is an on-chain table associating bakers with their Flashbake endpoint URL.

Any baker can register as a flashbaker by submitting their URL.

To prevent spam, the flashbaker is required to deposit Tez into the contract in order to have their address registered. On Ghostnet, this fee is set to 1 tez.

## How to register as a flashbaker on Ghostnet

To register as a flashbaker, issue the following command:

```
tezos-client \
  --endpoint https://rpc.ghostnet.teztnets.xyz \
  transfer 1 from <YOUR BAKER ADDRESS> to KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r \
  --entrypoint 'register' \
  --arg '"<YOUR FLASHBAKE_ENDPOINT_URL>"'
  --burn-cap 0.037
```

To unregister and get your bond back:

```
tezos-client \
  --endpoint https://rpc.ghostnet.teztnets.xyz \
  transfer 0 from <YOUR BAKER ADDRESS> to KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r \
  --entrypoint 'unregister'
```

To update your flashbake endpoint address, you must unregister then re-register.

## Multi-sig setup

The registry contract on Ghostnet is controlled by a multi-signature. The only action allowed by the multi-signature setup is to change the bond amount required. This multi-signature can also be upgraded to another set of accounts, or revoked altogether to make the registry immutable and trustless.

The current set of participants to the multi-signature setup are:

|   | Ghostnet address  | Mainnet address (soon)   |
| - | - | - |
| Daniel Feygin | `tz1ZVJuBNjehw9zH1fiWGNNwJbFW8EcjHd5U` | `tz1TwT1geA5evgxcDDkQupzBNR2Xd23ggkRv` |
| Nicolas Ochem | `tz1Yyuh8uPKoQdMr2UxxQFwmmXfqGNGpxr3q` | `tz1eTAkgFRhAct6LEMkFbfhmZKWuw7AYV2y3` |
| Keefer Taylor | `tz1YhBQGs44StJTvzFUTubA6NaLUcnsDv4N5` | `tz1Vgr8svbAeMbmnC5tJxnB6WsB4h2iT6Mit` |
