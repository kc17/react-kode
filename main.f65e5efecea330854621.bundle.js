(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(module,exports,__webpack_require__){__webpack_require__(161),__webpack_require__(240),module.exports=__webpack_require__(241)},241:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(14),__webpack_require__(11),__webpack_require__(15);var _storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(66),req=__webpack_require__(350);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.configure)(function(){req.keys().forEach(function(filename){return req(filename)})},module)}.call(this,__webpack_require__(118)(module))},350:function(module,exports,__webpack_require__){var map={"./index.stories.js":351};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){var id=map[req];if(!(id+1)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return id}webpackContext.keys=function(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=350},351:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(149),__webpack_require__(150);var react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),_storybook_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(66),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(159),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(98),styled_components__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__),_src_kode__WEBPACK_IMPORTED_MODULE_7__=(__webpack_require__(360),__webpack_require__(58));function _templateObject2(){var data=_taggedTemplateLiteral(["\n  border: 1px solid #ddd;\n  padding: 8px;\n  width: 600px;\n  border-radius: 3px;\n"]);return _templateObject2=function(){return data},data}function _templateObject(){var data=_taggedTemplateLiteral(['\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n']);return _templateObject=function(){return data},data}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Title=styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.h4(_templateObject()),Card=styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div(_templateObject2()),html='\n<html>\n  <div class="navbar">\n    <a href="#">Go</a>\n  </div>\n</html>\n';Object(_storybook_react__WEBPACK_IMPORTED_MODULE_3__.storiesOf)("Kode",module).addDecorator(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_4__.withKnobs).add("HTML",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title,null,"Defualt"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_kode__WEBPACK_IMPORTED_MODULE_7__.a,{lang:"html"},html)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title,null,"Line number"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_kode__WEBPACK_IMPORTED_MODULE_7__.a,{lang:"html",isEnableLineNumber:!0},html)),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title,null,"Setup initial line number"),react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Card,null,react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_kode__WEBPACK_IMPORTED_MODULE_7__.a,{lang:"html",isEnableLineNumber:!0,initialLineNumber:5},html)))}).add("JavaScript",function(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_kode__WEBPACK_IMPORTED_MODULE_7__.a,{lang:"javascript"},"\nimport React from 'react';\n\nconst App = () => (\n  <div>\n    Hello, React.\n  </div>\n);\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);\n")})}.call(this,__webpack_require__(118)(module))},58:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(29),__webpack_require__(24),__webpack_require__(0),__webpack_require__(137),__webpack_require__(138);var react=__webpack_require__(2),react_default=__webpack_require__.n(react),prop_types=__webpack_require__(16),prop_types_default=__webpack_require__.n(prop_types),lib=(__webpack_require__(43),__webpack_require__(156),__webpack_require__(367),__webpack_require__(368),__webpack_require__(97)),lib_default=__webpack_require__.n(lib),embedInlineCSS=function(){var style=document.createElement("style");style.type="text/css",style.appendChild(document.createTextNode("\n    .hljs-pre {\n      margin: 0;\n    }\n    .hljs-table {\n      border-collapse: collapse;\n    }\n    .hljs-table td:nth-child(2) {\n      width: 100%;\n    }\n    .hljs-num {\n      user-select: none;\n      -moz-user-select: none;\n    }\n  ")),document.head.appendChild(style)};function _typeof(obj){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj})(obj)}function _defineProperties(target,props){for(var descriptor,i=0;i<props.length;i++)(descriptor=props[i]).enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}function _possibleConstructorReturn(self,call){return!call||"object"!==_typeof(call)&&"function"!=typeof call?function(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}(self):call}function _getPrototypeOf(o){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)})(o)}function _setPrototypeOf(o,p){return(_setPrototypeOf=Object.setPrototypeOf||function(o,p){return o.__proto__=p,o})(o,p)}var kode_Kode=function(_Component){function Kode(props){var _this;return function(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Kode),(_this=_possibleConstructorReturn(this,_getPrototypeOf(Kode).call(this,props))).el=react_default.a.createRef(),embedInlineCSS(),_this}return function(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),superClass&&_setPrototypeOf(subClass,superClass)}(Kode,react["Component"]),Constructor=Kode,(protoProps=[{key:"componentDidMount",value:function(){var _this$props=this.props,children=_this$props.children,lang=_this$props.lang,isEnableLineNumber=_this$props.isEnableLineNumber,initialLineNumber=_this$props.initialLineNumber,snippet=function(str,lang){for(var snippet=str.trim(),matching=snippet.trim().match(/(\r?\n)/),separator=matching?matching[1]:"",lines=matching?snippet.split(separator):[snippet],result=lib_default.a.highlight(lang,lines.shift()),html=result.value;0<lines.length;)html+=separator+(result=lib_default.a.highlight(lang,lines.shift(),!1,result.top)).value;return result.value=html,result}(children,lang||"plaintext").value,innerHTML=isEnableLineNumber?function(htmlString,initialLineNumber){var innerHTML=htmlString.split("\n").map(function(ln,i){return'<tr class="hljs-ln">\n      <td><span class="hljs-num">'.concat(initialLineNumber+i," </span></td>\n      <td>").concat(ln,"</td>\n    </tr>")}).join("");return'<table class="hljs-table">'.concat(innerHTML,"</table>")}(snippet,initialLineNumber):snippet;this.el.current.innerHTML=innerHTML}},{key:"render",value:function(){var _this$props2=this.props,lang=_this$props2.lang,className=_this$props2.className;return react_default.a.createElement("div",{className:className},react_default.a.createElement("pre",{className:"hljs-pre"},react_default.a.createElement("code",{className:"hljs ".concat(lang),ref:this.el})))}}])&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Kode;var Constructor,protoProps,staticProps}();kode_Kode.propTypes={lang:prop_types_default.a.string,isEnableLineNumber:prop_types_default.a.bool,initialLineNumber:prop_types_default.a.number,diff:prop_types_default.a.shape({addition:prop_types_default.a.shape({start:prop_types_default.a.number,end:prop_types_default.a.number}),deletion:prop_types_default.a.shape({start:prop_types_default.a.number,end:prop_types_default.a.number})})},kode_Kode.defaultProps={lang:"plaintext",isEnableLineNumber:!1,initialLineNumber:1,diff:null};__webpack_exports__.a=kode_Kode;kode_Kode.__docgenInfo={description:"",methods:[],displayName:"Kode",props:{lang:{defaultValue:{value:"'plaintext'",computed:!1},type:{name:"string"},required:!1,description:""},isEnableLineNumber:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:""},initialLineNumber:{defaultValue:{value:"1",computed:!1},type:{name:"number"},required:!1,description:""},diff:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{addition:{name:"shape",value:{start:{name:"number",required:!1},end:{name:"number",required:!1}},required:!1},deletion:{name:"shape",value:{start:{name:"number",required:!1},end:{name:"number",required:!1}},required:!1}}},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/kode.js"]={name:"Kode",docgenInfo:kode_Kode.__docgenInfo,path:"src/kode.js"})}},[[160,1,2]]]);
//# sourceMappingURL=main.f65e5efecea330854621.bundle.js.map