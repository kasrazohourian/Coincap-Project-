_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("g4pe"),o=a.n(i),c=a("bC6P"),s=a("wx14"),l=a("1OyB"),d=a("vuIU"),u=a("JX7q"),p=a("Ji7U"),b=a("md7G"),f=a("foSv"),h=a("rePB"),g=a("h4VS"),y=a("UYTu"),v=a("OFL0"),m=a.n(v),k=a("ifvJ"),C=a("HqBY"),O=a("MGhE"),S=a("ZBH1"),j=a("YFqc"),w=a.n(j),P=a("TSYQ"),R=a.n(P),U=a("E+oP"),x=a.n(U),T=a("Mt1y"),D=a("QetY"),A=a("3mGJ"),E=a("yE/o"),I=a("UI18"),N=a("kJcC"),M=a("ODXe"),H=a("3hPq"),L=a.n(H),_=a("ikXu"),$=a("DiCT"),J=a("H3Xn"),q=r.a.createElement;function F(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(b.a)(this,a)}}var X=function(e){Object(p.a)(a,e);var t=F(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(h.a)(Object(u.a)(e),"state",{direction:null}),Object(h.a)(Object(u.a)(e),"getPriceShownDecimals",(function(e){for(var t=e.toString().split("."),a=Object(M.a)(t,2)[1],n=0,r=a.length,i=0;i<a.length;i++)if("0"!==a.charAt(i)){n=i;break}return n+2<a.length&&(r=n+2),r})),e}return Object(d.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this,a=this.props.priceUsd,n=a&&a<1?this.getPriceShownDecimals(a):2,r=parseFloat(e.priceUsd).toFixed(n),i=parseFloat(a).toFixed(n);if(r===i)return null;var o=r>=i?"up":"down";this.props.priceUsd&&this.setState({direction:o},(function(){setTimeout((function(){t.setState({direction:null})}),500)}))}},{key:"render",value:function(){var e=this.state.direction,t=this.props,a=t.id,n=t.logo,r=t.changePercent24Hr,i=t.marketCapUsd,o=t.name,c=t.onClick,s=t.priceUsd,l=t.rank,d=t.supply,u=t.symbol,p=t.volumeUsd24Hr,b=t.vwapUsd24Hr,f={up:"flash-green",down:"flash-red"}[e];return q(_.a.Row,{onClick:c,textAlign:"right",className:f},q(_.a.Cell,{textAlign:"center",className:"xs-hidden"},l),q(_.a.Cell,{textAlign:"left",colSpan:"2"},q(J.a,{asset:{id:a,symbol:u,logo:n},style:{styled:!0}}),q("div",{style:{display:"inline-block",verticalAlign:"middle"},className:"ellipsis"},q(w.a,{as:"/assets/".concat(a),href:"/asset?id=".concat(a)},q("a",{onClick:function(e){return e.stopPropagation()}},o,q("p",{style:{fontSize:"0.8em",opacity:"0.7"}},u))))),q(_.a.Cell,null,q($.a,{value:s,symbol:a,withLeadingZeroes:!0})),q(_.a.Cell,{className:"xs-hidden"},q($.a,{value:i,format:"0.00",isAbbreviated:!0})),q(_.a.Cell,{className:"tablet-hidden xs-hidden"},q($.a,{value:b,symbol:a,withLeadingZeroes:!0})),q(_.a.Cell,{className:"tablet-hidden xs-hidden"},q($.a,{value:d,isCurrency:!1,format:"0.00",isAbbreviated:!0})),q(_.a.Cell,{className:"xs-hidden"},q($.a,{value:p,format:"0.00",isAbbreviated:!0})),q(_.a.Cell,null,q($.a,{value:r,isPercent:!0,symbol:a})))}}]),a}(r.a.Component),B=L()(X,700,{maxWait:1400}),Y=a("wLve"),G=a("88JX"),z=a("Y7hU"),W=r.a.createElement,Z=[{key:"rank",label:W(N.a,{phrase:"rank"}),align:"center",hideMobile:!0},{key:"name",label:W(N.a,{phrase:"name"}),align:"left"},{key:"priceUsd",label:W(N.a,{phrase:"price"})},{key:"marketCapUsd",label:W(N.a,{phrase:"mkt_cap"}),hideMobile:!0},{key:"vwapUsd24Hr",label:W("span",null,"VWAP",W(N.a,{isDay:!0})),hideMobile:!0,hideTablet:!0},{key:"supply",label:W(N.a,{phrase:"avail_sup"}),hideMobile:!0,hideTablet:!0},{key:"volumeUsd24Hr",label:W(N.a,{phrase:"volume",isDay:!0}),hideMobile:!0},{key:"changePercent24Hr",label:W(N.a,{phrase:"change",isDay:!0}),hideMobile:!0},{key:"changePercent24Hr",label:W(N.a,{isDay:!0}),hideDesktop:!0,hideTablet:!0}],Q={},V={},K=function(e){var t=e.chartRowIndex,a=e.coinsPerPage,r=e.data,i=e.direction,c=e.error,l=e.loading,d=e.maxLimit,u=e.onLoadMoreClick,p=e.onSortClick,b=e.onTableRowClick,f=e.sort,h=e.priceUpdates;if(Object(n.useEffect)((function(){z.a.track(z.a.events.ASSETS.LIST)}),[]),c?(z.a.trackError(z.a.events.ASSETS.LIST,c),console.error(c),r=V):V=r,x()(r)||x()(r.edges))return null;var g=Z.map((function(e,t){return W(G.a.HeaderCell,{key:"".concat(e.key).concat(t),sorted:e.key===f?i:null,onClick:e.notSortable?void 0:p(e.key),textAlign:e.align?e.align:"right",className:R()({"xs-hidden":e.hideMobile,"tablet-hidden":e.hideTablet,"desktop-hidden":e.hideDesktop,"not-sortable":e.notSortable}),colSpan:"name"===e.key?"2":"1"},e.label)})),y=r.edges.map((function(e,a){var r=e.node;return Q[r.id]?h[r.id]&&(Q[r.id]=h[r.id]):Q[r.id]=r.priceUsd,W(n.Fragment,{key:r.id},W(B,Object(s.a)({},r,{priceUsd:Q[r.id],onClick:function(){b(a),z.a.track(z.a.events.ASSETS.ITEM,{asset:r.name})}})),t===a&&W("tr",{id:"chart-row"},W("td",{colSpan:"10"},W(I.a,{id:r.id}),W(T.a,{hidden:!0}),W(w.a,{as:"/assets/".concat(r.id),href:"/asset?id=".concat(r.id)},W(D.a,{primary:!0,circular:!0,className:"cta-button"},"More Details")),W(T.a,{hidden:!0}))))}));return W(A.a,{className:"table-segment",padded:!0,style:{marginTop:0,marginBottom:0}},W(o.a,null,W("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Table",about:"Cryptocurrency Prices Today"}))),W(E.a,{style:{marginTop:"-10em"}},W(G.a,{sortable:!0,singleLine:!0,unstackable:!0,selectable:!0,cellspacing:0,cellpadding:0},W(G.a.Header,null,W(G.a.Row,{textAlign:"center"},g)),W(G.a.Body,null,y)),a<d&&W(Y.a,{hasNextPage:r&&r.pageInfo&&r.pageInfo.hasNextPage,onClick:u,loading:l})))};K.defaultProps={chartRowIndex:null,direction:"descending",data:{edges:[]},error:!1,loading:!1,sort:"marketCapUsd",priceUpdates:[]};var ee=K,te=r.a.createElement;function ae(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(a),!0).forEach((function(t){Object(h.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ae(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function re(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(f.a)(e);if(t){var r=Object(f.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(b.a)(this,a)}}function ie(){var e=Object(g.a)(["\n  subscription ($assetIds: [ID]) {\n    averagePriceUpdates(assetIds: $assetIds) {\n      assetId\n      priceUsd\n    }\n  }\n"]);return ie=function(){return e},e}function oe(){var e=Object(g.a)(["\n  query (\n    $after: String\n    $before: String\n    $direction: SortDirection\n    $first: Int\n    $last: Int\n    $sort: AssetSortInput\n  ) {\n    assets(\n      after: $after\n      before: $before\n      direction: $direction\n      first: $first\n      last: $last\n      sort: $sort\n    ) {\n      pageInfo {\n        startCursor\n        endCursor\n        hasNextPage\n        hasPreviousPage\n      }\n      edges {\n        cursor\n        node {\n          changePercent24Hr\n          name\n          id\n          logo\n          marketCapUsd\n          priceUsd\n          rank\n          supply\n          symbol\n          volumeUsd24Hr\n          vwapUsd24Hr\n        }\n      }\n    }\n  }\n"]);return oe=function(){return e},e}var ce=Object(y.a)(oe()),se=Object(y.a)(ie()),le=Object(k.a)({assetData:function(e){var t=e.render,a=e.variables;return te(C.a,{query:ce,variables:a,pollInterval:6e4},t)},settings:te(S.a.Consumer,null)}),de=2e3,ue={},pe=function(e){Object(p.a)(a,e);var t=re(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return e=t.call.apply(t,[this].concat(r)),Object(h.a)(Object(u.a)(e),"state",ne({coinsPerPage:20,chartRowIndex:null,direction:"ASC",pageNumber:1,search:"",sort:"rank",tradableCoins:null},ue)),Object(h.a)(Object(u.a)(e),"handleSort",(function(t){return function(){var a=e.state,n=a.direction;a.sort===t?e.setState({direction:"ASC"===n?"DESC":"ASC"},e.saveCache):e.setState({sort:t,direction:"DESC"},e.saveCache)}})),Object(h.a)(Object(u.a)(e),"handleTableRowClick",(function(t){return e.state.chartRowIndex===t?e.setState({chartRowIndex:null}):e.setState({chartRowIndex:t})})),Object(h.a)(Object(u.a)(e),"handleLoadMoreClick",(function(){var t=e.state.coinsPerPage+40;e.setState({coinsPerPage:t},e.saveCache)})),e}return Object(d.a)(a,[{key:"saveCache",value:function(){ue=this.state}},{key:"render",value:function(){var e=this,t=this.state,a=t.coinsPerPage,n=t.direction,r=t.search,i=t.sort;return te(le,{variables:{direction:n,first:a>de?de:a,search:r,sort:i}},(function(t){var a=t.settings,r=t.assetData,i=r.data,o=r.error,c=r.loading;if(a.blinkies){var l=m()(i,"assets.edges")&&i.assets.edges.map((function(e){return e.node.id}));return te(O.a,{subscription:se,variables:{assetIds:l}},(function(t){var a=t.data,r=(a=void 0===a?{}:a).averagePriceUpdates,l=(void 0===r?[]:r).reduce((function(e,t){return e[t.assetId]=t.priceUsd,e}),{});return te(ee,Object(s.a)({},e.state,{maxLimit:de,data:i&&i.assets,direction:"ASC"===n?"ascending":"descending",error:o,loading:c,onLoadMoreClick:e.handleLoadMoreClick,onSortClick:e.handleSort,onTableRowClick:e.handleTableRowClick,priceUpdates:l}))}))}return te(ee,Object(s.a)({},e.state,{data:i&&i.assets,direction:"ASC"===n?"ascending":"descending",error:o,loading:c,onLoadMoreClick:e.handleLoadMoreClick,onSortClick:e.handleSort,onTableRowClick:e.handleTableRowClick}))}))}}]),a}(n.Component);Object(h.a)(pe,"displayName","AssetTable");var be=pe,fe=r.a.createElement,he=function(){return fe(r.a.Fragment,null,fe(o.a,null,fe("title",null,"CoinCap.io | Reliable Cryptocurrency Prices and Market Capitalizations"),fe("meta",{name:"description",content:"Real-time cryptocurrency market cap rankings, trading charts, and more."}),fe("script",{type:"application/ld+json"},JSON.stringify({"@context":"http://schema.org","@type":"Organization",name:"coincap",url:"https://coincap.io",logo:"https://coincap.io/static/logos/black.svg",sameAs:["https://www.facebook.com/coincapmarketdata","https://twitter.com/coincap"]}))),fe(c.a,null),fe(be,null))},ge=a("G9T2"),ye=r.a.createElement;t.default=function(){return Object(n.useEffect)((function(){z.a.track(z.a.events.APP.STARTED)}),[]),ye(ge.a,null,ye(he,null))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,2,11,9,0,3,4,5,6,10,8,13]]]);