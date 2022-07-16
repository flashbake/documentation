"use strict";(self.webpackChunkflashbake_doc=self.webpackChunkflashbake_doc||[]).push([[780],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||d[c]||o;return n?a.createElement(k,i(i({ref:t},h),{},{components:n})):a.createElement(k,i({ref:t},h))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2934:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Flashbake Endpoint",p={unversionedId:"flashbake-endpoint",id:"flashbake-endpoint",title:"Flashbake Endpoint",description:"Every Flashbaker must expose a https endpoint to receive bundles from the relay. The purpose of the Flashbake Endpoint software is to listen to this endpoint, run an auction, then submit the winning bundle to the baker.",source:"@site/docs/flashbake-endpoint.md",sourceDirName:".",slug:"/flashbake-endpoint",permalink:"/docs/flashbake-endpoint",draft:!1,editUrl:"https://github.com/flashbake/documentation/docs/flashbake-endpoint.md",tags:[],version:"current",frontMatter:{},sidebar:"flashbakeSidebar",previous:{title:"Use the Public Relay",permalink:"/docs/public-relay"},next:{title:"Flashbake Registry",permalink:"/docs/flashbake-registry"}},h={},d=[{value:"Endpoint Operation",id:"endpoint-operation",level:2},{value:"How to Run the Flashbake Endpoint",id:"how-to-run-the-flashbake-endpoint",level:2},{value:"Install it with NPM",id:"install-it-with-npm",level:3},{value:"Install it with docker",id:"install-it-with-docker",level:3},{value:"Install it with Helm",id:"install-it-with-helm",level:3},{value:"Configure the baker to query the Flashbake Endpoint",id:"configure-the-baker-to-query-the-flashbake-endpoint",level:2}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flashbake-endpoint"},"Flashbake Endpoint"),(0,o.kt)("p",null,"Every Flashbaker must expose a ",(0,o.kt)("inlineCode",{parentName:"p"},"https")," endpoint to receive bundles from the relay. The purpose of the Flashbake Endpoint software is to listen to this endpoint, run an auction, then submit the winning bundle to the baker."),(0,o.kt)("p",null,"The Flashbake relay is aware of who the next flashbaker is. This means, the flashbake endpoint will receive transactions shortly before it is their turn to bake, and will pick the most lucrative one for inclusion. Outside of this time period, the endpoint should generally not receive any transaction."),(0,o.kt)("h2",{id:"endpoint-operation"},"Endpoint Operation"),(0,o.kt)("p",null,"The Flashbake Endpoint listens on two ports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"relay_listener_port"),": this is the endpoint advertised in the registry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"baker_listener_port"),": the baker sends a query to this port when preparing for baking a block.")),(0,o.kt)("p",null,"The Flashbake endpoint may receive several bundles for inclusion from potentially several relays. When receiving a mempool query from the baker, the endpoint performs an ",(0,o.kt)("strong",{parentName:"p"},"auction"),": the transaction with the highest fee gets included."),(0,o.kt)("p",null,"The other transactions get discarded."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to accept transactions, the address of your baker endpoint is published on-chain. It is therefore public and may be victim of DDoS attacks. It is a good idea to protect your endpoint with anti-DDoS services such as ",(0,o.kt)("a",{parentName:"p",href:"https://cloudflare.com"},"Cloudflare"),"."),(0,o.kt)("p",{parentName:"div"},"On the Tezos network, the baker's IP addresses are hidden. It is recommended to host your flashbake endpoint in a different system than your baker, with a different IP. Otherwise, your baker's address will be exposed. The flashbake endpoint must be able to communicate with the baker and vice-versa."))),(0,o.kt)("h2",{id:"how-to-run-the-flashbake-endpoint"},"How to Run the Flashbake Endpoint"),(0,o.kt)("p",null,"The endpoint needs access to the RPC of the node associated with the baker. Pass the RPL URL with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--tezos_rpc_url")," parameter."),(0,o.kt)("h3",{id:"install-it-with-npm"},"Install it with NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install -g @flashbake/baker-endpoint\n")),(0,o.kt)("p",null,"Then run it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"flashbake-baker-endpoint run --tezos_rpc_url http://localhost:8732 --relay_listener_port 11732 --baker_listener_port 12732\n")),(0,o.kt)("h3",{id:"install-it-with-docker"},"Install it with docker"),(0,o.kt)("p",null,"To run the flashbake endpoint in a containerized environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run ghcr.io/flashbake/baker-endpoint:latest run --tezos_rpc_url http://localhost:8732 --relay_listener_port 11732 --baker_listener_port 12732\n")),(0,o.kt)("h3",{id:"install-it-with-helm"},"Install it with Helm"),(0,o.kt)("p",null,"To run the flashbake endpoint in a kubernetes environment (for example, in combination with ",(0,o.kt)("a",{parentName:"p",href:"https://tezos-k8s.xyz"},"Tezos-k8s"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"helm repo add flashbake https://flashbake.github.io/endpoints-monorepo/\nhelm install flashbake-endpoint-0 flashbake/baker-endpoint --namespace flashbake --set tezos_rpc_url=http://flashbake-baker-0:8732 --set relay_listener_port=11732 --set baker_listener_port=12732\n")),(0,o.kt)("h2",{id:"configure-the-baker-to-query-the-flashbake-endpoint"},"Configure the baker to query the Flashbake Endpoint"),(0,o.kt)("p",null,"In order for your Octez baker to query the endpoint and receive Flashbake operations each time it bakes, pass the following argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--operations-pool http(s)://<ENDPOINT_HOSTNAME>:<ENDPOINT_BAKER_LISTENER_PORT>\n")),(0,o.kt)("p",null,"Full example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tezos-baker-013-PtJakart bake with local node /path/to/local/node/datadir --operations-pool http://localhost:12732 mybakert\n")))}c.isMDXComponent=!0}}]);