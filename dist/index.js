!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("next-audio"),require("prop-types"),require("next-pad-start"),require("classnames"),require("noop"),require("next-time-format"),require("next-draggable"),require("next-get-key"),require("object-assign")):"function"==typeof define&&define.amd?define(["react","next-audio","prop-types","next-pad-start","classnames","noop","next-time-format","next-draggable","next-get-key","object-assign"],t):"object"==typeof exports?exports.ReactAudio=t(require("react"),require("next-audio"),require("prop-types"),require("next-pad-start"),require("classnames"),require("noop"),require("next-time-format"),require("next-draggable"),require("next-get-key"),require("object-assign")):e.ReactAudio=t(e.react,e["next-audio"],e["prop-types"],e["next-pad-start"],e.classnames,e.noop,e["next-time-format"],e["next-draggable"],e["next-get-key"],e["object-assign"])}(window,function(e,t,n,r,a,o,i,c,u,l){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAACWCAYAAADNJugqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkMzNTFENkE3NDYzMTFFOUJDNkNBQUM2MTMwMUJGRkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkMzNTFENkI3NDYzMTFFOUJDNkNBQUM2MTMwMUJGRkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MTY4ODdGRjc0NUMxMUU5QkM2Q0FBQzYxMzAxQkZGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MTY4ODgwMDc0NUMxMUU5QkM2Q0FBQzYxMzAxQkZGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmN/Ph0AAAmGSURBVHja7Fp7jFRXGf/Ofcyd2WWHXViKLK+WdqU0sgttNVoKbUVNANNUDbQCUgVtTING6x8NNcVIBEzUtIVijIlUkVIqJk1KWAxFWqBUIs+2bnnJYxfqsl12B3Zm53nvPf6+O3eXZd4Lu5MY702+mXvvfOf8zvf+ztwrpJRUzkOhMh9lB9QKLWbT5i1PE4kvQ+vHhV/7AyVSrUsWL6TNm7eRJU2aOH4MtV6+TMKSVDuimrq6wrhvU8BQKZm0yBIKLVm4oDQJAbYGQOth40eJ5EpKmM24vRwkhkSlUoqlN17LYbyAP23esh+Xk4fAhnJU7ts0A+p8H2criphkMJ1GGqA1rRfb/omL6WXzUklyOpmSQdeAjLKEBWyr2bZc0dEZYjXPKFscwqEmW9Jih1oPGlaWwIe0Qkp7eSyR+hcuZ5ct00DaiZaUf8PpI2VLbWxbsszlZc2lUghZTsCUUNQNZQEUglo0RZmD07eHFFBAhUIoLwcM/TO4/PtAy9NApTqlCnUZytOBIQ18SGUqilg7amRNIy4P3EoBLg5G4hhpYhmq7rEhTt4iAXpuwvgxn8PFsYGMVAp5Wh6xDqhCY/WtBZmDWA+VTRm2imARP3hy8cKZuDw16BV/yeInfiYU8UMgbQfYS5pisKu/7JTBW7G71wh7gB5gybl006uvzyFp/R5RM87NPJdIqE/hdGcGa06+JYse3zkwCftN4jZG4/geiDIoN99AJew/SaF7OErl87zUA/QAPUAP0AP8nwN0KneOeyDKoEuljC0uIdqE/gP7WgyhUgbl5vNafQ9w0BvhrVu3Om6esiSZaDejkQg9NGsm2bZFZ86cptrakTi3Hd5wpKeivv6uuw8ePHRWVdRrKpzVCPipwh+gtvYrVBHQ0ZpK0nS1D2j+/PmlS6hpKkgjRVGc755o9IV97753RFHVnZLkHCEGUaXYblNn11UKhUKUSCQoGo1BUvmwpvl47/0FSaIpZdp/BOdkXtAgAEKF4R6Ahih09RqZZpKkLSPCbbF5yw/tPRmLxfd0Xe1+VlNV5ZadplelPdGEGo+nqoUifDdMglVZll0Xjyd+SYL2YR0PDXhvwQ5iGAbG23w+HRnpfkURXwxHovW4WY/zrDEsHPhmJFPW26oinldsa3VmIssLGIDXtbS0ftqW1jOG4f82vNcQ6T+G8m+4nNkFL1BouvZ0MFi1OjN15gU0/Mbj585f+A3kG1sBcDgKOwmPPg7MSfgengXY9ylPa4r+42Aw2BdKxWz4XdjkVd3Qx/qhViy4RRHKczDllGGVgdm6rl3gBWSiwZZRTREvCRIPwhJNDMZeHo/HsyXkv6dFOqBgcLmOTeLUO0l/FiL4k1Qq1KEqKRJYgIXMIDKCTwo6UBkwVoB/fyjR47g3q7M7HKHbRtVmA1oW1zY5HEzrsdKAaZpYWWIDRi336QEKVlfR5PoJ5PMZ1Nx8MnAtHIaTqAzcCq9dC8Df9S0eDuXzqdTe0UmfIPM8OGNGNqBpqliltQD+OTWVMql6+PB/PDxrpvMY4N0DzaRjgsbGaQ5vy8VLGzo6u75fXR3YhWBfF08kzvU6Ez+wrAlWgl9Q1ycRYpPw4rMAJaV0fD7GXmbhqKmufn7SpNud3z468TEGdV8PGWmvg2iv65rWztLIeK93SqqsqCAdOTSRTDlhYlpmbi9VFFkHlT9gWhbBnU/Nnv3w3t7fvjov5zOsdsflJTlA/oAPklU5YQMHw3ocoPGgTlA0W6VWokZVjWp2BlvKw/8+e85UXMeARKxiVIza3OmPeUybemJxx1F4DqiRs80W+MVH+OYHwaEbAO+ddq/v8NH3nTRmpVKRXbt2k3Qji23KWefReXNo7LixlBnMDGAlTeqKX+uf7hYJRanD4uswlh/hHrwhDuvr66OWacr0isWY2pE1VDM8CKqicXWjqcLQacdbu6m9sxP1LnBdNsSaD4usgEr9cCx+wl1VaZCqKJ9iDp/uk3v37o9kqXT7jqYOZJeLOJ0A1M9DuqqqqmFh/i0WjzkgqWSS3npnH6mJFBZgUAwOAZchOKSjDdgeDufwD8Mc9zsSqcrFj9vaOrIyTSwabUdC3uO4ti3HhMORhQ0NU6mhoYGuRXpgnyRc3E9J1ET2QLavdKWMJUyHZ1rjVJo0aTp1XoktkmSPcXWwB6mxPQvQj4ID673GeGyTZNL6OdLbRMPn68uHbDsOdq4UMkd10XUDZE60ZWqVm+UtVVivaYqZnUtNqwbeOGIXcsQ2TnM+wxh95PiHb548dfr2ysrKojWTeU6At/nk8e0Vlfptael823hOnjsLUEo/qAJM2jMAbDYMH10NhRrOXmjZjZ8f43SX3kxkxAPuOb+B5+z5lt1dnVen+iApz8Fz8Zw8d47yxGqzGLoNYbsEKWqrrvvqcX2nlbLfwLz7oLctYPgQQGEnOdkyiK+puF4Inlno4OCdGpfs09D6t4DUlp7TLlwPYZ+jqiq+JFT1RcTg19LVQMySSXOWG2RJhy1pGrYrZa/IKF1vICf/CLmiteSehp1D05RWw6d9HY3YAqis6boKnd99IKO/epmHeXmMpiqt+TZJhf4vTXuloG04fROeW49ZPytNOYUU9z0NW3QITZyAag8B+wxWn5DcGRTYkHnbtaHbzLTccUc+Hq5JXBDnUTo/co3TuYiAOPceBu2g9OPYK7kmmHj+fHGn6d30gH4KaiywGH6f5nsgfttkNWjbzagUAU0bQX8pAJZ5NLr8G93xJYcF+gTiJD73Js30HdBo0BO8lSxFwhcLgHGOegF0F2gT5X9aOtedp6hKvwFaWmD1yI3O60hnQb/q7VPyHEvd+fICcg1aVURdnENj7nnU9dRCxyp33pyAXwHdU2x/yluA3t0ZFX+p7h533pyAc4co1ufmA7xviADvywc4fogAx+cD9JcwWPYr3zaV9hKBPx9gvMTcK/qNVUsYE88HeKmEwdxrPuVmkmWgESWMuZgP8HCJEv4adBn0bInl7Ug+wKYSneAo6LfudylHU77kvQt0AjSlwOD/UPptvG63IjB/XQH+E+68OSXsAa0sstqQC0bud6gI/0p33rzJ+69uPct33O0W2TtBv3Cv8x0b3flyd239WozgLdbDXrt9s1cb/VuMXF7W7TK/cpNgr/QHK7XF6HbrGe/NPygR6AOXf2k+sFKaKG6I3gE9kKdr42RxyO3a3gN1FP3/1eu8PUAP0AP0AD1AD9AD9AA9QA/QA/QAPUAP0AP0AP8/Af8rwADGWNSk/7McYgAAAABJRU5ErkJggg=="},function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t){e.exports=c},function(e,t,n){var r,a;window,e.exports=(r=n(0),a=n(2),function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=r},function(e,t){e.exports=a},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,l(t).apply(this,arguments))}var n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.nodeName,n=(e.items,e.children,function(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}(e,["nodeName","items","children"]));return Object(r.createElement)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){c(e,t,n[t])})}return e}({children:this.children},n))}},{key:"children",get:function(){var e=this.props,t=e.items,n=e.children,r=!t.some(function(e){return e});return t.map(function(e,t){return e?n[t]||n:null===e&&r&&n[t]?n[t]:null})}}])&&u(n.prototype,a),t}();p.propTypes={items:o.a.array,nodeName:o.a.any},p.defaultProps={items:[],nodeName:"div"},t.default=p}]))},function(e,t){e.exports=u},function(e,t){e.exports=l},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),c=n(5),u=n.n(c),l=n(6),s=n.n(l),p=n(1),f=n.n(p),d=(n(11),n(7)),m=n.n(d),b=n(8),y=n.n(b),g=n(9),h=n.n(g),v=n(4),A=n.n(v),O=n(10),w=n.n(O);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function U(e){return(U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var T=function(e){if(e){var t=m()(1e3*e),n=t.second,r=t.minute;return A()(r,2,"0")+":"+A()(n).padStart(2,"0")}return"00:00"},G=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=P(this,U(t).call(this,e)))._onAction=function(e){n.audio[e]()},n._onAudioChange=function(e){var t=n.props.onChange,r=n.audio,a=r.times,o=r.status,i=e.type;("loadedmetadata"===i||"error"===i)&&n.setState({loaded:!0}),n.updateMeta(),n.setState({step:100*a.rate+"%",status:o}),t({target:n.audio})},n._onRateChange=function(e){var t=e.target.value;n.setState({rate:t},function(){n.audio.prop("rate",t)})},n._onHandleChange=function(e){var t=e.target.value;if("drag"===e.type){var r=(t.x-n.barBound.left)/n.barBound.width;r<=1&&(n.audio.move(r),n.setState({step:(100*r).toFixed(2)+"%"}))}};var r=e.meta;return n.state={loaded:!!r,status:f.a.STATUS.init,rate:1,step:0,meta:r||{current:0,total:0}},n.audioElement=a.a.createRef(),n.handleElement=a.a.createRef(),n.barElement=a.a.createRef(),n}var o,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,r["Component"]),o=t,(i=[{key:"componentDidMount",value:function(){var e=this.audioElement.current,t=this.handleElement.current,n=this.barElement.current;this.barBound=n.getBoundingClientRect(),this.audio=new f.a(e,{onChange:this._onAudioChange}),this.draggable=new y.a(t,{onChange:this._onHandleChange})}},{key:"updateMeta",value:function(){var e=this.audio.times,t=e.current,n=e.total,r=this.props.meta;this.setState({meta:{current:t,total:r?r.total:n}})}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.src,o=e.title,i=e.description,c=(e.meta,j(e,["className","src","title","description","meta"])),l=this.state,s=l.status,p=l.rate,d=l.step,m=l.loaded;return a.a.createElement("section",S({className:u()("react-audio",t),"data-audio-status":w()(f.a.STATUS,s),"data-loaded":m},c),r&&a.a.createElement("audio",{className:"react-audio__element",hidden:!0,ref:this.audioElement,src:r},"NOT SUPPORT AUDIO."),a.a.createElement("div",{className:"react-audio__control"},a.a.createElement("div",{className:"bd"},a.a.createElement(h.a,{className:"react-audio__status",items:[s===f.a.STATUS.init||s===f.a.STATUS.canplay||s===f.a.STATUS.pause||s===f.a.STATUS.loaded,s===f.a.STATUS.play,s===f.a.STATUS.ended,s===f.a.STATUS.error]},a.a.createElement("button",{onClick:this._onAction.bind(this,"play"),className:"react-audio__icon"},a.a.createElement("img",{className:"icon--play",src:n(3)})),a.a.createElement("button",{onClick:this._onAction.bind(this,"pause"),className:"react-audio__icon"},a.a.createElement("img",{className:"icon--pause",src:n(3)})),a.a.createElement("button",{onClick:this._onAction.bind(this,"play"),className:"react-audio__icon"},a.a.createElement("img",{className:"icon--replay",src:n(3)})),a.a.createElement("button",{className:"react-audio__icon"},a.a.createElement("img",{className:"icon--error",src:n(3)}))),a.a.createElement("section",{className:"react-audio__content"},a.a.createElement("header",{className:"hd"},a.a.createElement("div",{className:"react-audio__title"},o),a.a.createElement("select",{onChange:this._onRateChange,className:"react-audio__rate",value:p},a.a.createElement("option",{value:"1"},"常速"),a.a.createElement("option",{value:"1.25"},"x1.25 倍"),a.a.createElement("option",{value:"1.5"},"x1.5 倍"),a.a.createElement("option",{value:"1.75"},"x1.75 倍"),a.a.createElement("option",{value:"2"},"x2 倍"))),a.a.createElement("footer",{className:"ft"},a.a.createElement("div",{className:"react-audio__description"},i),a.a.createElement("div",{className:"react-audio__times"},a.a.createElement("span",{className:"current"},T(this.state.meta.current))," /"," ",a.a.createElement("span",{className:"total"},T(this.state.meta.total)))))),a.a.createElement("footer",{className:"ft"},a.a.createElement("section",{ref:this.barElement,className:"bar"},a.a.createElement("div",{style:{width:d},className:"react-audio__progress"}),a.a.createElement("div",{style:{left:d},ref:this.handleElement,className:"react-audio__handle"}),a.a.createElement("div",{className:"react-audio__progress-animate"})))),a.a.createElement("div",{className:"react-audio__overlay"}))}}])&&E(o.prototype,i),c&&E(o,c),t}();G.propTypes={className:i.a.string,src:i.a.string,title:i.a.string,description:i.a.string,meta:i.a.object,onChange:i.a.func},G.defaultProps={meta:null,onChange:s.a};t.default=G}])});