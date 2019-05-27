module.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=46)}({0:function(t,e,i){"use strict";function n(t,e,i,n,s,o,a,r){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=i,u._compiled=!0),n&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),s&&s.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=l):s&&(l=r?function(){s.call(this,this.$root.$options.shadowRoot)}:s),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var p=u.beforeCreate;u.beforeCreate=p?[].concat(p,l):[l]}return{exports:t,options:u}}i.d(e,"a",function(){return n})},31:function(t,e){t.exports=require("isyscore-ui/lib/mixins/migrating")},46:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["textarea"===t.type?"isc-textarea":"isc-input",t.inputSize?"isc-input--"+t.inputSize:"",{"is-disabled":t.inputDisabled,"is-exceed":t.inputExceed,"isc-input-group":t.$slots.prepend||t.$slots.append,"isc-input-group--append":t.$slots.append,"isc-input-group--prepend":t.$slots.prepend,"isc-input--prefix":t.$slots.prefix||t.prefixIcon,"isc-input--suffix":t.$slots.suffix||t.suffixIcon||t.clearable||t.showPassword}],on:{mouseenter:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1}}},["textarea"!==t.type?[t.$slots.prepend?i("div",{staticClass:"isc-input-group__prepend"},[t._t("prepend")],2):t._e(),t._v(" "),"textarea"!==t.type?i("input",t._b({ref:"input",staticClass:"isc-input__inner",attrs:{tabindex:t.tabindex,type:t.showPassword?t.passwordVisible?"text":"password":t.type,disabled:t.inputDisabled,readonly:t.readonly,autocomplete:t.autoComplete||t.autocomplete,"aria-label":t.label},on:{compositionstart:t.handleCompositionStart,compositionend:t.handleCompositionEnd,input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange}},"input",t.$attrs,!1)):t._e(),t._v(" "),t.$slots.prefix||t.prefixIcon?i("span",{staticClass:"isc-input__prefix"},[t._t("prefix"),t._v(" "),t.prefixIcon?i("i",{staticClass:"isc-input__icon",class:t.prefixIcon}):t._e()],2):t._e(),t._v(" "),t.getSuffixVisible()?i("span",{staticClass:"isc-input__suffix"},[i("span",{staticClass:"isc-input__suffix-inner"},[t.showClear&&t.showPwdVisible&&t.isWordLimitVisible?t._e():[t._t("suffix"),t._v(" "),t.suffixIcon?i("i",{staticClass:"isc-input__icon",class:t.suffixIcon}):t._e()],t._v(" "),t.showClear?i("i",{staticClass:"isc-input__icon isc-icon-circle-close isc-input__clear",on:{click:t.clear}}):t._e(),t._v(" "),t.showPwdVisible?i("i",{staticClass:"isc-input__icon isc-icon-view isc-input__clear",on:{click:t.handlePasswordVisible}}):t._e(),t._v(" "),t.isWordLimitVisible?i("span",{staticClass:"isc-input__count"},[i("span",{staticClass:"isc-input__count-inner"},[t._v("\n            "+t._s(t.textLength)+"/"+t._s(t.upperLimit)+"\n          ")])]):t._e()],2),t._v(" "),t.validateState?i("i",{staticClass:"isc-input__icon",class:["isc-input__validateIcon",t.validateIcon]}):t._e()]):t._e(),t._v(" "),t.$slots.append?i("div",{staticClass:"isc-input-group__append"},[t._t("append")],2):t._e()]:i("textarea",t._b({ref:"textarea",staticClass:"isc-textarea__inner",style:t.textareaStyle,attrs:{tabindex:t.tabindex,disabled:t.inputDisabled,readonly:t.readonly,autocomplete:t.autoComplete||t.autocomplete,"aria-label":t.label},on:{compositionstart:t.handleCompositionStart,compositionend:t.handleCompositionEnd,input:t.handleInput,focus:t.handleFocus,blur:t.handleBlur,change:t.handleChange}},"textarea",t.$attrs,!1)),t._v(" "),t.isWordLimitVisible&&"textarea"===t.type?i("span",{staticClass:"isc-input__count"},[t._v(t._s(t.textLength)+"/"+t._s(t.upperLimit))]):t._e()],2)};n._withStripped=!0;var s=i(5),o=i.n(s),a=i(31),r=i.n(a),l=void 0,u="\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important\n",c=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;l||(l=document.createElement("textarea"),document.body.appendChild(l));var n=function(t){var e=window.getComputedStyle(t),i=e.getPropertyValue("box-sizing"),n=parseFloat(e.getPropertyValue("padding-bottom"))+parseFloat(e.getPropertyValue("padding-top")),s=parseFloat(e.getPropertyValue("border-bottom-width"))+parseFloat(e.getPropertyValue("border-top-width"));return{contextStyle:c.map(function(t){return t+":"+e.getPropertyValue(t)}).join(";"),paddingSize:n,borderSize:s,boxSizing:i}}(t),s=n.paddingSize,o=n.borderSize,a=n.boxSizing,r=n.contextStyle;l.setAttribute("style",r+";"+u),l.value=t.value||t.placeholder||"";var p=l.scrollHeight,d={};"border-box"===a?p+=o:"content-box"===a&&(p-=s),l.value="";var f=l.scrollHeight-s;if(null!==e){var h=f*e;"border-box"===a&&(h=h+s+o),p=Math.max(h,p),d.minHeight=h+"px"}if(null!==i){var m=f*i;"border-box"===a&&(m=m+s+o),p=Math.min(m,p)}return d.height=p+"px",l.parentNode&&l.parentNode.removeChild(l),l=null,d}var d=i(9),f=i.n(d),h={name:"IsInput",componentName:"IsInput",mixins:[o.a,r.a],inheritAttrs:!1,inject:{elForm:{default:""},elFormItem:{default:""}},data:function(){return{textareaCalcStyle:{},hovering:!1,focused:!1,isComposing:!1,passwordVisible:!1}},props:{value:[String,Number],size:String,resize:String,form:String,disabled:Boolean,readonly:Boolean,type:{type:String,default:"text"},autosize:{type:[Boolean,Object],default:!1},autocomplete:{type:String,default:"off"},autoComplete:{type:String,validator:function(t){return!0}},validateEvent:{type:Boolean,default:!0},suffixIcon:String,prefixIcon:String,label:String,clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},tabindex:String},computed:{_elFormItemSize:function(){return(this.elFormItem||{}).elFormItemSize},validateState:function(){return this.elFormItem?this.elFormItem.validateState:""},needStatusIcon:function(){return!!this.elForm&&this.elForm.statusIcon},validateIcon:function(){return{validating:"isc-icon-loading",success:"isc-icon-circle-check",error:"isc-icon-circle-close"}[this.validateState]},textareaStyle:function(){return f()({},this.textareaCalcStyle,{resize:this.resize})},inputSize:function(){return this.size||this._elFormItemSize||(this.$ELEMENT||{}).size},inputDisabled:function(){return this.disabled||(this.elForm||{}).disabled},nativeInputValue:function(){return null===this.value||void 0===this.value?"":String(this.value)},showClear:function(){return this.clearable&&!this.inputDisabled&&!this.readonly&&this.nativeInputValue&&(this.focused||this.hovering)},showPwdVisible:function(){return this.showPassword&&!this.inputDisabled&&!this.readonly&&(!!this.nativeInputValue||this.focused)},isWordLimitVisible:function(){return this.showWordLimit&&this.$attrs.maxlength&&("text"===this.type||"textarea"===this.type)&&!this.inputDisabled&&!this.readonly&&!this.showPassword},upperLimit:function(){return this.$attrs.maxlength},textLength:function(){return"number"==typeof this.value?String(this.value).length:(this.value||"").length},inputExceed:function(){return this.isWordLimitVisible&&this.textLength>this.upperLimit}},watch:{value:function(t){this.$nextTick(this.resizeTextarea),this.validateEvent&&this.dispatch("ElFormItem","el.form.change",[t])},nativeInputValue:function(){this.setNativeInputValue()},type:function(){var t=this;this.$nextTick(function(){t.setNativeInputValue(),t.resizeTextarea(),t.updateIconOffset()})}},methods:{focus:function(){this.getInput().focus()},blur:function(){this.getInput().blur()},getMigratingConfig:function(){return{props:{icon:"icon is removed, use suffix-icon / prefix-icon instead.","on-icon-click":"on-icon-click is removed."},events:{click:"click is removed."}}},handleBlur:function(t){this.focused=!1,this.$emit("blur",t),this.validateEvent&&this.dispatch("ElFormItem","el.form.blur",[this.value])},select:function(){this.getInput().select()},resizeTextarea:function(){if(!this.$isServer){var t=this.autosize;if("textarea"===this.type)if(t){var e=t.minRows,i=t.maxRows;this.textareaCalcStyle=p(this.$refs.textarea,e,i)}else this.textareaCalcStyle={minHeight:p(this.$refs.textarea).minHeight}}},setNativeInputValue:function(){var t=this.getInput();t&&t.value!==this.nativeInputValue&&(t.value=this.nativeInputValue)},handleFocus:function(t){this.focused=!0,this.$emit("focus",t)},handleCompositionStart:function(){this.isComposing=!0},handleCompositionEnd:function(t){this.isComposing=!1,this.handleInput(t)},handleInput:function(t){this.isComposing||t.target.value!==this.nativeInputValue&&(this.$emit("input",t.target.value),this.$nextTick(this.setNativeInputValue))},handleChange:function(t){this.$emit("change",t.target.value)},calcIconOffset:function(t){var e=[].slice.call(this.$el.querySelectorAll(".isc-input__"+t)||[]);if(e.length){for(var i=null,n=0;n<e.length;n++)if(e[n].parentNode===this.$el){i=e[n];break}if(i){var s={suffix:"append",prefix:"prepend"}[t];this.$slots[s]?i.style.transform="translateX("+("suffix"===t?"-":"")+this.$el.querySelector(".isc-input-group__"+s).offsetWidth+"px)":i.removeAttribute("style")}}},updateIconOffset:function(){this.calcIconOffset("prefix"),this.calcIconOffset("suffix")},clear:function(){this.$emit("input",""),this.$emit("change",""),this.$emit("clear")},handlePasswordVisible:function(){this.passwordVisible=!this.passwordVisible,this.focus()},getInput:function(){return this.$refs.input||this.$refs.textarea},getSuffixVisible:function(){return this.$slots.suffix||this.suffixIcon||this.showClear||this.showPassword||this.isWordLimitVisible||this.validateState&&this.needStatusIcon}},created:function(){this.$on("inputSelect",this.select)},mounted:function(){this.setNativeInputValue(),this.resizeTextarea(),this.updateIconOffset()},updated:function(){this.$nextTick(this.updateIconOffset)}},m=i(0),v=Object(m.a)(h,n,[],!1,null,null,null);v.options.__file="packages/input/src/input.vue";var x=v.exports;x.install=function(t){t.component(x.name,x)};e.default=x},5:function(t,e){t.exports=require("isyscore-ui/lib/mixins/emitter")},9:function(t,e){t.exports=require("isyscore-ui/lib/utils/merge")}});