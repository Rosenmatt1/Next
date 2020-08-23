webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/mateo/Desktop/Next/components/Prices.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n//don't need to import react with Next.js\nvar Prices = /*#__PURE__*/function (_React$Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Prices, _React$Component);\n\n  var _super = _createSuper(Prices);\n\n  function Prices() {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Prices);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"state\", {\n      currency: 'USD'\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Prices, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var list = '';\n\n      if (this.state.currency === 'USD') {\n        list = __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 20\n          }\n        }, \"Bitcoin rate for \", this.props.bpi.USD.description, \": \", __jsx(\"span\", {\n          \"class\": \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 15\n          }\n        }, \" \", this.props.bpi.USD.code, \" \"), \" \", __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 84\n          }\n        }, \" \", this.props.bpi.USD.rate, \" \"));\n      } else if (this.state.currency === 'GBP') {\n        list = __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 24\n          }\n        }, \"Bitcoin rate for \", this.props.bpi.GBP.description, \": \", __jsx(\"span\", {\n          \"class\": \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 19\n          }\n        }, \" \", this.props.bpi.GBP.code, \" \"), \" \", __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 88\n          }\n        }, \" \", this.props.bpi.GBP.rate, \" \"));\n      } else if (this.state.currency === 'EUR') {\n        list = __jsx(\"li\", {\n          className: \"list-group-item\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 24\n          }\n        }, \"Bitcoin rate for \", this.props.bpi.EUR.description, \": \", __jsx(\"span\", {\n          \"class\": \"badge badge-primary\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 19\n          }\n        }, \" \", this.props.bpi.EUR.code, \" \"), \" \", __jsx(\"strong\", {\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 88\n          }\n        }, \" \", this.props.bpi.EUR.rate, \" \"));\n      }\n\n      return __jsx(\"div\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }\n      }, __jsx(\"ul\", {\n        className: \"list-group\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }\n      }, list), __jsx(\"br\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 17\n        }\n      }), __jsx(\"select\", {\n        onChange: function onChange(e) {\n          return _this2.setState({\n            currency: currency\n          });\n        },\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 17\n        }\n      }));\n    }\n  }]);\n\n  return Prices;\n}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Prices);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmljZXMuanM/YmUyZCJdLCJuYW1lcyI6WyJQcmljZXMiLCJjdXJyZW5jeSIsImxpc3QiLCJzdGF0ZSIsInByb3BzIiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiIsImUiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFFTUEsTTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxjQUFRLEVBQUU7QUFETixLOzs7Ozs7OzZCQUtDO0FBQUE7O0FBQ0wsVUFBSUMsSUFBSSxHQUFHLEVBQVg7O0FBRUEsVUFBSSxLQUFLQyxLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDL0JDLFlBQUksR0FBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDZSxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUMsR0FBZixDQUFtQkMsV0FEbEMsUUFFTDtBQUFNLG1CQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW9DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlQyxHQUFmLENBQW1CRSxJQUF2RCxNQUZLLE9BRWdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVUsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVDLEdBQWYsQ0FBbUJHLElBQTdCLE1BRmhFLENBQVA7QUFJQyxPQUxMLE1BS1csSUFBSSxLQUFLTixLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDdENDLFlBQUksR0FBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDZSxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZUssR0FBZixDQUFtQkgsV0FEbEMsUUFFTDtBQUFNLG1CQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW9DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlSyxHQUFmLENBQW1CRixJQUF2RCxNQUZLLE9BRWdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVUsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVLLEdBQWYsQ0FBbUJELElBQTdCLE1BRmhFLENBQVA7QUFJSCxPQUxNLE1BS0EsSUFBSSxLQUFLTixLQUFMLENBQVdGLFFBQVgsS0FBd0IsS0FBNUIsRUFBbUM7QUFDdENDLFlBQUksR0FBRztBQUFJLG1CQUFTLEVBQUMsaUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FDZSxLQUFLRSxLQUFMLENBQVdDLEdBQVgsQ0FBZU0sR0FBZixDQUFtQkosV0FEbEMsUUFFTDtBQUFNLG1CQUFNLHFCQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQW9DLEtBQUtILEtBQUwsQ0FBV0MsR0FBWCxDQUFlTSxHQUFmLENBQW1CSCxJQUF2RCxNQUZLLE9BRWdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVUsS0FBS0osS0FBTCxDQUFXQyxHQUFYLENBQWVNLEdBQWYsQ0FBbUJGLElBQTdCLE1BRmhFLENBQVA7QUFJSDs7QUFHTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFJLGlCQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0tQLElBREwsQ0FESixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKSixFQUtJO0FBQVEsZ0JBQVEsRUFBRSxrQkFBQVUsQ0FBQztBQUFBLGlCQUFJLE1BQUksQ0FBQ0MsUUFBTCxDQUFjO0FBQUNaLG9CQUFRLEVBQVJBO0FBQUQsV0FBZCxDQUFKO0FBQUEsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUxKLENBREo7QUFTSDs7OztFQXBDZ0JhLDRDQUFLLENBQUNDLFM7O0FBdUNaZixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUHJpY2VzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kb24ndCBuZWVkIHRvIGltcG9ydCByZWFjdCB3aXRoIE5leHQuanNcblxuY2xhc3MgUHJpY2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgY3VycmVuY3k6ICdVU0QnXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBsaXN0ID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuY3VycmVuY3kgPT09ICdVU0QnKSB7XG4gICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3RoaXMucHJvcHMuYnBpLlVTRC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDogPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+IHt0aGlzLnByb3BzLmJwaS5VU0QuY29kZX0gPC9zcGFuPiA8c3Ryb25nPiB7dGhpcy5wcm9wcy5icGkuVVNELnJhdGV9IDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0dCUCcpIHtcbiAgICAgICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5HQlAuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLkdCUC5jb2RlfSA8L3NwYW4+IDxzdHJvbmc+IHt0aGlzLnByb3BzLmJwaS5HQlAucmF0ZX0gPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jdXJyZW5jeSA9PT0gJ0VVUicpIHtcbiAgICAgICAgICAgICAgICBsaXN0ID0gPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHt0aGlzLnByb3BzLmJwaS5FVVIuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgOiA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj4ge3RoaXMucHJvcHMuYnBpLkVVUi5jb2RlfSA8L3NwYW4+IDxzdHJvbmc+IHt0aGlzLnByb3BzLmJwaS5FVVIucmF0ZX0gPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAge2xpc3R9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7Y3VycmVuY3l9KX0+PC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Prices.js\n");

/***/ })

})