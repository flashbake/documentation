# Flashbake Registry

Once you have set up your flashbake endpoint, you must register it on-chain.

The Flashbake Registry is an on-chain table associating bakers with their Flashbake endpoint URL.

Any baker can register as a flashbaker by submitting their Flashbake endpoint URL to the contract storage.

To prevent spam, the flashbaker is required to deposit Tez into the contract in order to have their address registered.

| Chain | Contract Address | Deposit Amount |
| ----- | ---------------- | -------------- |
| Mainnet | [`KT1PQ21pYv12aUg6tHYvM9rwekYMXUtYGo2a`](https://tzkt.io/KT1PQ21pYv12aUg6tHYvM9rwekYMXUtYGo2a/storage/240377) | 10 tez |
| Ghostnet | [`KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r`](https://ghostnet.tzkt.io/KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r/storage/156204) | 1 test tez |

* [read the registry contract source code](https://github.com/flashbake/registry-contract).
* [explore the registry contract on BCD explorer](https://better-call.dev/mainnet/KT1PQ21pYv12aUg6tHYvM9rwekYMXUtYGo2a/operations)

## How to register as a flashbaker on Mainnet

To register as a flashbaker, issue the following command:

```
tezos-client \
  --endpoint https://mainnet.smartpy.io \
  transfer 10 from <YOUR BAKER ADDRESS> to KT1PQ21pYv12aUg6tHYvM9rwekYMXUtYGo2a \
  --entrypoint 'register' \
  --arg '"<YOUR FLASHBAKE_ENDPOINT_URL>"' \
  --burn-cap 0.037
```

`<YOUR_FLASHBAKE_ENDPOINT_URL>` should be the Flashbake endpoint relay listener URL. It is typically `https://<address>:<port>/flashbake/bundle`, where the relay listener of your Flashbake endpoint is publicly accessible on `<address>:<port>`.

To unregister and get your bond back:

```
tezos-client \
  --endpoint https://mainnet.smartpy.io \
  transfer 0 from <YOUR BAKER ADDRESS> to KT1PQ21pYv12aUg6tHYvM9rwekYMXUtYGo2a \
  --entrypoint 'unregister'
```

To update your flashbake endpoint address, you must unregister then re-register.

## How to register as a flashbaker on Ghostnet

Follow same instructions than above, but:
* `--endpoint` should be `--endpoint https://rpc.ghostnet.teztnets.xyz`
* `transfer` recipient should be `to KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r`
* `transfer 1` to the register bond instead of 10.

## Multi-sig setup

The registry contract on Ghostnet is controlled by a multi-signature. The only action allowed by the multi-signature setup is to change the bond amount required. This multi-signature can also be upgraded to another set of accounts, or revoked altogether to make the registry immutable and trustless.

The current set of participants to the multi-signature setup are:

|   | Ghostnet signer address  | Mainnet signer address   |
| - | - | - |
| Daniel Feygin | `tz1ZVJuBNjehw9zH1fiWGNNwJbFW8EcjHd5U` | `tz1TwT1geA5evgxcDDkQupzBNR2Xd23ggkRv` |
| Nicolas Ochem | `tz1Yyuh8uPKoQdMr2UxxQFwmmXfqGNGpxr3q` | `tz1eTAkgFRhAct6LEMkFbfhmZKWuw7AYV2y3` |
| Keefer Taylor | `tz1YhBQGs44StJTvzFUTubA6NaLUcnsDv4N5` | `tz1Vgr8svbAeMbmnC5tJxnB6WsB4h2iT6Mit` |
