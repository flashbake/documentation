"use strict";(self.webpackChunkflashbake_doc=self.webpackChunkflashbake_doc||[]).push([[436],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4076:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Flashbake Registry",u={unversionedId:"flashbake-registry",id:"flashbake-registry",title:"Flashbake Registry",description:"Once you have set up your flashbake endpoint, you must register it on-chain.",source:"@site/docs/flashbake-registry.md",sourceDirName:".",slug:"/flashbake-registry",permalink:"/docs/flashbake-registry",draft:!1,editUrl:"https://github.com/flashbake/documentation/docs/flashbake-registry.md",tags:[],version:"current",frontMatter:{},sidebar:"flashbakeSidebar",previous:{title:"Flashbake Endpoint",permalink:"/docs/flashbake-endpoint"},next:{title:"Run your own Relay",permalink:"/docs/flashbake-relay"}},p={},c=[{value:"How to register as a flashbaker on Ghostnet",id:"how-to-register-as-a-flashbaker-on-ghostnet",level:2},{value:"Multi-sig setup",id:"multi-sig-setup",level:2}],d={toc:c};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flashbake-registry"},"Flashbake Registry"),(0,o.kt)("p",null,"Once you have set up your flashbake endpoint, you must register it on-chain."),(0,o.kt)("p",null,"The Flashbake Registry is an on-chain table associating bakers with their Flashbake endpoint URL."),(0,o.kt)("p",null,"Any baker can register as a flashbaker by submitting their URL."),(0,o.kt)("p",null,"To prevent spam, the flashbaker is required to deposit Tez into the contract in order to have their address registered. On Ghostnet, this fee is set to 1 tez."),(0,o.kt)("h2",{id:"how-to-register-as-a-flashbaker-on-ghostnet"},"How to register as a flashbaker on Ghostnet"),(0,o.kt)("p",null,"To register as a flashbaker, issue the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tezos-client \\\n  --endpoint https://rpc.ghostnet.teztnets.xyz \\\n  transfer 1 from <YOUR BAKER ADDRESS> to KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r \\\n  --entrypoint 'register' \\\n  --arg '\"<YOUR FLASHBAKE_ENDPOINT_URL>\"'\n  --burn-cap 0.037\n")),(0,o.kt)("p",null,"To unregister and get your bond back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"tezos-client \\\n  --endpoint https://rpc.ghostnet.teztnets.xyz \\\n  transfer 0 from <YOUR BAKER ADDRESS> to KT1CWuYkWxZMSq8kA12Kt5NpFGjSRac1Dc4r \\\n  --entrypoint 'unregister'\n")),(0,o.kt)("p",null,"To update your flashbake endpoint address, you must unregister then re-register."),(0,o.kt)("h2",{id:"multi-sig-setup"},"Multi-sig setup"),(0,o.kt)("p",null,"The registry contract on Ghostnet is controlled by a multi-signature. The only action allowed by the multi-signature setup is to change the bond amount required. This multi-signature can also be upgraded to another set of accounts, or revoked altogether to make the registry immutable and trustless."),(0,o.kt)("p",null,"The current set of participants to the multi-signature setup are:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Ghostnet address"),(0,o.kt)("th",{parentName:"tr",align:null},"Mainnet address (soon)"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Daniel Feygin"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tz1ZVJuBNjehw9zH1fiWGNNwJbFW8EcjHd5U")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tz1TwT1geA5evgxcDDkQupzBNR2Xd23ggkRv"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nicolas Ochem"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tz1Yyuh8uPKoQdMr2UxxQFwmmXfqGNGpxr3q")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tz1eTAkgFRhAct6LEMkFbfhmZKWuw7AYV2y3"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Keefer Taylor"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tz1YhBQGs44StJTvzFUTubA6NaLUcnsDv4N5")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tz1Vgr8svbAeMbmnC5tJxnB6WsB4h2iT6Mit"))))))}h.isMDXComponent=!0}}]);