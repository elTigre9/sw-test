(this["webpackJsonpnotifications-api"]=this["webpackJsonpnotifications-api"]||[]).push([[0],{21:function(n,t,e){},22:function(n,t,e){},40:function(n,t){},44:function(n,t,e){"use strict";e.r(t);var o=e(5),i=e.n(o),c=e(13),s=e(1),r=e.n(s),a=e(14),u=e.n(a),l=(e(21),e(22),e(15)),d=e.n(l),f=e(0),h=function(){var n=Object(s.useRef)(""),t=function(t){if(n.current=t,"granted"===t)new Notification("Subscribed!",{body:"Thanks for subscribing!"})};return Object(f.jsxs)("section",{children:[Object(f.jsx)("button",{onClick:function(){console.log("notifs!"),window.Notification&&Notification.requestPermission().then(t)},children:"Show Notifs"}),Object(f.jsx)("button",{onClick:function(){if("granted"===n.current){console.log("scheduling job!");d.a.scheduleJob("*/1 * * * *",(function(){new Notification("Doing it!",{body:"And doing it, and doing it, well."})}))}},children:"Show Notifs"})]})};var g=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)("header",{className:"App-header",children:Object(f.jsx)("section",{children:Object(f.jsx)(h,{})})})})},b=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,45)).then((function(t){var e=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;e(n),o(n),i(n),c(n),s(n)}))};u.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(g,{})}),document.getElementById("root")),b(),window.addEventListener("load",Object(c.a)(i.a.mark((function n(){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("path: ",window.location.pathname),console.log("origin: ",window.location.origin),console.log("host: ",window.location.hostname),n.next=5,navigator.serviceWorker.register("./sw.js").then((function(n){console.log("sw registration was successful. Scope: ",n.scope)})).catch((function(n){return console.log("sw registration failed: ",n)}));case 5:n.sent;case 6:case"end":return n.stop()}}),n)}))))}},[[44,1,2]]]);
//# sourceMappingURL=main.988081a6.chunk.js.map