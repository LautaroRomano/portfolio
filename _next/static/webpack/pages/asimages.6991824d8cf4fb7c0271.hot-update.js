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
    document.getElementById(id).style.display = "block";
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
          lineNumber: 20,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "work-caption"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: img,
        alt: "thumbnail"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
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
          lineNumber: 36,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
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
            lineNumber: 41,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "filter",
            "data-filter": "aa",
            children: "a"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "work-main",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: "work-grid",
          children: verImages
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this), modal]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2FzaW1hZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbWFnZXMiLCJpbmRleCIsInZlckltYWdlbiIsImlkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsInZlckltYWdlcyIsIm1hcCIsImltZyIsImkiLCJtb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYixxQkFEYSxFQUViLHFCQUZhLEVBR2IscUJBSGEsRUFJYixxQkFKYSxFQUtiLHFCQUxhLENBQWY7O0FBUUEsSUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNsQixNQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxFQUFELEVBQVE7QUFDeEJDLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QkYsRUFBeEIsRUFBNEJHLEtBQTVCLENBQWtDQyxPQUFsQyxHQUE0QyxPQUE1QztBQUNELEdBRkQ7O0FBSUEsTUFBTUMsU0FBUyxHQUFHUixNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSx3QkFDM0I7QUFBSSxlQUFTLEVBQUMsd0JBQWQ7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUE0QixlQUFPLEVBQUU7QUFBQSxpQkFBTVQsU0FBUyxDQUFDUyxDQUFELENBQWY7QUFBQSxTQUFyQztBQUFBLGdDQUNFO0FBQUssYUFBRyxFQUFFRCxHQUFWO0FBQWUsYUFBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEMkI7QUFBQSxHQUFYLENBQWxCO0FBU0EsTUFBTUUsS0FBSyxHQUFHWixNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDQyxHQUFELEVBQU1DLENBQU47QUFBQSx3QkFDdkI7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUEwQixRQUFFLEVBQUVBLENBQTlCO0FBQWlDLFdBQUssRUFBRTtBQUFFSixlQUFPLEVBQUU7QUFBWCxPQUF4QztBQUFBLDZCQUNFO0FBQUssV0FBRyxFQUFFRyxHQUFWO0FBQWUsV0FBRyxFQUFDO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRHVCO0FBQUEsR0FBWCxDQUFkO0FBTUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFTLFFBQUUsRUFBQyxPQUFaO0FBQW9CLGVBQVMsRUFBQyxzQkFBOUI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsdUJBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxXQUFkO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFDLFFBQWQ7QUFBdUIsMkJBQVksS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFJRTtBQUFJLHFCQUFTLEVBQUMsUUFBZDtBQUF1QiwyQkFBWSxJQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEYsZUFnQkU7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsV0FBZDtBQUFBLG9CQUEyQkY7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsRUFzQkdJLEtBdEJIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBOUNEOztBQWdEQSwrREFBZVgsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hc2ltYWdlcy42OTkxODI0ZDhjZjRmYjdjMDI3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIjtcclxuXHJcbmNvbnN0IGltYWdlcyA9IFtcclxuICBcIi9pbWFnZXMvYXMvYXMxLmpwZWdcIixcclxuICBcIi9pbWFnZXMvYXMvYXMyLmpwZWdcIixcclxuICBcIi9pbWFnZXMvYXMvYXMzLmpwZWdcIixcclxuICBcIi9pbWFnZXMvYXMvYXM0LmpwZWdcIixcclxuICBcIi9pbWFnZXMvYXMvYXM1LmpwZWdcIixcclxuXTtcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZlckltYWdlbiA9IChpZCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmVySW1hZ2VzID0gaW1hZ2VzLm1hcCgoaW1nLCBpKSA9PiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwid29yay1pdGVtIHRodW1uYWlsLWltZ1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmstaW1hZ2VcIiBvbkNsaWNrPXsoKSA9PiB2ZXJJbWFnZW4oaSl9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cInRodW1ibmFpbFwiIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLWNhcHRpb25cIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2xpPlxyXG4gICkpO1xyXG5cclxuICBjb25zdCBtb2RhbCA9IGltYWdlcy5tYXAoKGltZywgaSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbGltZ1wiIGlkPXtpfSBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwidGh1bWJuYWlsXCIgLz5cclxuICAgIDwvZGl2PlxyXG4gICkpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHNlY3Rpb24gaWQ9XCJ3b3Jrc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gZ3JpZFRyYWJham9zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1ib3ggdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0aXRsZVwiPlRyYWJham9zPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29sLW1kLTEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmlsdGVyaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmaWx0ZXJcIiBkYXRhLWZpbHRlcj1cImFsbFwiPlxyXG4gICAgICAgICAgICAgIFRvZG9zXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJmaWx0ZXJcIiBkYXRhLWZpbHRlcj1cImFhXCI+XHJcbiAgICAgICAgICAgICAgYVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JrLW1haW5cIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ3b3JrLWdyaWRcIj57dmVySW1hZ2VzfTwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHttb2RhbH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==