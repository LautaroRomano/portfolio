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



var images = ["/images/as/as1.jpeg", "/images/as/as2.jpeg", "/images/as/as3.jpeg", "/images/as/as4.jpeg", "/images/as/as5.jpeg"];

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
          children: "Trabajos"
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
        className: " col-md-12 text-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "filtering",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "filter",
            "data-filter": "all",
            children: "Todos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "filter",
            "data-filter": "aa",
            children: "a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "work-main",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "work-grid",
          children: verImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FzaW1hZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbWFnZXMiLCJpbmRleCIsInZlckltYWdlbiIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsIm9jdWx0YXJJbWFnZW4iLCJ2ZXJJbWFnZXMiLCJtYXAiLCJpbWciLCJpIiwibW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHLENBQ2IscUJBRGEsRUFFYixxQkFGYSxFQUdiLHFCQUhhLEVBSWIscUJBSmEsRUFLYixxQkFMYSxDQUFmOztBQVFBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFDbEIsTUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsRUFBRCxFQUFRO0FBQ3hCQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0JGLEVBQXhCLEVBQTRCRyxLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsTUFBNUM7QUFDRCxHQUZEOztBQUdBLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0wsRUFBRCxFQUFRO0FBQzVCQyxZQUFRLENBQUNDLGNBQVQsQ0FBd0JGLEVBQXhCLEVBQTRCRyxLQUE1QixDQUFrQ0MsT0FBbEMsR0FBNEMsTUFBNUM7QUFDRCxHQUZEOztBQUlBLE1BQU1FLFNBQVMsR0FBR1QsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsd0JBQzNCO0FBQUksZUFBUyxFQUFDLHdCQUFkO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFlBQWY7QUFBNEIsZUFBTyxFQUFFO0FBQUEsaUJBQU1WLFNBQVMsQ0FBQ1UsQ0FBRCxDQUFmO0FBQUEsU0FBckM7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBRUQsR0FBVjtBQUFlLGFBQUcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRDJCO0FBQUEsR0FBWCxDQUFsQjtBQVNBLE1BQU1FLEtBQUssR0FBR2IsTUFBTSxDQUFDVSxHQUFQLENBQVcsVUFBQ0MsR0FBRCxFQUFNQyxDQUFOO0FBQUEsd0JBQ3ZCO0FBQ0UsZUFBUyxFQUFDLFVBRFo7QUFFRSxRQUFFLEVBQUVBLENBRk47QUFHRSxXQUFLLEVBQUU7QUFBRUwsZUFBTyxFQUFFO0FBQVgsT0FIVDtBQUlFLGFBQU8sRUFBRTtBQUFBLGVBQU1DLGFBQWEsQ0FBQ0ksQ0FBRCxDQUFuQjtBQUFBLE9BSlg7QUFBQSw2QkFNRTtBQUFLLFdBQUcsRUFBRUQsR0FBVjtBQUFlLFdBQUcsRUFBQztBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUR1QjtBQUFBLEdBQVgsQ0FBZDtBQVdBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUyxRQUFFLEVBQUMsT0FBWjtBQUFvQixlQUFTLEVBQUMsc0JBQTlCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDLHVCQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLGtDQUNFO0FBQUkscUJBQVMsRUFBQyxRQUFkO0FBQXVCLDJCQUFZLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBSSxxQkFBUyxFQUFDLFFBQWQ7QUFBdUIsMkJBQVksSUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGLGVBZ0JFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLFdBQWQ7QUFBQSxvQkFBMkJGO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBc0JHSSxLQXRCSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBCRCxDQXRERDs7QUF3REEsK0RBQWVaLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXNpbWFnZXMuZTZiODc4YjRiNDYxYWM1MTJjYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCI7XHJcblxyXG5jb25zdCBpbWFnZXMgPSBbXHJcbiAgXCIvaW1hZ2VzL2FzL2FzMS5qcGVnXCIsXHJcbiAgXCIvaW1hZ2VzL2FzL2FzMi5qcGVnXCIsXHJcbiAgXCIvaW1hZ2VzL2FzL2FzMy5qcGVnXCIsXHJcbiAgXCIvaW1hZ2VzL2FzL2FzNC5qcGVnXCIsXHJcbiAgXCIvaW1hZ2VzL2FzL2FzNS5qcGVnXCIsXHJcbl07XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+IHtcclxuICBjb25zdCB2ZXJJbWFnZW4gPSAoaWQpID0+IHtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfTtcclxuICBjb25zdCBvY3VsdGFySW1hZ2VuID0gKGlkKSA9PiB7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZlckltYWdlcyA9IGltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxyXG4gICAgPGxpIGNsYXNzTmFtZT1cIndvcmstaXRlbSB0aHVtbmFpbC1pbWdcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWltYWdlXCIgb25DbGljaz17KCkgPT4gdmVySW1hZ2VuKGkpfT5cclxuICAgICAgICA8aW1nIHNyYz17aW1nfSBhbHQ9XCJ0aHVtYm5haWxcIiAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29yay1jYXB0aW9uXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9saT5cclxuICApKTtcclxuXHJcbiAgY29uc3QgbW9kYWwgPSBpbWFnZXMubWFwKChpbWcsIGkpID0+IChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPVwibW9kYWxpbWdcIlxyXG4gICAgICBpZD17aX1cclxuICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cclxuICAgICAgb25DbGljaz17KCkgPT4gb2N1bHRhckltYWdlbihpKX1cclxuICAgID5cclxuICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwidGh1bWJuYWlsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ3b3Jrc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gZ3JpZFRyYWJham9zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1ib3ggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRyYWJham9zPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmaWx0ZXJcIiBkYXRhLWZpbHRlcj1cImFsbFwiPlxyXG4gICAgICAgICAgICAgIFRvZG9zXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmaWx0ZXJcIiBkYXRhLWZpbHRlcj1cImFhXCI+XHJcbiAgICAgICAgICAgICAgYVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLW1haW5cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3b3JrLWdyaWRcIj57dmVySW1hZ2VzfTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHttb2RhbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==