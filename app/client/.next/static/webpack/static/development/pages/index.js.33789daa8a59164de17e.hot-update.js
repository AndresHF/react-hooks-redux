webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MainHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/MainHeader */ "./src/components/Layout/components/MainHeader.tsx");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _public_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../public/styles/app.scss */ "./public/styles/app.scss");
/* harmony import */ var _public_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_styles_app_scss__WEBPACK_IMPORTED_MODULE_3__);


 //@ts-ignore



var Layout = function Layout(props) {
  var backgroundImage = props.backgroundImage;
  console.log(backgroundImage);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _public_styles_app_scss__WEBPACK_IMPORTED_MODULE_3___default.a
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    style: {
      width: "100%",
      backgroundColor: "pink"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MainHeader__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "afterHeader"
  }, backgroundImage ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(backgroundImage, ")"),
      backgroundSize: "cover",
      height: "95vh"
    }
  }, props.children) : props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.33789daa8a59164de17e.hot-update.js.map