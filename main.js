(()=>{"use strict";var t={26:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),i=n.n(r),o=n(645),a=n.n(o)()(i());a.push([t.id,'*,*:before,*:after{box-sizing:border-box;padding:0;margin:0;font-family:inherit}body{background-color:#334155;height:100vh;font-size:16px;font-family:"Rubik",sans-serif}button{background-color:#cbd5e1;border:2px solid #e2e8f0;border-radius:8px;outline:none;padding:8px 10px;width:120px;height:100%}button:hover{background-color:#f1f5f9;cursor:pointer}#reset{background:rgba(0,0,0,0);color:#f1f5f9;border:1px solid #94a3b8}#reset:hover{background-color:#94a3b8;color:#0f172a}.title-container{display:flex;justify-content:center;align-items:center}.title-container #title{font-family:"Montserrat Alternates",sans-serif;font-size:clamp(4rem,6vw,7rem);color:#e2e8f0;line-height:1.25;overflow:hidden}.title-container #title span{display:block;animation:reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1)}.main-container{height:100%;display:flex;flex-flow:column;justify-content:flex-start;align-items:center;position:relative;gap:1.5rem;margin-top:6rem}.main-container .chessboard{display:flex;border:1px solid #94a3b8;background-color:#94a3b8;border-radius:6px;padding:5px;box-shadow:2px 5px 7px #0f172a}.main-container .chessboard p{color:#fff}.main-container .grid-item{width:80px;height:80px;display:flex;justify-content:center;align-items:center;flex-flow:column;gap:8px}.main-container .column{width:100%;height:100%}.main-container .black{background-color:#0f172a}.main-container .white{background-color:#64748b}.main-container .buttons{display:flex;justify-content:center;align-items:flex-start;gap:1rem}.output-container{display:flex;border:2px solid #0f172a;height:125px;font-family:"IBM Plex Mono",monospace;font-weight:700;font-size:1.1rem}.output-container .output-left{display:flex;align-items:center;padding:0 7px;border-right:2px solid #040a18;width:200px;flex-shrink:0}.output-container .output-left .output-titles{display:flex;flex-flow:column;gap:5px}.output-container .output-left .initial-output{display:flex;flex-flow:column;padding-left:25px;gap:5px}.output-container .output-left .initial-output p{color:#e2e8f0}.output-container .output-left p{color:#040a18;font-size:1rem;word-wrap:break-word}.output-container .output-left span{font-weight:700}.output-right{display:flex;flex-wrap:wrap;flex-grow:0;justify-content:center;align-items:center;flex-flow:column;height:100%;width:425px}.output-right p{overflow-wrap:break-word;flex-grow:0;font-size:1.1rem;color:#e2e8f0}.output-right .path-title p{color:#040a18}.output-right .path-output{display:flex;justify-content:center;align-items:center;height:75%}.fa-chess-knight{font-size:3rem;color:#f1f5f9}.fa-circle{color:#67e8f9;background:rgba(0,0,0,0);border-radius:50%;transition:all 1s ease;font-size:1.3rem;box-shadow:0 0 15px 5px #95c5df}@keyframes reveal{0%{transform:translate(0, 100%);opacity:0}100%{transform:translate(0, 0);opacity:1}}',""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,i,o){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=i(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var o=r(t=t||[],i=i||{});return function(t){t=t||[];for(var a=0;a<o.length;a++){var s=n(o[a]);e[s].references--}for(var c=r(t,i),l=0;l<o.length;l++){var d=n(o[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var i=e[r];if(void 0!==i)return i.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),i=n.n(r),o=n(569),a=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(26),h={};h.styleTagTransform=p(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=i(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=new class{constructor(){this.start=[],this.end=[],this.moves=[]}getStart(){return this.start}getEnd(){return this.end}setStart(t){this.start=[...t],console.log(`Set start to: ${t}`)}setEnd(t){this.end=[...t],console.log(`Set end to: ${t}`)}getCoords(t){return[parseInt(t.target.dataset.x),parseInt(t.target.dataset.y)]}initGame(){return this.start=[],this.end=[],this.moves=[],`Game Initialized: Start:${this.start} End:${this.end} Moves:${this.moves}`}};class g{constructor(){this.elements={},this.head=0,this.tail=0}enqueue(t){this.elements[this.tail]=t,this.tail++}dequeue(){let t=this.elements[this.head];return delete this.elements[this.head],this.head++,t}peek(){return this.isEmpty?"Underflow: No elements in queue..":this.elements[this.head]}get length(){return this.tail-this.head}get isEmpty(){return 0===this.length}}class v{constructor(t,e,n,r=null){this.x=t,this.y=e,this.numberOfMoves=n,this.parent=r}getPositionString(){return`${this.x}, ${this.y}`}getParent(){return this.parent}}const y=[[1,2],[2,1],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];function b(t,e){const n=[];for(const r of y){const[i,o]=r,a=t+i,s=e+o;a<0||a>7||s<0||s>7||n.push([a,s])}return n}function x(t,e){let n=e.parent,r=[];for(r.push([e.x,e.y]);null!==n.parent;)r.push([n.x,n.y]),n=n.parent;return r.push([t.x,t.y]),r.reverse(),r}class w{static drawEvenRow(){document.querySelector(".chessboard").innerHTML+='\n    <div class="column">\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    </div>\n    '}static drawOddRow(){document.querySelector(".chessboard").innerHTML+='\n    <div class="column">\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    <div class="grid-item white"></div>\n    <div class="grid-item black"></div>\n    </div>\n    '}static clearContainer(){document.querySelector(".chessboard").innerHTML=""}static clearOuputs(){document.getElementById("startOutput").innerHTML="-",document.getElementById("targetOutput").innerHTML="-",document.getElementById("numOfMoves").innerHTML="-",document.querySelector(".path-output").innerHTML=""}static setStartPosition(t){t.preventDefault(),[...document.querySelectorAll(".grid-item")].forEach((t=>{t.addEventListener("click",w.setStartSquareAction)}))}static setEndPosition(t){t.preventDefault(),[...document.querySelectorAll(".grid-item")].forEach((t=>{t.addEventListener("click",w.setEndSquareAction)}))}static initChessboard(){w.clearContainer(),w.clearOuputs();for(let t=0;t<8;t++)t%2==0?w.drawOddRow():w.drawEvenRow();m.initGame(),w.setIndexes(),w.addEventListener()}static setEndSquareAction(t){const e=[...document.querySelectorAll(".grid-item")],n=document.getElementById("targetOutput");"DIV"===t.target.tagName&&(m.end.length>0||(t.target.style.backgroundColor="#06b6d4",m.setEnd(m.getCoords(t)),n.innerHTML=`[${m.getCoords(t)}]`,e.forEach((t=>{t.removeEventListener("click",w.setEndSquareAction)}))))}static setStartSquareAction(t){const e=[...document.querySelectorAll(".grid-item")],n=document.getElementById("startOutput");"DIV"===t.target.tagName&&(m.start.length>0||(t.target.innerHTML='<i class="fas fa-chess-knight"></i>',m.setStart(m.getCoords(t)),n.innerHTML=`[${m.getCoords(t)}]`,e.forEach((t=>{t.removeEventListener("click",w.setStartSquareAction)}))))}static addEventListener(){const t=document.getElementById("reset"),e=document.getElementById("start"),n=document.getElementById("end"),r=document.getElementById("path");e.addEventListener("click",w.setStartPosition),n.addEventListener("click",w.setEndPosition),t.addEventListener("click",w.initChessboard),r.addEventListener("click",w.showShortestPath)}static setIndexes(){const t=[...document.querySelectorAll(".column")],e=[];t.forEach((t=>e.push([...t.children])));for(let t=0;t<e.length;t++){e[t].forEach((e=>{e.setAttribute("data-x",`${t}`)}));for(let t=e.length-1;t>=0;t--){let n=e.length-1-t;e.forEach((e=>e[t].setAttribute("data-y",`${n}`)))}}}static showShortestPath(t){if(t.preventDefault(),m.start.length<1||m.end.length<1)return;const e=document.querySelector(".path-output"),n=document.getElementById("path"),r=document.getElementById("numOfMoves"),i=[...document.querySelectorAll(".grid-item")],o=function(t,e,n,r){const i=new g,o=new v(t,e,0);i.enqueue(o);const a=new Set;for(;!i.isEmpty;){const t=i.dequeue(),{x:e,y:s,numberOfMoves:c}=t;if(e===n&&s===r)return{numberOfMoves:c,finalPath:x(o,t)};a.add(t.getPositionString());for(const n of b(e,s)){const[e,r]=n,o=new v(e,r,c+1,t);a.has(o.getPositionString())||i.enqueue(o)}}}(m.start[0],m.start[1],m.end[0],m.end[1]),a=o.finalPath;r.innerHTML=o.numberOfMoves,a.slice(1,a.length-1).forEach((t=>{e.innerHTML+=`<p>[${t}]-></p>`})),e.innerHTML+=`<p>[${a[a.length-1]}]</p>`,i.forEach((t=>{let e=a.slice(1,a.length-1),n=[parseInt(t.dataset.x),parseInt(t.dataset.y)],r=1;e.forEach((e=>{e[0]===n[0]&&e[1]===n[1]&&(t.innerHTML=`<i class="fas fa-circle"></i> <p>${r}</p>`),r++}))})),n.removeEventListener("click",w.showShortestPath)}}w.initChessboard()})()})();