var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,r.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){n[t]=e},t.parcelRequire7bc7=r);var a=r("fbklV"),o=r("iQIUW"),i=r("h4Mxw");const s=new Date,d=Date.parse(s);let u,l=0;const c={sartBtn:document.querySelector("[data-start]"),dataDays:document.querySelector("[data-days]"),dataHours:document.querySelector("[data-hours]"),dataMinutes:document.querySelector("[data-minutes]"),dataSeconds:document.querySelector("[data-seconds]"),timeInput:document.querySelector("input#datetime-picker")};c.sartBtn.setAttribute("disabled","");const m={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const e=Date.parse(t[0]);l=e-d,l<=0?o.Notify.warning('Please choose a date in the future"'):(c.sartBtn.removeAttribute("disabled"),(0,i.default)(c,l))}},f=(0,a.default)("input#datetime-picker",m);function v(){u=setInterval(p,1e3),c.timeInput.setAttribute("disabled",""),c.sartBtn.removeEventListener("click",v),c.sartBtn.addEventListener("click",b),c.sartBtn.textContent="Stop"}function b(){clearInterval(u),c.sartBtn.removeEventListener("click",b),c.sartBtn.addEventListener("click",v),c.sartBtn.textContent="Start",c.sartBtn.classList.toggle("visually-hidden"),function(){const t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("data-reset",""),t.textContent="Reset",t.addEventListener("click",y);const e=document.createElement("button");e.setAttribute("type","button"),e.setAttribute("data-continue",""),e.textContent="Continue",e.addEventListener("click",B),c.timeInput.insertAdjacentElement("afterend",t),c.timeInput.insertAdjacentElement("afterend",e)}(),console.log(l)}function p(){if(l>=0&&(l-=1e3,(0,i.default)(c,l),console.log(l)),l<=0)return c.sartBtn.textContent="Start",c.sartBtn.setAttribute("disabled",""),c.timeInput.removeAttribute("disabled",""),l=0,(0,i.default)(c,l),clearInterval(u),void o.Notify.info("Sorry. Time ran out.")}function y(){l=0,(0,i.default)(c,l),c.timeInput.removeAttribute("disabled",""),c.sartBtn.classList.toggle("visually-hidden"),c.sartBtn.setAttribute("disabled",""),document.querySelector("[data-reset]").remove(),document.querySelector("[data-continue]").remove()}function B(){const t=new Date,e=Date.parse(t);l=Date.parse(f.selectedDates[0])-e,console.log(l),u=setInterval(p,1e3),document.querySelector("[data-reset]").remove(),document.querySelector("[data-continue]").remove(),c.sartBtn.classList.toggle("visually-hidden"),c.sartBtn.removeEventListener("click",v),c.sartBtn.addEventListener("click",b),c.sartBtn.textContent="Stop"}c.sartBtn.addEventListener("click",v);
//# sourceMappingURL=04-timer-custom.04fd1dee.js.map