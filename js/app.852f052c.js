(function(e){function t(t){for(var o,c,a=t[0],s=t[1],i=t[2],d=0,m=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(m.length)m.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],o=!0,a=1;a<n.length;a++){var s=n[a];0!==r[s]&&(o=!1)}o&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},u=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"188a":function(e,t,n){"use strict";n("1bf4")},"1bf4":function(e,t,n){},4609:function(e,t,n){"use strict";n("63e4")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,u,c){var a=Object(o["v"])("Nav"),s=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["d"])("main",null,[Object(o["g"])(a,{status:r.status},null,8,["status"]),Object(o["g"])(s)])}var u,c=n("5502"),a=n("1da1"),s=(n("96cf"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("c740"),n("7db0"),n("b0c0"),n("99af"),n("8ba4"),n("a9e3"),n("fb6a"),n("ba16")),i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_SERVER_URL||"nane.tada.team",l=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_URL||"https://".concat(i,"/api/"),d=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_WSS_URL||"wss://".concat(i,"/ws");function m(){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(l,"rooms"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function p(){return b.apply(this,arguments)}function b(){return b=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(l,"settings"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(l,"rooms/").concat(t,"/history"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return j=Object(a["a"])(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(n=e.sent,n.ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e["catch"](0),console.log("Catch error:",e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),j.apply(this,arguments)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"anonymous",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return u&&(u.onclose=function(){},u.close(1e3,"user change name")),u=new WebSocket("".concat(d,"?username=").concat(e)),u.onopen=function(){t(!0)},u.onclose=function(){t(!1),setTimeout((function(){h(e,t,n)}),500)},u.onmessage=function(e){try{var t=JSON.parse(null===e||void 0===e?void 0:e.data);n(t)}catch(o){console.log("Catch error:",o)}},u}function w(e,t,n){u.send(JSON.stringify({room:e,text:t,id:n}))}var R=new c["a"].Store({state:function(){return{username:localStorage.getItem("username")||"anonymous",rooms:[],openedRooms:new Set,messages:[],users:[],serverSettings:{},status:"offline",sendQueue:[]}},getters:{roomMessages:function(e){return function(t){return e.messages.filter((function(e){var n=e.room;return t===n}))}},roomQueue:function(e){return function(t){return e.sendQueue.filter((function(e){var n=e.room;return t===n}))}}},mutations:{removeDuplicateMessages:function(e){e.messages=e.messages.filter((function(e,t,n){var o=e.created;return t===n.findIndex((function(e){return e.created===o}))}))},updateRooms:function(e,t){e.rooms=t},updateRoomsMessage:function(e,t){if(null!==t&&void 0!==t&&t.room){var n=e.rooms.find((function(e){var n=e.name;return n===(null===t||void 0===t?void 0:t.room)}));n&&(n.last_message=t)}},updateRoomHistory:function(e,t){e.messages=e.messages.concat(t)},updateSettings:function(e,t){e.settings=t},updateStatus:function(e,t){e.status=t?"online":"offline"},message:function(e,t){e.messages.push(t)},addToQueue:function(e,t){e.sendQueue.push(t)},filterQueue:function(e,t){e.sendQueue=e.sendQueue.filter((function(e){var n=e.id;return n!==t}))},updateName:function(e,t){e.username=t},addOpenedRooms:function(e,t){e.openedRooms.add(t)},closeOpenedRoom:function(e,t){e.openedRooms.delete(t)}},actions:{getRooms:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:n=t.sent,e.commit("updateRooms",null===n||void 0===n?void 0:n.result);case 4:case"end":return t.stop()}}),t)})))()},getRoomHistory:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var o,r,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return Number.isInteger(+(null===(o=e.state.settings)||void 0===o?void 0:o.max_room_title_length))&&(t=t.slice(0,+(null===(r=e.state.settings)||void 0===r?void 0:r.max_room_title_length))),e.commit("addOpenedRooms",t),n.next=4,v(t);case 4:return u=n.sent,u&&(e.commit("updateRoomHistory",null===u||void 0===u?void 0:u.result),e.commit("removeDuplicateMessages")),n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})))()},getSettings:function(e){return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,e.commit("updateSettings",null===n||void 0===n?void 0:n.result);case 4:case"end":return t.stop()}}),t)})))()},connectStatus:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("updateStatus",t);case 1:case"end":return n.stop()}}),n)})))()},message:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("message",t),e.commit("updateRoomsMessage",t),t.id&&e.commit("filterQueue",t.id);case 3:case"end":return n.stop()}}),n)})))()},newSendMessage:function(e,t){return Object(a["a"])(regeneratorRuntime.mark((function n(){var o,r,u,c,a,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:u=t.text,c=t.room,a=Object(s["a"])(),Number.isInteger(+(null===(o=e.state.settings)||void 0===o?void 0:o.max_message_length))&&u.length>+(null===(r=e.state.settings)||void 0===r?void 0:r.max_message_length)&&(u=u.slice(0,+(null===(i=e.state.settings)||void 0===i?void 0:i.max_message_length))),e.commit("addToQueue",{text:u,room:c,id:a,sender:{username:e.state.username}}),w(c,u,a);case 5:case"end":return n.stop()}}),n)})))()},updateName:function(e,t){var n;return t&&t.length<=(null===(n=e.state.settings)||void 0===n?void 0:n.max_username_length)?(localStorage.setItem("username",t),e.commit("updateName",t),t):null},closeRoom:function(e,t){e.commit("closeOpenedRoom",t)},tryRepeatSend:function(e,t){var n=e.state.sendQueue.find((function(e){return e.id===t})),o=n.id,r=n.room,u=n.text;w(r,u,o)},clearMessage:function(e,t){e.commit("filterQueue",t)}}});function y(e,t){function n(t){e.dispatch("connectStatus",t)}function o(t){e.dispatch("message",t)}h(t,n,o)}var x={class:"nav"};function k(e,t,n,r,u,c){var a=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["d"])("div",x,[Object(o["g"])(a,{to:"/",exact:"",custom:""},{default:Object(o["B"])((function(e){var t=e.href,n=e.navigate,r=e.isExactActive;return[Object(o["g"])("div",{class:["link",[r&&"router-link-exact-active"]]},[Object(o["g"])("a",{href:t,onClick:n},"Home",8,["href","onClick"])],2)]})),_:1}),(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.openedRooms,(function(e){return Object(o["q"])(),Object(o["d"])(a,{key:e,to:"/room/".concat(e),custom:""},{default:Object(o["B"])((function(t){var n=t.href,u=t.navigate,c=t.isExactActive;return[Object(o["g"])("div",{class:["link",[c&&"router-link-exact-active"]]},[Object(o["g"])("a",{href:n,onClick:u},Object(o["x"])(e),9,["href","onClick"]),Object(o["g"])("button",{class:"close",onClick:function(t){return r.close(e)}},"x",8,["onClick"])],2)]})),_:2},1032,["to"])})),128)),Object(o["g"])("div",{class:["status",{online:n.status}]},null,2)])}n("ac1f"),n("5319");var S=n("6c02"),_={props:["status"],setup:function(){var e=Object(S["d"])(),t=Object(S["c"])(),n=Object(c["b"])(),r=Object(o["b"])((function(){return n.state.openedRooms})),u=function(o){n.dispatch("closeRoom",o),t.path==="/room/".concat(o)&&e.push("/")};return Object(o["A"])(r,(function(n,o){var r=t.path.replace("/room/","");!n.has(r)&&o.has(r)&&e.push("/")})),{openedRooms:r,close:u}}};n("188a");_.render=k;var N=_,C={name:"App",setup:function(){var e=Object(c["b"])(),t=Object(o["b"])((function(){return e.state.username})),n=Object(o["b"])((function(){return"online"===e.state.status}));return Object(o["A"])(t,(function(){y(e,t.value)})),y(e,t.value),e.dispatch("getRooms"),e.dispatch("getSettings"),{status:n}},components:{Nav:N}};n("babf");C.render=r;var M=C,E={key:0};function I(e,t,n,r,u,c){var a=Object(o["v"])("InputLine"),s=Object(o["v"])("ScrollIcon");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",{class:"chat_wrap",onScroll:t[1]||(t[1]=function(){return r.scroll&&r.scroll.apply(r,arguments)})},[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(this.roomMessages,(function(e){var t,n;return Object(o["q"])(),Object(o["d"])("p",{class:{my_message:(null===e||void 0===e||null===(t=e.sender)||void 0===t?void 0:t.username)===r.username},key:e.created},[Object(o["g"])("b",null,Object(o["x"])((null===e||void 0===e||null===(n=e.sender)||void 0===n?void 0:n.username)||"unknown")+":",1),Object(o["f"])(" "+Object(o["x"])(null===e||void 0===e?void 0:e.text),1)],2)})),128)),r.roomQueue.length?(Object(o["q"])(),Object(o["d"])("p",E,"not yet sended")):Object(o["e"])("",!0),(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(this.roomQueue,(function(e){var t,n;return Object(o["q"])(),Object(o["d"])("p",{class:{my_message:(null===e||void 0===e||null===(t=e.sender)||void 0===t?void 0:t.username)===r.username},key:e.id},[Object(o["g"])("b",null,Object(o["x"])((null===e||void 0===e||null===(n=e.sender)||void 0===n?void 0:n.username)||"unknown")+":",1),Object(o["f"])(" "+Object(o["x"])(null===e||void 0===e?void 0:e.text)+" ",1),Object(o["g"])("button",{onClick:function(t){return r.repeatSend(e.id)}},"->",8,["onClick"]),Object(o["g"])("button",{onClick:function(t){return r.clearMsg(e.id)}},"x",8,["onClick"])],2)})),128)),Object(o["g"])("span",{ref:function(e){return r.lastItem=e}},null,512)],32),Object(o["g"])(a,{room:n.room},null,8,["room"]),Object(o["g"])(s,{needScroll:r.scrollToDown,onToggleScroll:r.toggleScroll},null,8,["needScroll","onToggleScroll"])],64)}var q={class:"input"};function Q(e,t,n,r,u,c){return Object(o["q"])(),Object(o["d"])("div",q,[Object(o["C"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.line=e}),onKeydown:t[2]||(t[2]=Object(o["D"])((function(){return r.send&&r.send.apply(r,arguments)}),["enter"]))},null,544),[[o["z"],r.line]]),Object(o["g"])("button",{onClick:t[3]||(t[3]=function(){return r.send&&r.send.apply(r,arguments)})},"send")])}var P={name:"InputLine",props:["room"],setup:function(e){var t=Object(c["b"])(),n=Object(o["t"])(""),r=function(){t.dispatch("newSendMessage",{room:e.room,text:n.value}),n.value=""};return{line:n,send:r}}};n("699c");P.render=Q;var A=P;function T(e,t,n,r,u,c){return Object(o["q"])(),Object(o["d"])("button",{class:"scroll-icon",onClick:t[1]||(t[1]=function(){return r.toggle&&r.toggle.apply(r,arguments)})},Object(o["x"])(n.needScroll?"-":"v"),1)}var V={name:"ScrollIcon",props:["needScroll"],setup:function(e,t){var n=t.emit,o=function(){n("toggle-scroll")};return{toggle:o}}};n("4609");V.render=T;var L=V,U={name:"Room",props:["room"],components:{InputLine:A,ScrollIcon:L},setup:function(e){var t=Object(S["d"])(),n=Object(c["b"])();n.dispatch("getRoomHistory",e.room).then((function(n){n!==e.room&&t.push("/room/".concat(n))}));var r=Object(o["t"])(null),u=Object(o["t"])(!0),a=Object(o["t"])(!1),s=Object(o["b"])((function(){return n.getters.roomMessages(e.room)})),i=Object(o["b"])((function(){return n.getters.roomQueue(e.room)})),l=Object(o["b"])((function(){return n.state.username})),d=function(){r.value.scrollIntoView(!0),setTimeout((function(){u.value=!0}),50)},m=function(){a.value||(u.value=!1)},f=function(e){n.dispatch("tryRepeatSend",e)},p=function(e){n.dispatch("clearMessage",e)};return Object(o["A"])((function(){return n.getters.roomMessages(e.room)}),(function(){var e;u.value&&null!==r&&void 0!==r&&null!==(e=r.value)&&void 0!==e&&e.scrollIntoView&&(a.value=!0,r.value.scrollIntoView(!0),setTimeout((function(){a.value=!1}),50))}),{flush:"post"}),{roomMessages:s,roomQueue:i,scrollToDown:u,lastItem:r,toggleScroll:d,scroll:m,username:l,repeatSend:f,clearMsg:p}}};n("d0ed");U.render=I;var D=U,B={class:"input-wrap"},H={key:0},J={class:"input-wrap"},K={class:"rooms-wrap"};function z(e,t,n,r,u,c){var a=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["d"])(o["a"],null,[Object(o["g"])("div",B,[Object(o["g"])("input",{type:"text",value:r.username,onChange:t[1]||(t[1]=function(){return r.change&&r.change.apply(r,arguments)}),onKeydown:t[2]||(t[2]=Object(o["D"])((function(){return r.updateName&&r.updateName.apply(r,arguments)}),["enter"]))},null,40,["value"]),Object(o["g"])("button",{onClick:t[3]||(t[3]=function(){return r.updateName&&r.updateName.apply(r,arguments)})},"Change name"),Object(o["g"])("span",null,[r.nameChanged?(Object(o["q"])(),Object(o["d"])("b",H,"name changed")):Object(o["e"])("",!0)])]),Object(o["g"])("div",J,[Object(o["C"])(Object(o["g"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.newRoom=e}),onKeydown:t[5]||(t[5]=Object(o["D"])((function(){return r.gotoNewRoom&&r.gotoNewRoom.apply(r,arguments)}),["enter"]))},null,544),[[o["z"],r.newRoom]]),Object(o["g"])("button",{onClick:t[6]||(t[6]=function(){return r.gotoNewRoom&&r.gotoNewRoom.apply(r,arguments)})},"Goto NewRoom")]),Object(o["g"])("div",K,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.roomList,(function(e){var t,n,r;return Object(o["q"])(),Object(o["d"])("div",{class:"room",key:e},[Object(o["g"])(a,{to:"/room/".concat(e.name)},{default:Object(o["B"])((function(){return[Object(o["f"])(Object(o["x"])(e.name),1)]})),_:2},1032,["to"]),Object(o["g"])("b",null,Object(o["x"])((null===e||void 0===e||null===(t=e.last_message)||void 0===t||null===(n=t.sender)||void 0===n?void 0:n.username)||"unknown"),1),Object(o["g"])("span",null,Object(o["x"])(null===e||void 0===e||null===(r=e.last_message)||void 0===r?void 0:r.text),1)])})),128))])],64)}var W={setup:function(){var e=Object(c["b"])(),t=Object(S["d"])(),n=Object(o["t"])(""),r=Object(o["t"])(""),u=Object(o["t"])(!1),a=Object(o["t"])(!1),s=Object(o["b"])((function(){return e.state.rooms})),i=Object(o["b"])((function(){return e.state.username}));Object(o["o"])((function(){n.value=e.state.username}));var l=function(){a.value=!0,e.dispatch("updateName",n.value).then((function(e){a.value=!1,e?(n.value=e,u.value=!0,setTimeout((function(){u.value=!1}),2e3)):n.value=i.value}))},d=function(e){var t=e.target.value;n.value=t},m=function(){t.push("/room/".concat(r.value))};return{username:n,updateName:l,roomList:s,change:d,nameChanged:u,newRoom:r,gotoNewRoom:m}}};n("c807");W.render=z;var G=W,F=[{path:"/",name:"Home",component:G},{path:"/room/:room",name:"Room",component:D,props:!0}],X=Object(S["a"])({history:Object(S["b"])(),routes:F}),Y=Object(o["c"])(M);Y.use(R),Y.use(X),Y.mount("#app")},"63e4":function(e,t,n){},"699c":function(e,t,n){"use strict";n("d8c7")},"985d":function(e,t,n){},babf:function(e,t,n){"use strict";n("e2fa")},c807:function(e,t,n){"use strict";n("d19d")},d0ed:function(e,t,n){"use strict";n("985d")},d19d:function(e,t,n){},d8c7:function(e,t,n){},e2fa:function(e,t,n){}});
//# sourceMappingURL=app.852f052c.js.map