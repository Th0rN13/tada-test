(function(e){function t(t){for(var o,c,u=t[0],s=t[1],i=t[2],d=0,m=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&m.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(m.length)m.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,u=1;u<n.length;u++){var s=n[u];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/tada-test/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1472:function(e,t,n){},"1e8c":function(e,t,n){"use strict";n("204e")},"204e":function(e,t,n){},"3d83":function(e,t,n){"use strict";n("1472")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,a,c){var u=Object(o["v"])("Nav"),s=Object(o["v"])("router-view");return Object(o["q"])(),Object(o["d"])("main",null,[Object(o["g"])(u,{status:r.status},null,8,["status"]),Object(o["g"])(s)])}var a,c=n("5502"),u=n("1da1"),s=(n("96cf"),n("d3b7"),n("6062"),n("3ca3"),n("ddb0"),n("4de4"),n("7db0"),n("b0c0"),n("99af"),n("498a"),n("8ba4"),n("a9e3"),n("fb6a"),n("ba16")),i=Object({NODE_ENV:"production",BASE_URL:"/tada-test/"}).VUE_APP_SERVER_URL||"nane.tada.team",l=Object({NODE_ENV:"production",BASE_URL:"/tada-test/"}).VUE_APP_API_URL||"https://".concat(i,"/api/"),d=Object({NODE_ENV:"production",BASE_URL:"/tada-test/"}).VUE_APP_WSS_URL||"wss://".concat(i,"/ws");function m(){return b.apply(this,arguments)}function b(){return b=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(l,"rooms"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),b.apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return f=Object(u["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(l,"settings"));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return g=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O("".concat(l,"rooms/").concat(t,"/history"));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function O(e){return j.apply(this,arguments)}function j(){return j=Object(u["a"])(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(n=e.sent,n.ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:return o=e.sent,e.abrupt("return",o);case 12:return e.prev=12,e.t0=e["catch"](0),console.warn("Catch error:",e.t0),e.abrupt("return",null);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),j.apply(this,arguments)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"anonymous",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;return a&&(a.onclose=function(){},a.close(1e3,"user change name")),a=new WebSocket("".concat(d,"?username=").concat(e)),a.onopen=function(){t(!0)},a.onclose=function(){t(!1),setTimeout((function(){h(e,t,n)}),500)},a.onmessage=function(e){try{var t=JSON.parse(null===e||void 0===e?void 0:e.data);n(t)}catch(o){console.warn("Catch error:",o)}},a}function R(e,t,n){a.send(JSON.stringify({room:e,text:t,id:n}))}var y=new c["a"].Store({state:function(){return{username:localStorage.getItem("username")||"anonymous",rooms:[],openedRooms:new Set,messages:[],users:[],serverSettings:{},status:"offline",sendQueue:[]}},getters:{roomMessages:function(e){return function(t){return e.messages.filter((function(e){var n=e.room;return t===n}))}},roomQueue:function(e){return function(t){return e.sendQueue.filter((function(e){var n=e.room;return t===n}))}},roomsSorted:function(e){return e.rooms.sort((function(e,t){var n,o;return null===t||void 0===t||null===(n=t.last_message)||void 0===n?void 0:n.created.localeCompare(null===e||void 0===e||null===(o=e.last_message)||void 0===o?void 0:o.created)}))}},mutations:{updateRooms:function(e,t){e.rooms=t},updateRoomsMessage:function(e,t){if(null!==t&&void 0!==t&&t.room){var n=e.rooms.find((function(e){var n=e.name;return n===(null===t||void 0===t?void 0:t.room)}));n?n.last_message=t:e.rooms.push({name:null===t||void 0===t?void 0:t.room,last_message:t})}},updateRoomHistory:function(e,t){e.messages=e.messages.concat(t)},updateSettings:function(e,t){e.settings=t},updateStatus:function(e,t){e.status=t?"online":"offline"},message:function(e,t){e.messages.push(t)},addToQueue:function(e,t){e.sendQueue.push(t)},filterQueue:function(e,t){e.sendQueue=e.sendQueue.filter((function(e){var n=e.id;return n!==t}))},updateName:function(e,t){e.username=t},addOpenedRooms:function(e,t){e.openedRooms.add(t)},createRoom:function(e,t){var n=new Date;e.rooms.push({name:t,last_message:{room:t,created:n.toISOString(),sender:{username:e.username},text:"создал новую комнату"}})}},actions:{getRooms:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:n=t.sent,e.commit("updateRooms",null===n||void 0===n?void 0:n.result);case 4:case"end":return t.stop()}}),t)})))()},getRoomHistory:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var o,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t&&t.trim()){n.next=2;break}return n.abrupt("return");case 2:if(Number.isInteger(+(null===(o=e.state.settings)||void 0===o?void 0:o.max_room_title_length))&&(t=t.slice(0,+(null===(r=e.state.settings)||void 0===r?void 0:r.max_room_title_length))),!e.state.openedRooms.has(t)){n.next=5;break}return n.abrupt("return");case 5:return e.commit("addOpenedRooms",t),n.next=8,v(t);case 8:return a=n.sent,a&&e.commit("updateRoomHistory",null===a||void 0===a?void 0:a.result),n.abrupt("return",t);case 11:case"end":return n.stop()}}),n)})))()},getSettings:function(e){return Object(u["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:n=t.sent,e.commit("updateSettings",null===n||void 0===n?void 0:n.result);case 4:case"end":return t.stop()}}),t)})))()},connectStatus:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("updateStatus",t);case 1:case"end":return n.stop()}}),n)})))()},message:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.commit("message",t),e.commit("updateRoomsMessage",t),t.id&&e.commit("filterQueue",t.id);case 3:case"end":return n.stop()}}),n)})))()},newSendMessage:function(e,t){return Object(u["a"])(regeneratorRuntime.mark((function n(){var o,r,a,c,u,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=t.text,c=t.room,a&&a.trim()&&c&&c.trim()){n.next=3;break}return n.abrupt("return");case 3:u=Object(s["a"])(),Number.isInteger(+(null===(o=e.state.settings)||void 0===o?void 0:o.max_message_length))&&a.length>+(null===(r=e.state.settings)||void 0===r?void 0:r.max_message_length)&&(a=a.slice(0,+(null===(i=e.state.settings)||void 0===i?void 0:i.max_message_length))),e.commit("addToQueue",{text:a,room:c,id:u,sender:{username:e.state.username}}),R(c,a,u);case 7:case"end":return n.stop()}}),n)})))()},updateName:function(e,t){var n;return t&&t.trim()&&t.length<=(null===(n=e.state.settings)||void 0===n?void 0:n.max_username_length)?(localStorage.setItem("username",t),e.commit("updateName",t),t):null},tryRepeatSend:function(e,t){var n=e.state.sendQueue.find((function(e){return e.id===t})),o=n.id,r=n.room,a=n.text;R(r,a,o)},clearMessage:function(e,t){e.commit("filterQueue",t)},createRoom:function(e,t){var n;if(t&&t.trim()){var o;if(Number.isInteger(+(null===(n=e.state.settings)||void 0===n?void 0:n.max_room_title_length)))t=t.slice(0,+(null===(o=e.state.settings)||void 0===o?void 0:o.max_room_title_length));return e.commit("createRoom",t),t}}}});function w(e,t){function n(t){e.dispatch("connectStatus",t)}function o(t){e.dispatch("message",t)}h(t,n,o)}var _={class:"nav"},x={class:"name-wrapper"},S={key:0,class:"name-change",title:"Кликните, чтобы поменять"},k=Object(o["g"])("div",{class:"name-change-hint"},"Ваше имя:",-1),N={key:1,class:"input-name"},M={class:"room-wrapper"},E={key:0,class:"room-change"},C={key:1,class:"input-room"},D={key:2};function L(e,t,n,r,a,c){return Object(o["q"])(),Object(o["d"])("div",_,[Object(o["g"])("div",x,[r.editNameMode?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("div",S,[k,Object(o["g"])("b",null,Object(o["x"])(r.username),1),Object(o["g"])("button",{class:"change-button",onClick:t[1]||(t[1]=function(){return r.enterEditNameMode&&r.enterEditNameMode.apply(r,arguments)})},"Поменять")])),r.editNameMode?(Object(o["q"])(),Object(o["d"])("div",N,[Object(o["D"])(Object(o["g"])("input",{type:"text",placeholder:"Введите имя","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.inputtedName=e}),onKeydown:t[3]||(t[3]=Object(o["E"])((function(){return r.changeName&&r.changeName.apply(r,arguments)}),["enter"]))},null,544),[[o["A"],r.inputtedName]]),Object(o["g"])("button",{class:"ok",onClick:t[4]||(t[4]=function(){return r.changeName&&r.changeName.apply(r,arguments)})},"Поменять имя"),Object(o["g"])("button",{class:"cancel",onClick:t[5]||(t[5]=function(){return r.dontChangeName&&r.dontChangeName.apply(r,arguments)})},"x")])):Object(o["e"])("",!0)]),Object(o["g"])("div",M,[r.editRoomMode?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("div",E,[Object(o["f"])(Object(o["x"])(r.roomName)+" ",1),Object(o["g"])("button",{class:"change-button",onClick:t[6]||(t[6]=function(){return r.enterEditRoomMode&&r.enterEditRoomMode.apply(r,arguments)})},"Создать новую"),Object(o["D"])(Object(o["g"])("input",{type:"checkbox",class:"hidden","onUpdate:modelValue":t[7]||(t[7]=function(e){return r.editRoomMode=e})},null,512),[[o["z"],r.editRoomMode]])])),r.editRoomMode?(Object(o["q"])(),Object(o["d"])("div",C,[Object(o["D"])(Object(o["g"])("input",{type:"text",placeholder:"Введите название комнаты","onUpdate:modelValue":t[8]||(t[8]=function(e){return r.inputtedRoom=e}),onKeydown:t[9]||(t[9]=Object(o["E"])((function(){return r.openRoom&&r.openRoom.apply(r,arguments)}),["enter"]))},null,544),[[o["A"],r.inputtedRoom]]),Object(o["g"])("button",{class:"ok",onClick:t[10]||(t[10]=function(){return r.openRoom&&r.openRoom.apply(r,arguments)})},"Создать комнату"),Object(o["g"])("button",{class:"cancel",onClick:t[11]||(t[11]=function(){return r.dontOpenRoom&&r.dontOpenRoom.apply(r,arguments)})},"x")])):Object(o["e"])("",!0),r.loading?(Object(o["q"])(),Object(o["d"])("div",D,"loading...")):Object(o["e"])("",!0),Object(o["g"])("div",{class:["status",{online:n.status}],title:"Connection status: ".concat(n.status?"ok":"bad")},null,10,["title"])])])}n("ac1f"),n("5319");var q=n("6c02"),I={props:["status"],setup:function(){var e=Object(q["d"])(),t=Object(q["c"])(),n=Object(c["b"])(),r=Object(o["b"])((function(){return n.state.openedRooms})),a=Object(o["b"])((function(){return n.state.username})),u=Object(o["b"])((function(){return t.path.replace("/room/","")})),s=Object(o["t"])(!1),i=Object(o["t"])(a.value),l=Object(o["t"])("/"===u.value),d=Object(o["t"])(""),m=Object(o["t"])(!1),b=function(){s.value=!0},p=function(){s.value=!1,m.value=!0,n.dispatch("updateName",i.value).then((function(e){i.value=e,m.value=!1}))},f=function(){s.value=!1},v=function(){l.value=!0},g=function(){l.value=!1,n.dispatch("createRoom",d.value).then((function(t){t&&e.push("/room/".concat(t))}))},O=function(){l.value=!1};return Object(o["B"])(r,(function(t,n){!t.has(u)&&n.has(u)&&e.push("/")})),Object(o["B"])(u,(function(){l.value=!1})),{openedRooms:r,close:close,username:a,editNameMode:s,inputtedName:i,changeName:p,dontChangeName:f,loading:m,editRoomMode:l,inputtedRoom:d,openRoom:g,dontOpenRoom:O,roomName:u,enterEditNameMode:b,enterEditRoomMode:v}}};n("3d83");I.render=L;var T=I,Q={name:"App",setup:function(){var e=Object(c["b"])(),t=Object(o["b"])((function(){return e.state.username})),n=Object(o["b"])((function(){return"online"===e.state.status}));return Object(o["B"])(t,(function(){w(e,t.value)})),w(e,t.value),e.dispatch("getRooms"),e.dispatch("getSettings"),{status:n}},components:{Nav:T}};n("babf");Q.render=r;var P=Q,V={class:"wrap"},U={class:"chat-wrap"},A={key:0,class:"hint"},B={key:1,class:"hint"};function H(e,t,n,r,a,c){var u=Object(o["v"])("RoomList"),s=Object(o["v"])("InputLine"),i=Object(o["v"])("ScrollIcon");return Object(o["q"])(),Object(o["d"])("div",V,[Object(o["g"])(u),Object(o["g"])("div",U,[Object(o["g"])("div",{class:"chat-messages",onScroll:t[1]||(t[1]=function(){return r.scroll&&r.scroll.apply(r,arguments)})},[r.roomMessages.length?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("p",A,"В этой комнате еще нет сообщений")),(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.roomMessages,(function(e){var t,n;return Object(o["q"])(),Object(o["d"])("p",{class:["message",{my_message:(null===e||void 0===e||null===(t=e.sender)||void 0===t?void 0:t.username)===r.username}],key:e.created},[Object(o["g"])("b",null,Object(o["x"])((null===e||void 0===e||null===(n=e.sender)||void 0===n?void 0:n.username)||"unknown")+":",1),Object(o["f"])(" "+Object(o["x"])(null===e||void 0===e?void 0:e.text),1)],2)})),128)),r.roomQueue.length?(Object(o["q"])(),Object(o["d"])("p",B," Не отправленные сообщения (сервер не подтвердил получение) ")):Object(o["e"])("",!0),(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.roomQueue,(function(e){var t,n;return Object(o["q"])(),Object(o["d"])("p",{class:{my_message:(null===e||void 0===e||null===(t=e.sender)||void 0===t?void 0:t.username)===r.username},key:e.id},[Object(o["g"])("b",null,Object(o["x"])((null===e||void 0===e||null===(n=e.sender)||void 0===n?void 0:n.username)||"unknown")+":",1),Object(o["f"])(" "+Object(o["x"])(null===e||void 0===e?void 0:e.text)+" ",1),Object(o["g"])("button",{onClick:function(t){return r.repeatSend(e.id)}},"Повторить",8,["onClick"]),Object(o["g"])("button",{onClick:function(t){return r.clearMsg(e.id)}},"Удалить",8,["onClick"])],2)})),128)),Object(o["g"])("span",{ref:function(e){return r.lastItem=e}},null,512)],32),Object(o["g"])(s,{room:n.room},null,8,["room"]),Object(o["g"])(i,{needScroll:r.scrollToDown,onToggleScroll:r.toggleScroll},null,8,["needScroll","onToggleScroll"])])])}var J={class:"input"};function K(e,t,n,r,a,c){return Object(o["q"])(),Object(o["d"])("div",J,[Object(o["D"])(Object(o["g"])("input",{class:"send-input",type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.line=e}),onKeydown:t[2]||(t[2]=Object(o["E"])((function(){return r.send&&r.send.apply(r,arguments)}),["enter"])),placeholder:"Введите сообщение..."},null,544),[[o["A"],r.line]]),Object(o["g"])("button",{class:"send-button",onClick:t[3]||(t[3]=function(){return r.send&&r.send.apply(r,arguments)})},"Отправить сообщение")])}var W={name:"InputLine",props:["room"],setup:function(e){var t=Object(c["b"])(),n=Object(o["t"])(""),r=function(){t.dispatch("newSendMessage",{room:e.room,text:n.value}),n.value=""};return{line:n,send:r}}};n("913b");W.render=K;var z=W;function F(e,t,n,r,a,c){return n.needScroll?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("button",{key:0,class:"scroll-icon",onClick:t[1]||(t[1]=function(){return r.toggle&&r.toggle.apply(r,arguments)}),title:"Прокручивать к новым сообщениям"}," v "))}var G={name:"ScrollIcon",props:["needScroll"],setup:function(e,t){var n=t.emit,o=function(){n("toggle-scroll")};return{toggle:o}}};n("c87a");G.render=F;var X=G,Y={class:"rooms-wrap"},Z={class:"room__title"},$={class:"room__last-message"},ee=Object(o["f"])(" Последнее сообщение: "),te={class:"room__last-author"},ne={class:"room__last-message"},oe={class:"room__last-author"},re=Object(o["f"])(": "),ae={class:"room__last-text"};function ce(e,t,n,r,a,c){var u=Object(o["v"])("TimeDate"),s=Object(o["v"])("router-link");return Object(o["q"])(),Object(o["d"])("div",Y,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["u"])(r.roomList,(function(e){return Object(o["q"])(),Object(o["d"])(s,{key:e,to:"/room/".concat(e.name),custom:""},{default:Object(o["C"])((function(t){var n,r,a,c,s=t.href,i=t.navigate;return[Object(o["g"])("a",{href:s,class:"room",onClick:i},[Object(o["g"])("div",Z,"Комната: "+Object(o["x"])(e.name),1),Object(o["g"])("div",$,[ee,Object(o["g"])("span",te,[Object(o["g"])(u,{date:null===e||void 0===e||null===(n=e.last_message)||void 0===n?void 0:n.created},null,8,["date"])])]),Object(o["g"])("div",ne,[Object(o["g"])("span",oe,Object(o["x"])((null===e||void 0===e||null===(r=e.last_message)||void 0===r||null===(a=r.sender)||void 0===a?void 0:a.username)||"unknown"),1),re,Object(o["g"])("span",ae,Object(o["x"])(null===e||void 0===e||null===(c=e.last_message)||void 0===c?void 0:c.text),1)])],8,["href","onClick"])]})),_:2},1032,["to"])})),128))])}function ue(e,t,n,r,a,c){return Object(o["x"])(r.result)}var se={name:"TimeDate",props:["date"],setup:function(e){var t=new Date,n=new Date;n.setDate(n.getDate()-1);var r=t.toLocaleDateString("ru",{year:"2-digit",month:"2-digit",day:"2-digit"}),a=n.toLocaleDateString("ru",{year:"2-digit",month:"2-digit",day:"2-digit"}),c=Object(o["b"])((function(){var t=new Date(e.date),n=t.toLocaleTimeString("ru",{hour:"2-digit",minute:"2-digit"}),o=t.toLocaleDateString("ru",{year:"2-digit",month:"2-digit",day:"2-digit"});return r===o?n:a===o?"Вчера":o}));return{result:c}}};se.render=ue;var ie=se,le={name:"RoomList",components:{TimeDate:ie},setup:function(){var e=Object(c["b"])(),t=Object(o["b"])((function(){return e.getters.roomsSorted}));return{roomList:t}}};n("79cc");le.render=ce;var de=le,me={name:"Room",props:["room"],components:{InputLine:z,ScrollIcon:X,RoomList:de},setup:function(e){var t=Object(q["d"])(),n=Object(c["b"])(),r=function(e){n.dispatch("getRoomHistory",e).then((function(n){n!==e&&t.push("/room/".concat(n))}))};r(e.room);var a=Object(o["t"])(null),u=Object(o["t"])(!0),s=Object(o["t"])(!1),i=Object(o["b"])((function(){return n.getters.roomMessages(e.room)})),l=Object(o["b"])((function(){return n.getters.roomQueue(e.room)})),d=Object(o["b"])((function(){return n.state.openedRooms})),m=Object(o["b"])((function(){return n.state.username})),b=function(){a.value.scrollIntoView(!0),setTimeout((function(){u.value=!0}),50)},p=function(){s.value||(u.value=!1)},f=function(e){n.dispatch("tryRepeatSend",e)},v=function(e){n.dispatch("clearMessage",e)};return Object(o["B"])((function(){return e.room}),(function(){d.value.has(e.room)||r(e.room)}),{flush:"post"}),Object(o["B"])((function(){return n.getters.roomMessages(e.room)}),(function(){var e;u.value&&null!==a&&void 0!==a&&null!==(e=a.value)&&void 0!==e&&e.scrollIntoView&&(s.value=!0,a.value.scrollIntoView(!0),setTimeout((function(){s.value=!1}),50))}),{flush:"post"}),{roomMessages:i,roomQueue:l,scrollToDown:u,lastItem:a,toggleScroll:b,scroll:p,username:m,repeatSend:f,clearMsg:v}}};n("f11a");me.render=H;var be=me,pe={class:"wrap"},fe=Object(o["g"])("div",{class:"empty-room"},"Выберите комнату",-1);function ve(e,t,n,r,a,c){var u=Object(o["v"])("RoomList");return Object(o["q"])(),Object(o["d"])("div",pe,[Object(o["g"])(u),fe])}var ge={name:"HomePage",components:{RoomList:de},setup:function(){var e=Object(c["b"])(),t=Object(q["d"])(),n=Object(o["t"])(""),r=Object(o["t"])(""),a=Object(o["t"])(!1),u=Object(o["t"])(!1),s=Object(o["b"])((function(){return e.state.rooms})),i=Object(o["b"])((function(){return e.state.username}));Object(o["o"])((function(){n.value=e.state.username}));var l=function(){u.value=!0,e.dispatch("updateName",n.value).then((function(e){u.value=!1,e?(n.value=e,a.value=!0,setTimeout((function(){a.value=!1}),2e3)):n.value=i.value}))},d=function(e){var t=e.target.value;n.value=t},m=function(){r.value.trim()&&t.push("/room/".concat(r.value))};return{username:n,updateName:l,roomList:s,change:d,nameChanged:a,newRoom:r,gotoNewRoom:m}}};n("1e8c");ge.render=ve;var Oe=ge,je=[{path:"/",name:"Home",component:Oe},{path:"/room/:room",name:"Room",component:be,props:!0}],he=Object(q["a"])({history:Object(q["b"])("/tada-test/"),routes:je}),Re=Object(o["c"])(P);Re.use(y),Re.use(he),Re.mount("#app")},"5a68":function(e,t,n){},"79cc":function(e,t,n){"use strict";n("c2b1")},"87c7":function(e,t,n){},"913b":function(e,t,n){"use strict";n("5a68")},babf:function(e,t,n){"use strict";n("e2fa")},c2b1:function(e,t,n){},c87a:function(e,t,n){"use strict";n("cf88")},cf88:function(e,t,n){},e2fa:function(e,t,n){},f11a:function(e,t,n){"use strict";n("87c7")}});
//# sourceMappingURL=app.f0fe57b1.js.map