/*! (C) WebReflection Mit Style License */
// see https://github.com/WebReflection/document-register-element/issues/21#issuecomment-102020311
var innerHTML=function(e){var t=e.registerElement,n=e.createElement("div"),r="document-register-element",i=t.innerHTML,s,o;return i?i:(t.call(e,r,{prototype:Object.create(HTMLElement.prototype,{createdCallback:{value:Object}})}),n.innerHTML="<"+r+"></"+r+">","createdCallback"in n.querySelector(r)?t.innerHTML=function(e,t){return e.innerHTML=t,e}:(o=[],s=function(t){if("createdCallback"in t||"attachedCallback"in t||"detachedCallback"in t||"attributeChangedCallback"in t)return;for(var n=t.getAttribute("is"),r=t.nodeName,i=e.createElement.apply(e,n?[r,n]:[r]),s=t.attributes,o=0,u=s.length,a;o<u;o++)a=s[o],i.setAttribute(a.name,a.value);t.replaceWith(i)},(e.registerElement=function(r,i){var s=(i.extends?i.extends+'[is="'+r+'"]':r).toLowerCase();return o.indexOf(s)<0&&o.push(s),t.apply(e,arguments)}).innerHTML=function(e,t){return e.innerHTML=t,o.forEach.call(e.querySelectorAll(o.join(",")),s),e}))}(document);