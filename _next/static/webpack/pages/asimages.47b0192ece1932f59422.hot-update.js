self["webpackHotUpdate_N_E"]("pages/asimages",{

/***/ "./src/pages/asimages/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/asimages/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Programacion\\portfolio\\src\\pages\\asimages\\index.jsx",
    _this = undefined;



var images = ["/portfolio/images/as/as1.jpeg", "/portfolio/images/as/as2.jpeg", "/portfolio/images/as/as3.jpeg", "/portfolio/images/as/as4.jpeg", "/portfolio/images/as/as5.jpeg"];

var index = function index() {
  var verImagen = function verImagen(id) {
    document.getElementById(id).style.display = "flex";
  };

  var ocultarImagen = function ocultarImagen(id) {
    document.getElementById(id).style.display = "none";
  };

  var verImages = images.map(function (img, i) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: "work-item thumnail-img",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "work-image",
        onClick: function onClick() {
          return verImagen(i);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: img,
          alt: "thumbnail"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "work-caption"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }, _this);
  });
  var modal = images.map(function (img, i) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "modalimg",
      id: i,
      style: {
        display: "none"
      },
      onClick: function onClick() {
        return ocultarImagen(i);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: img,
        alt: "thumbnail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, _this);
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      id: "works",
      className: "section gridTrabajos",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "title-box text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: "title",
          children: "Imagenes anasilis de sistemas"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "work-main",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "work-grid",
          children: verImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this), modal]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FzaW1hZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbWFnZXMiLCJpbmRleCIsInZlckltYWdlbiIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9jdWx0YXJJbWFnZW4iLCJ2ZXJJbWFnZXMiLCJtYXAiLCJpbWciLCJpIiwibW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ2IsK0JBRGEsRUFFYiwrQkFGYSxFQUdiLCtCQUhhLEVBSWIsK0JBSmEsRUFLYiwrQkFMYSxDQUFmOztBQVFBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsRUFBRCxFQUFRO0FBQ3hCQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0JGLEVBQXhCLEVBQTRCRyxLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsTUFBNUM7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0wsRUFBRCxFQUFRO0FBQzVCQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0JGLEVBQXhCLEVBQTRCRyxLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsTUFBNUM7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFNBQVMsR0FBR1QsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsd0JBQzNCO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBNEIsZUFBTyxFQUFFO0FBQUEsaUJBQU1WLFNBQVMsQ0FBQ1UsQ0FBRCxDQUFmO0FBQUEsU0FBckM7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUQsR0FBVjtBQUFlLGFBQUcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDJCO0FBQUEsR0FBWCxDQUFsQjtBQVNBLE1BQU1FLEtBQUssR0FBR2IsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsd0JBQ3ZCO0FBQ0UsZUFBUyxFQUFDLFVBRFo7QUFFRSxRQUFFLEVBQUVBLENBRk47QUFHRSxXQUFLLEVBQUU7QUFBRUwsZUFBTyxFQUFFO0FBQVgsT0FIVDtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQ0ksQ0FBRCxDQUFuQjtBQUFBLE9BSlg7QUFBQSw2QkFNRTtBQUFLLFdBQUcsRUFBRUQsR0FBVjtBQUFlLFdBQUcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUR1QjtBQUFBLEdBQVgsQ0FBZDtBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUyxRQUFFLEVBQUMsT0FBWjtBQUFvQixlQUFTLEVBQUMsc0JBQTlCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQUEsb0JBQTJCRjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBV0dJLEtBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFlRCxDQTNDRDs7QUE2Q0EsK0RBQWVaLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNpbWFnZXMuNDdiMDE5MmVjZTE5MzJmNTk0MjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgXCIvcG9ydGZvbGlvL2ltYWdlcy9hcy9hczEuanBlZ1wiLFxyXG4gIFwiL3BvcnRmb2xpby9pbWFnZXMvYXMvYXMyLmpwZWdcIixcclxuICBcIi9wb3J0Zm9saW8vaW1hZ2VzL2FzL2FzMy5qcGVnXCIsXHJcbiAgXCIvcG9ydGZvbGlvL2ltYWdlcy9hcy9hczQuanBlZ1wiLFxyXG4gIFwiL3BvcnRmb2xpby9pbWFnZXMvYXMvYXM1LmpwZWdcIixcclxuXTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZlckltYWdlbiA9IChpZCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9O1xyXG4gIGNvbnN0IG9jdWx0YXJJbWFnZW4gPSAoaWQpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmVySW1hZ2VzID0gaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwid29yay1pdGVtIHRodW1uYWlsLWltZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstaW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB2ZXJJbWFnZW4oaSl9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cInRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcHRpb25cIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBtb2RhbCA9IGltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9XCJtb2RhbGltZ1wiXHJcbiAgICAgIGlkPXtpfVxyXG4gICAgICBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBvY3VsdGFySW1hZ2VuKGkpfVxyXG4gICAgPlxyXG4gICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8c2VjdGlvbiBpZD1cIndvcmtzXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBncmlkVHJhYmFqb3NcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWJveCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRpdGxlXCI+SW1hZ2VuZXMgYW5hc2lsaXMgZGUgc2lzdGVtYXM8L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstbWFpblwiPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIndvcmstZ3JpZFwiPnt2ZXJJbWFnZXN9PC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAge21vZGFsfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9