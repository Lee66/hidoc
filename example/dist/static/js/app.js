!function(){"use strict";function t(t){var r=n.createElement("a");return e(t),r.href="#"+t.id,r.setAttribute("data-scroll",""),t.parentNode.insertBefore(r,t),r.appendChild(t),r}function e(t){t.id=t.textContent}function r(){var t,e=l&&l.scrollTop||c.scrollTop;e+=100;for(var r=0,n=s.length;n>r;r++){var a=s[r];if(a.offsetTop>e){t||(t=a);break}t=a}t&&o(t.textContent)}function o(t){Array.prototype.forEach.call(d,function(e){e.textContent.indexOf(t)>-1?e.classList.add(u):e.classList.remove(u)})}hljs.initHighlightingOnLoad();var n=document,l=n.documentElement,c=n.body,a=n.querySelector(".main"),i=[],s=[],u="current",d=n.querySelector(".second").querySelectorAll("a"),f=a.querySelectorAll("h1"),h=a.querySelectorAll("h2");f.length&&(Array.prototype.forEach.call(f,function(t){i.push(t)}),Array.prototype.forEach.call(h,function(t){s.push(t)})),i.forEach(t),s.map(t),d[0].classList.add(u),window.addEventListener("scroll",r,!1),smoothScroll.init()}();