(this["webpackJsonpuse-mapbox-gl-js-with-react"]=this["webpackJsonpuse-mapbox-gl-js-with-react"]||[]).push([[0],{10:function(e,t,c){},11:function(e){e.exports=JSON.parse("{}")},13:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(4),o=c.n(s),a=(c(9),c(10),c(3)),i=c.n(a),u=(c(11),c(1));function b(){const e=Object(n.useRef)(null),t=Object(n.useRef)(null),[c,r]=Object(n.useState)(139.4534),[s,o]=Object(n.useState)(35.4548),[a,b]=Object(n.useState)(9);return Object(n.useEffect)((()=>{t.current||(t.current=new i.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[c,s],zoom:a}))})),Object(n.useEffect)((()=>{t.current&&t.current.on("move",(()=>{r(t.current.getCenter().lng.toFixed(4)),o(t.current.getCenter().lat.toFixed(4)),b(t.current.getZoom().toFixed(2))}))})),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"sidebar",children:["Longitude: ",c," | Latitude: ",s," | Zoom: ",a]}),Object(u.jsx)("div",{ref:e,className:"map-container"})]})}i.a.accessToken="pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA",o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.cb27c3fa.chunk.js.map