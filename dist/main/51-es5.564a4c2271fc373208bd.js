(self.webpackChunkcliniva=self.webpackChunkcliniva||[]).push([[51],{82051:function(e,t){var n,o;void 0===(o="function"==typeof(n=function(){"use strict";function t(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){r(o.response,t,n)},o.onerror=function(){console.error("could not download file")},o.send()}function n(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function o(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(n)}}var a="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,i=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),r=a.saveAs||("object"!=typeof window||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!i?function(e,i,r){var c=a.URL||a.webkitURL,l=document.createElement("a");l.download=i=i||e.name||"download",l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?o(l):n(l.href)?t(e,i,r):o(l,l.target="_blank")):(l.href=c.createObjectURL(e),setTimeout(function(){c.revokeObjectURL(l.href)},4e4),setTimeout(function(){o(l)},0))}:"msSaveOrOpenBlob"in navigator?function(e,a,i){if(a=a||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,i),a);else if(n(e))t(e,a,i);else{var r=document.createElement("a");r.href=e,r.target="_blank",setTimeout(function(){o(r)})}}:function(e,n,o,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,n,o);var c="application/octet-stream"===e.type,l=/constructor/i.test(a.HTMLElement)||a.safari,s=/CriOS\/[\d]+/.test(navigator.userAgent);if((s||c&&l||i)&&"undefined"!=typeof FileReader){var u=new FileReader;u.onloadend=function(){var e=u.result;e=s?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},u.readAsDataURL(e)}else{var f=a.URL||a.webkitURL,d=f.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout(function(){f.revokeObjectURL(d)},4e4)}});a.saveAs=r.saveAs=r,e.exports=r})?n.apply(t,[]):n)||(e.exports=o)}}]);