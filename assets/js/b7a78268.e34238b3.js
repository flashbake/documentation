"use strict";(self.webpackChunkflashbake_doc=self.webpackChunkflashbake_doc||[]).push([[80],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),f=n,d=p["".concat(s,".").concat(f)]||p[f]||h[f]||l;return a?r.createElement(d,o(o({ref:t},c),{},{components:a})):r.createElement(d,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},178:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return h}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={},s="Flashbake Relay",u={unversionedId:"flashbake-relay",id:"flashbake-relay",title:"Flashbake Relay",description:"The Flashbake Relay acts as a Tezos Node, but instead of sending incoming transactions to the mempool, sends them straight to the baker.",source:"@site/docs/flashbake-relay.md",sourceDirName:".",slug:"/flashbake-relay",permalink:"/docs/flashbake-relay",draft:!1,editUrl:"https://github.com/flashbake/docs/flashbake-relay.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flashbake Registry",permalink:"/docs/flashbake-registry"}},c={},h=[{value:"Relay Operation",id:"relay-operation",level:2},{value:"Using the Public Goods Flashbake Relay",id:"using-the-public-goods-flashbake-relay",level:2},{value:"With Octez CLI",id:"with-octez-cli",level:3},{value:"How to Run the Flashbake Relay",id:"how-to-run-the-flashbake-relay",level:2},{value:"Install it with NPM",id:"install-it-with-npm",level:3},{value:"Install it with docker",id:"install-it-with-docker",level:3},{value:"Install it with Helm",id:"install-it-with-helm",level:3}],p={toc:h};function f(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"flashbake-relay"},"Flashbake Relay"),(0,l.kt)("p",null,"The Flashbake Relay acts as a Tezos Node, but instead of sending incoming transactions to the mempool, sends them straight to the baker."),(0,l.kt)("p",null,"A public Flashbake relay is available at ",(0,l.kt)("a",{parentName:"p",href:"https://flashbake.xyz"},"flashbake.xyz"),", but anyone can run a relay."),(0,l.kt)("h2",{id:"relay-operation"},"Relay Operation"),(0,l.kt)("p",null,'The Flashbake relay requires a regular Tezos node running in the background. It proxies most requests to the node, but intercepts the "injection" operation.'),(0,l.kt)("p",null,'When receiving an inbound operation, the relay queries the Flashbake registry for the endpoint URL of the next flashbaker. It assembles the operation into a "bundle" and forwards it to the flashbake endpoint.'),(0,l.kt)("p",null,"It then monitors new blocks and waits for the transaction to be included. It keeps forwarding transactions until they are included, or expired."),(0,l.kt)("h2",{id:"using-the-public-goods-flashbake-relay"},"Using the Public Goods Flashbake Relay"),(0,l.kt)("h3",{id:"with-octez-cli"},"With Octez CLI"),(0,l.kt)("p",null,"Simply use the relay address as endpoint:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"tezos-client --endpoint https://ghostnet.relay.flashbake.xyz transfer 1 from alice to bob\n")),(0,l.kt)("h2",{id:"how-to-run-the-flashbake-relay"},"How to Run the Flashbake Relay"),(0,l.kt)("p",null,"The Public Goods relay is available to submit your transactions, however you may want to deploy your own:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"for extra privacy: directly send transactions to the endpoint without sharing them with a third-party relay operator"),(0,l.kt)("li",{parentName:"ul"},"for reliability: send your transactions to flashbakers even when the public relay is unavailable.")),(0,l.kt)("h3",{id:"install-it-with-npm"},"Install it with NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"npm install -g @flashbake/relay\n")),(0,l.kt)("p",null,"Then run it:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"flashbake-relay run --tezos_rpc_url http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732\n")),(0,l.kt)("h3",{id:"install-it-with-docker"},"Install it with docker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"docker run ghcr.io/flashbake/relay:latest run --tezos_rpc_url http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732\n")),(0,l.kt)("h3",{id:"install-it-with-helm"},"Install it with Helm"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"helm repo add flashbake https://flashbake.github.io/endpoints-monorepo/\nhelm install flashbake-relay flashbake/relay --namespace flashbake --set tezos_rpc_url=http://localhost:8732 --set registry_contract=KT1QuofAgnsWffHzLA7D78rxytJruGHDe7XG --set relay_port=10732\n")))}f.isMDXComponent=!0}}]);