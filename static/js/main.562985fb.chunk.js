(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(n,e,t){n.exports=t(67)},41:function(n,e,t){},52:function(n,e,t){},67:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t.n(r),a=t(8),l=t.n(a),i=(t(41),t(2)),c=t(3),u=t(4);t(52);function f(){var n=Object(i.a)(["\n  width: 100%%;\n  height: 100%;\n  &:hover {\n    cursor: pointer;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(i.a)(["\n  margin-left: 10%;\n  margin-right: 5%;\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return m=function(){return n},n}function s(){var n=Object(i.a)(["\n  text-decoration: none;\n  font-weight: bold;\n  color: #f0fff0;\n\n  height: 100%;\n\n  &:active {\n    color: white;\n  }\n  &:hover {\n    color: #2f4f4f;\n  }\n  &:visited {\n    color: yellow;\n  }\n"]);return s=function(){return n},n}function b(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: flex-start;\n  flex-direction: column;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  width: 10%;\n\n  margin-left : 10px;\n\n  background-color: #000000;\n"]);return b=function(){return n},n}function g(){var n=Object(i.a)(["\n  margin: 0;\n  color: #2c2c2c;\n  background-color: #696969;\n  z-index: 1;\n  position: relative;\n"]);return g=function(){return n},n}var d=c.a.div(g()),h=Object(c.a)(d)(b()),p=(c.a.a(s()),c.a.a(m())),E=c.a.img(f()),v=function(n){Object(r.useEffect)((function(){u.Events.scrollEvent.register("begin",(function(n,e){console.log("begin",arguments)})),u.Events.scrollEvent.register("end",(function(n,e){console.log("end",arguments)})),u.scrollSpy.update()}),[]),Object(r.useEffect)((function(){return function(){u.Events.scrollEvent.remove("begin"),u.Events.scrollEvent.remove("end")}}));var e=window.innerHeight,t=!1;window.innerWidth<=768&&(t=!0);var a=e/100*10;!0===t&&(a=e/100*12);var l=function(){u.animateScroll.scrollToTop()};return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,{height:a,isMobile:t,id:"TopNavi"},o.a.createElement(p,{onClick:l,onTouchEnd:l},o.a.createElement(E,{id:"logo",src:"./logo.png"}))))},x=t(7),w=t(0),j=t(5),O=t(19),y=t.n(O);function k(){var n=Object(i.a)(["\n  font-size: ","px;\n  ",";\n  ",";\n  font-weight: ",";\n"]);return k=function(){return n},n}function S(){var n=Object(i.a)(["\n  font-size: 25px;\n  margin-bottom: none;\n  color: blue;\n  font-weight: bold;\n"]);return S=function(){return n},n}function C(){var n=Object(i.a)(["\n  font-size: 20px;\n  font-weight: light-bold;\n  margin: 0;\n"]);return C=function(){return n},n}function T(){var n=Object(i.a)(["\n  font-size: 40px;\n  font-weight: bold;\n  margin: 0;\n"]);return T=function(){return n},n}function M(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  margin: auto;\n  text-align: center;\n"]);return M=function(){return n},n}function z(){var n=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 49.5%;\n"]);return z=function(){return n},n}function I(){var n=Object(i.a)(["\n  animation: "," 10s linear infinite;\n  background-color: #000000;\n  border: none;\n  z-index: -1;\n"]);return I=function(){return n},n}function N(){var n=Object(i.a)(["\n    100%{\n        transform: rotate(360deg);\n    }\n"]);return N=function(){return n},n}function A(){var n=Object(i.a)(["\n  font-weight: 500;\n  font-size: 50px;\n  text-shadow: 6px 2px 2px gray;\n\n  -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(250, 250, 250, 0.2)));\n"]);return A=function(){return n},n}function J(){var n=Object(i.a)(["\n  display: block;\n  color: white;\n\n  text-align: center;\n\n  &:hover {\n    "," {\n      display: inline;\n    }\n  }\n"]);return J=function(){return n},n}function R(){var n=Object(i.a)(["\n  width: 100%;\n  height: ","px;\n  min-height: 450px;\n  max-height: 600px;\n  background-color: #000000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return R=function(){return n},n}function D(){var n=Object(i.a)(["\n  display: none;\n  float: right;\n"]);return D=function(){return n},n}y.a.setAppElement("#root");var F=Math.floor(Date.now()/1e3),B=Math.floor((F-1560092400)/86400),H=function(){return o.a.createElement(X,{lastChild:!0},"\uc794\uc5ec\ubcf5\ubb34\uc77c : ",B," / ",1035," (",Math.floor(B/1035*100),"%)")},P=c.a.p(D()),L=c.a.div(R(),(function(n){return.1*n.clientHeight})),W=c.a.div(J(),P),Q=c.a.p(A()),q=Object(c.b)(N()),$=c.a.button(I(),q),_=c.a.div(z()),G=c.a.div(M()),K=c.a.p(T()),U=c.a.p(C()),V=c.a.p(S()),X=c.a.p(k(),(function(n){return n.lastChild?20:22}),(function(n){return n.firstChild||n.lastChild?null:"margin-top:0px"}),(function(n){return n.lastChild?null:"margin-bottom: 0"}),(function(n){return n.lastChild?"bold":null})),Y=function(n){var e=document.body.clientHeight,t=Object(r.useState)(!1),a=Object(x.a)(t,2),l=a[0],i=a[1],c=function(){i(!0)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(L,{height:n.height,clientHeight:e},o.a.createElement(W,null,o.a.createElement(_,null,o.a.createElement(P,null,o.a.createElement(w.b.Provider,{value:{color:"white",size:"1.5em"}},o.a.createElement(j.d,null)))),o.a.createElement(w.b.Provider,{value:{color:"white",size:"4em"}},o.a.createElement($,null,o.a.createElement(j.g,{onMouseOver:function(){c()},onTouchStart:function(){c()},style:{zIndex:0}}))),o.a.createElement(Q,null,"ReactJS Developer")),o.a.createElement(y.a,{isOpen:l,onRequestClose:function(){i(!1)},shouldCloseOnOverlayClick:!0,shouldCloseOnEsc:!0,style:{overlay:{backgroundColor:"#000000",opacity:.8},content:{opacity:1,width:"30%",height:"30%",margin:"auto"}}},o.a.createElement(G,null,o.a.createElement(K,null,"\uc815\uc131\uc9c4"),o.a.createElement(U,null,"(Jeong Seong Jin)"),o.a.createElement(V,null,"#\uc0b0\uc5c5\uae30\ub2a5\uc694\uc6d0 #React #Developer #Flysher #QA"),o.a.createElement(X,{firstChild:!0},"- \uc0dd\ub144\uc6d4\uc77c : 2000/07/18"),o.a.createElement(X,null,"- \ud559\ub825 : \ud55c\uc138\uc0ac\uc774\ubc84\ubcf4\uc548\uace0\ub4f1\ud559\uad50 \uc878\uc5c5"),o.a.createElement(X,null,"- \uacbd\ub825 : Flysher (QA)"),o.a.createElement(H,null)))))};function Z(){var n=Object(i.a)(["\n  width: 50%;\n  height: auto;\n  background-color: #2c2c2c;\n  display: flex;\n\n  justify-content: center;\n  flex-wrap: wrap;\n\n  border-radius: 30px;\n\n  margin: 50px 0px;\n"]);return Z=function(){return n},n}function nn(){var n=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background-color: #000000;\n"]);return nn=function(){return n},n}var en=function(n){var e=n.children;return o.a.createElement(rn,null,e)},tn=function(n){var e=n.children,t=n.id;return o.a.createElement(on,{id:t},e)},rn=c.a.div(nn()),on=c.a.div(Z()),an=t(20),ln=function(n){return o.a.createElement(an.TimelineEvent,{title:n.title||"NONE",titleStyle:{color:n.titleColor||"white",fontSize:"30px",fontWeight:n.now?"bold":null,textShadow:n.now?"4px 2px 2px gray":null},contentStyle:{color:"white",fontSize:"20px",fontWeight:"500",backgroundColor:n.contentColor||"#543864",boxShadow:"5px 5px 5px gray"},bubbleStyle:{backgroundColor:n.bubbleColor||"#2c2c2c"}},n.content||"Please Enter some Texts")},cn=function(){return o.a.createElement(en,null,o.a.createElement(tn,{id:"TimeLine"},o.a.createElement(an.Timeline,null,o.a.createElement(ln,{title:"Birth",titleColor:"#f2a51a",content:"2000/ 07/ 18 \ucd9c\uc0dd...."}),o.a.createElement(ln,{title:"Middle School",content:"2013 \ubcf4\uc778\uc911\ud559\uad50 \uc785\ud559",bubbleColor:"#f2ed6f"}),o.a.createElement(ln,{title:"High School",content:"2016 \ubcf4\uc778\uc911\ud559\uad50 \uc878\uc5c5 & \ud55c\uc138\uc0ac\uc774\ubc84\ubcf4\uc548\uace0\ub4f1\ud559\uad50 \uc785\ud559",bubbleColor:"#f2ed6f"}),o.a.createElement(ln,{title:"Joined Flysher",titleColor:"skyblue",content:"2019 \ud50c\ub77c\uc774\uc154 \uc785\uc0ac & \ud55c\uc138 \uc0ac\uc774\ubc84 \ubcf4\uc548\uace0\ub4f1\ud559\uad50 \uc878\uc5c5 & \uc0b0\uc5c5\uae30\ub2a5\uc694\uc6d0 \uc120\ubc1c ",bubbleColor:"skyblue"}),o.a.createElement(ln,{title:"Now",titleColor:"#b9ebcc",content:"2020 \uc0b0\uc5c5\uae30\ub2a5\uc694\uc6d0 Ing... & React.js Learning!! ",bubbleColor:"green",now:!0}))))},un=t(21);function fn(){var n=Object(i.a)(["\n  color: white;\n  font-weight: light;\n\n  margin: 0;\n"]);return fn=function(){return n},n}function mn(){var n=Object(i.a)(["\n  color: white;\n  font-weight: bold;\n\n  margin: 0;\n"]);return mn=function(){return n},n}function sn(){var n=Object(i.a)(["\n  min-width: 130px;\n  max-width: 130px;\n  max-height: 150px;\n  min-height: 150px;\n  display: block;\n  text-align: center;\n\n  margin: 20px;\n  padding: 20px;\n\n  background-color: #4d4c7d;\n\n  border-radius: 30px;\n"]);return sn=function(){return n},n}var bn=function(n){return o.a.createElement(gn,null,o.a.createElement(w.b.Provider,{value:{color:"white",size:"5em"}},n.icon),o.a.createElement(dn,null,n.title),o.a.createElement(hn,null,n.sub))},gn=c.a.div(sn()),dn=c.a.h2(mn()),hn=c.a.p(fn()),pn=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(en,null,o.a.createElement(tn,{id:"Skills"},o.a.createElement(bn,{icon:o.a.createElement(j.g,null),title:"React",sub:"INTERMEDIATE"}),o.a.createElement(bn,{icon:o.a.createElement(j.e,null),title:"Node.js",sub:"INTERMEDIATE"}),o.a.createElement(bn,{icon:o.a.createElement(un.b,null),title:"SQL",sub:"BASIC"}),o.a.createElement(bn,{icon:o.a.createElement(j.a,null),title:"AWS",sub:"BASIC"}),o.a.createElement(bn,{icon:o.a.createElement(un.a,null),title:"Javascript",sub:"INTERMEDIATE"}),o.a.createElement(bn,{icon:o.a.createElement(j.b,null),title:"CSS",sub:"INTERMEDIATE"}),o.a.createElement(bn,{icon:o.a.createElement(j.c,null),title:"HTML",sub:"INTERMEDIATE"}))))},En=t(22),vn=t(34),xn=t(33),wn=t.n(xn);function jn(){var n=Object(i.a)(["\n    position : absolute;\n    animation: "," 1.5s alternate infinite;\n    animation-timing-function : ease-in-out;\n    background-color : #2c2c2c;\n    border : none;\n"]);return jn=function(){return n},n}function On(){var n=Object(i.a)(["\n    0% {\n        right:45%;\n        bottom : 0%;\n    }\n    20%{\n        right:45%;\n        bottom:45%;\n    }\n    100%{\n        right:45%;\n        bottom:45%;\n    }\n"]);return On=function(){return n},n}function yn(){var n=Object(i.a)(["\n    border-left : 3px solid blue;\n    padding : 10px;\n    margin:0px;\n"]);return yn=function(){return n},n}function kn(){var n=Object(i.a)(["\n  float: right;\n  margin-right: 50px;\n  margin-bottom: 10px;\n"]);return kn=function(){return n},n}function Sn(){var n=Object(i.a)(["\n  font-weight: 300;\n  margin-top: 0px;\n  margin-left: 5px;\n"]);return Sn=function(){return n},n}function Cn(){var n=Object(i.a)(["\n  font-weight: 500;\n  margin: 50px 0px;\n  margin-bottom: 0px;\n"]);return Cn=function(){return n},n}function Tn(){var n=Object(i.a)(["\n  margin-left: 50px;\n  font-weight: 500;\n  float: left;\n\n  display: block;\n"]);return Tn=function(){return n},n}function Mn(){var n=Object(i.a)(["\n  width: 50vh;\n  height: 30vh;\n\n  position: relative;\n//   ","\n\n  background-color: ",";\n\n  margin: 50px 0px;\n\n  border-radius: 10px;\n"]);return Mn=function(){return n},n}var zn=c.a.div(Mn(),(function(n){return n.front?"display:flex":null}),(function(n){return n.bgColor||"palevioletred"})),In=c.a.div(Tn()),Nn=c.a.h1(Cn()),An=c.a.h3(Sn()),Jn=c.a.div(kn()),Rn=c.a.p(yn()),Dn=Object(c.b)(On()),Fn=c.a.button(jn(),Dn),Bn=function(){var n=Object(r.useState)(!1),e=Object(x.a)(n,2),t=e[0],a=e[1],l=function(n){n.preventDefault(),a(!t)};return Object(r.useEffect)((function(){document.body.onclick=function(){a(!1)}}),[]),o.a.createElement(en,null,o.a.createElement(wn.a,{isFlipped:t,flipDirection:"vertical",flipSpeedFrontToBack:.6,flipSpeedBackToFront:.4},o.a.createElement(zn,{onMouseOver:l,onTouchEnd:l,bgColor:"#2c2c2c",front:!0},o.a.createElement(Fn,null,o.a.createElement(w.b.Provider,{value:{size:"3em",color:"white"}},o.a.createElement(En.b,null)))),o.a.createElement(zn,{bgColor:"white"},o.a.createElement(w.b.Provider,{value:{size:"3em",color:"#084177"}},o.a.createElement(j.g,{style:{position:"absolute",marginRight:"10px",marginBottom:"10px",bottom:"0",right:"0"}})),o.a.createElement(In,null,o.a.createElement(Nn,null,"Seongjin Jeong"),o.a.createElement(An,null,"React Developer")),o.a.createElement(Jn,null,o.a.createElement(w.b.Provider,{value:{size:"1em",color:"black"}},o.a.createElement(Rn,null,o.a.createElement(j.f,null)," +82.10.9583.7412"),o.a.createElement(Rn,null,o.a.createElement(En.a,null)," \xa0\xa0jsj0718tjdwl@naver.com"),o.a.createElement(Rn,null,o.a.createElement(vn.a,null)," \xa0\xa0",o.a.createElement("a",{href:"https://github.com/SeongJinJeong",target:"_blank",rel:"noopener noreferrer"},"https://github.com/SeongJinJeong")))))))};function Hn(){var n=Object(i.a)(["\n  width: 100%;\n  // margin-top: ","px;\n"]);return Hn=function(){return n},n}function Pn(){var n=Object(i.a)(["\n  width: 100%;\n  height: 800px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  // margin-top: ","px;\n  margin-bottom: ",";\n\n  background-color: ",";\n"]);return Pn=function(){return n},n}c.a.div(Pn(),(function(n){return n.shouldMargin||0}),(function(n){return n.lastContent?"300px":null}),(function(n){if(!n.color)return"palevioletred";switch(n.color){case 1:return"yellow";case 2:return"red";case 3:return"green";case 4:return"white";case 5:return"purple";default:return"palevioletred"}}));var Ln=c.a.div(Hn(),(function(n){return n.shouldMargin||0})),Wn=function(n){var e=Object(r.useState)(""),t=Object(x.a)(e,2),a=t[0],l=t[1];return Object(r.useEffect)((function(){u.Events.scrollEvent.register("begin",(function(n,e){console.log("begin",arguments)})),u.Events.scrollEvent.register("end",(function(n,e){console.log("end",arguments)})),u.scrollSpy.update();var n=document.querySelector("#TopNavi");l(n.clientHeight)}),[]),Object(r.useEffect)((function(){return function(){u.Events.scrollEvent.remove("begin"),u.Events.scrollEvent.remove("end")}})),o.a.createElement(o.a.Fragment,null,o.a.createElement(Ln,{shouldMargin:a},o.a.createElement(Y,{height:a})),o.a.createElement(cn,null),o.a.createElement(pn,null),o.a.createElement(Bn,null))},Qn=["TimeLine","Skills","Nexon","Laftel","Facebook"];var qn=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(v,{menu:Qn}),o.a.createElement(Wn,{menu:Qn}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(qn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.562985fb.chunk.js.map