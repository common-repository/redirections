!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}({2:function(e,t,n){"use strict";var r;(r=jQuery)(function(){var e=r("#rank-math-redirections-feedback-form"),t=e.find(".rank-math-feedback-input-wrapper"),n=e.find("form"),o=r("#the-list").find('[data-slug*="redirections"] span.deactivate a');o.on("click",function(t){t.preventDefault(),e.fadeIn()}),e.on("change","input:radio",function(){var e=r(this).parent();t.removeClass("checked"),e.toggleClass("checked")}),e.on("click",".button-skip",function(){location.href=o.attr("href")}),e.on("click",".button-close",function(t){t.preventDefault(),e.fadeOut()}),n.on("submit",function(e){e.preventDefault(),n.find(".button-submit").text("").addClass("loading"),r.ajax({url:ajaxurl,type:"POST",dataType:"json",data:n.serialize()}).done(function(){location.href=o.attr("href")})}),r(".module-listing .rank-math-box:not(.active), .rank-math-404-redirect-btn").on("click",function(e){if(e.preventDefault(),"module-redirections"!==r(this).attr("for"))return r("#rank-math-redirections-feedback-form").fadeIn(),!1}),r("#rank-math-redirections-feedback-form").on("click",function(e){"rank-math-redirections-feedback-form"===e.target.id&&r(this).find(".button-close").trigger("click")})})}});