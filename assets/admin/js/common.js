!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var a;(a=jQuery)(function(){window.rankMathAdmin={init:function(){this.misc(),this.tabs(),this.dependencyManager()},misc:function(){a(".cmb-group-text-only,.cmb-group-fix-me").each(function(){var e=a(this),n=e.find(".cmb-repeatable-group"),t=n.find("> .cmb-row:eq(0) > .cmb-th");e.prepend('<div class="cmb-th"><label>'+t.find("h2").text()+"</label></div>"),n.find(".cmb-add-row").append('<span class="cmb2-metabox-description">'+t.find("p").text()+"</span>"),t.parent().remove()})},tabs:function(){var e=a(".rank-math-tabs-navigation");e.length&&e.each(function(){var n=a(this),t=n.closest(".rank-math-tabs"),r=a(">a",n),i=a(">.rank-math-tabs-content>.rank-math-tab",t),c=n.data("active-class")||"active";r.on("click",function(){var e=a(this),n=e.attr("href");return r.removeClass(c),i.hide(),e.addClass(c),a(n).show(),!1});var o=location.hash||localStorage.getItem(t.attr("id"));null===o?r.eq(0).trigger("click"):(o=a('a[href="'+o+'"]',n)).length?o.trigger("click"):r.eq(0).trigger("click"),e.next().css("min-height",n.outerHeight())})},dependencyManager:function(){var e=this,n=a(".cmb-form, .rank-math-metabox-wrap");a(".cmb-repeat-group-wrap",n).each(function(){var e=a(this),n=e.next(".rank-math-cmb-dependency.hidden");n.length&&e.find("> .cmb-td").append(n)}),a(".rank-math-cmb-dependency",n).each(function(){e.loopDependencies(a(this))}),a("input, select",n).on("change",function(){var n=a(this).attr("name");a('span[data-field="'+n+'"]').each(function(){e.loopDependencies(a(this).closest(".rank-math-cmb-dependency"))})})},checkDependency:function(e,n,t){return"string"==typeof n&&n.includes(",")&&"="===t?n.includes(e):"string"==typeof n&&n.includes(",")&&"!="===t?!n.includes(e):"="===t&&e===n||"=="===t&&e===n||">="===t&&e>=n||"<="===t&&n>=e||">"===t&&e>n||"<"===t&&n>e||"!="===t&&e!==n},loopDependencies:function(e){var n,t=this,r=e.data("relation");e.find("span").each(function(){var e=a(this),i=e.data("value"),c=e.data("comparison"),o=a("[name='"+e.data("field")+"']"),d=o.val();o.is(":radio")&&(d=o.filter(":checked").val()),o.is(":checkbox")&&(d=o.is(":checked"));var s=t.checkDependency(d,i,c);if("or"===r&&s)return n=!0,!1;"and"===r&&(n=void 0===n?s:n&&s)});var i=e.closest(".rank-math-cmb-group");i.length||(i=e.closest(".cmb-row")),n?i.slideDown(300):i.hide()}},window.rankMathAdmin.init()})}]);