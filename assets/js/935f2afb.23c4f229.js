"use strict";(self.webpackChunkflashbake_doc=self.webpackChunkflashbake_doc||[]).push([[53],{1109:function(e){e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"flashbakeSidebar":[{"type":"link","label":"Flashbake","href":"/docs/intro","docId":"intro"},{"type":"link","label":"Architecture","href":"/docs/architecture","docId":"architecture"},{"type":"category","label":"Run Flashbake","collapsed":false,"items":[{"type":"link","label":"Flashbake Registry","href":"/docs/flashbake-registry","docId":"flashbake-registry"},{"type":"link","label":"Flashbake Endpoint","href":"/docs/flashbake-endpoint","docId":"flashbake-endpoint"},{"type":"link","label":"Flashbake Relay","href":"/docs/flashbake-relay","docId":"flashbake-relay"}],"collapsible":true}]},"docs":{"architecture":{"id":"architecture","title":"Architecture","description":"Normal Transaction Flow","sidebar":"flashbakeSidebar"},"flashbake-endpoint":{"id":"flashbake-endpoint","title":"Flashbake Endpoint","description":"Every Flashbaker must expose a https endpoint to receive bundles from the relay. The purpose of the Flashbake Endpoint software is to listen to this endpoint, run an auction, then submit the winning bundle to the baker.","sidebar":"flashbakeSidebar"},"flashbake-registry":{"id":"flashbake-registry","title":"Flashbake Registry","description":"The Flashbake Registry is an on-chain table associating bakers with their Flashbake endpoint URL.","sidebar":"flashbakeSidebar"},"flashbake-relay":{"id":"flashbake-relay","title":"Flashbake Relay","description":"The Flashbake Relay acts as a Tezos Node, but instead of sending incoming transactions to the mempool, sends them straight to the baker.","sidebar":"flashbakeSidebar"},"intro":{"id":"intro","title":"Flashbake","description":"When a Tezos user submits a transaction, it is transmitted to the bakers who store it in their mempool until it is included in a block.","sidebar":"flashbakeSidebar"}}}')}}]);