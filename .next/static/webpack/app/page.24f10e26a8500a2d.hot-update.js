"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Socials.tsx":
/*!************************************!*\
  !*** ./src/components/Socials.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ \"(app-pages-browser)/./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"(app-pages-browser)/./node_modules/gsap/ScrollTrigger.js\");\n/* harmony import */ var _barrel_optimize_names_FaInstagram_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=FaInstagram,FaLinkedin!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// Register ScrollTrigger with GSAP\ngsap__WEBPACK_IMPORTED_MODULE_2__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_3__.ScrollTrigger);\nconst socials = [\n    {\n        id: 1,\n        icon: _barrel_optimize_names_FaInstagram_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaInstagram,\n        label: \"Instagram\",\n        link: \"https://www.instagram.com/Wafflebharat/\"\n    },\n    // { id: 2, icon: FaXTwitter, label: 'Twitter', link: 'https://x.com/Waffle-Hackclub' },\n    {\n        id: 3,\n        icon: _barrel_optimize_names_FaInstagram_FaLinkedin_react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaLinkedin,\n        label: \"LinkedIn\",\n        link: \"https://www.linkedin.com/company/waffle-hackclub\"\n    }\n];\nconst Socials = ()=>{\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // GSAP animation setup for social media icons with ScrollTrigger\n        socials.forEach((social)=>{\n            const iconId = \"social-icon-\".concat(social.id); // Unique ID for each social media icon\n            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.fromTo(\"#\".concat(iconId), {\n                opacity: 0,\n                scale: 0\n            }, {\n                opacity: 1,\n                scale: 1,\n                duration: 1,\n                scrollTrigger: {\n                    trigger: \"#\".concat(iconId),\n                    start: \"top 80%\",\n                    end: \"bottom 60%\",\n                    scrub: true,\n                    toggleActions: \"play none none reverse\"\n                }\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"socials\",\n        className: \"flex flex-col items-center pt-5 md:pt-5 pb-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-3xl md:text-3xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-black animate-pulse\",\n                children: \"Our Socials\"\n            }, void 0, false, {\n                fileName: \"/Users/amritanshmishra/Desktop/Waffle-HackClub/src/components/Socials.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6\",\n                children: socials.map((social)=>{\n                    const Icon = social.icon;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: social.link,\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        className: \"relative\",\n                        id: \"social-icon-\".concat(social.id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            className: \"text-white text-4xl transition-transform transform hover:scale-110\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amritanshmishra/Desktop/Waffle-HackClub/src/components/Socials.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined)\n                    }, social.id, false, {\n                        fileName: \"/Users/amritanshmishra/Desktop/Waffle-HackClub/src/components/Socials.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/amritanshmishra/Desktop/Waffle-HackClub/src/components/Socials.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/amritanshmishra/Desktop/Waffle-HackClub/src/components/Socials.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Socials, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Socials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Socials);\nvar _c;\n$RefreshReg$(_c, \"Socials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NvY2lhbHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNrQztBQUNOO0FBQ3VCO0FBQ007QUFFekQsbUNBQW1DO0FBQ25DQyxzQ0FBSUEsQ0FBQ0ksY0FBYyxDQUFDSCw2REFBYUE7QUFFakMsTUFBTUksVUFBVTtJQUNkO1FBQUVDLElBQUk7UUFBR0MsTUFBTUwscUdBQVdBO1FBQUVNLE9BQU87UUFBYUMsTUFBTTtJQUEwQztJQUNoRyx3RkFBd0Y7SUFDeEY7UUFBRUgsSUFBSTtRQUFHQyxNQUFNSixvR0FBVUE7UUFBRUssT0FBTztRQUFZQyxNQUFNO0lBQW1EO0NBQ3hHO0FBRUQsTUFBTUMsVUFBb0I7O0lBQ3hCWCxnREFBU0EsQ0FBQztRQUNSLGlFQUFpRTtRQUNqRU0sUUFBUU0sT0FBTyxDQUFDLENBQUNDO1lBQ2YsTUFBTUMsU0FBUyxlQUF5QixPQUFWRCxPQUFPTixFQUFFLEdBQUksdUNBQXVDO1lBQ2xGTixzQ0FBSUEsQ0FBQ2MsTUFBTSxDQUNULElBQVcsT0FBUEQsU0FDSjtnQkFBRUUsU0FBUztnQkFBR0MsT0FBTztZQUFFLEdBQ3ZCO2dCQUNFRCxTQUFTO2dCQUNUQyxPQUFPO2dCQUNQQyxVQUFVO2dCQUNWQyxlQUFlO29CQUNiQyxTQUFTLElBQVcsT0FBUE47b0JBQ2JPLE9BQU87b0JBQ1BDLEtBQUs7b0JBQ0xDLE9BQU87b0JBQ1BDLGVBQWU7Z0JBQ2pCO1lBQ0Y7UUFFSjtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDQztRQUFJbEIsSUFBRztRQUFVbUIsV0FBVTs7MEJBQzFCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBa0k7Ozs7OzswQkFHaEosOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNacEIsUUFBUXNCLEdBQUcsQ0FBQyxDQUFDZjtvQkFDWixNQUFNZ0IsT0FBT2hCLE9BQU9MLElBQUk7b0JBQ3hCLHFCQUNFLDhEQUFDc0I7d0JBRUNDLE1BQU1sQixPQUFPSCxJQUFJO3dCQUNqQnNCLFFBQU87d0JBQ1BDLEtBQUk7d0JBQ0pQLFdBQVU7d0JBQ1ZuQixJQUFJLGVBQXlCLE9BQVZNLE9BQU9OLEVBQUU7a0NBRTVCLDRFQUFDc0I7NEJBQUtILFdBQVU7Ozs7Ozt1QkFQWGIsT0FBT04sRUFBRTs7Ozs7Z0JBVXBCOzs7Ozs7Ozs7Ozs7QUFJUjtHQWhETUk7S0FBQUE7QUFrRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU29jaWFscy50c3g/NjUwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdzYXAgfSBmcm9tICdnc2FwJztcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tICdnc2FwL1Njcm9sbFRyaWdnZXInO1xuaW1wb3J0IHsgRmFJbnN0YWdyYW0sIEZhTGlua2VkaW4gfSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XG5pbXBvcnQge0ZhWFR3aXR0ZXJ9IGZyb20gJ3JlYWN0LWljb25zL2ZhNic7XG4vLyBSZWdpc3RlciBTY3JvbGxUcmlnZ2VyIHdpdGggR1NBUFxuZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKTtcblxuY29uc3Qgc29jaWFscyA9IFtcbiAgeyBpZDogMSwgaWNvbjogRmFJbnN0YWdyYW0sIGxhYmVsOiAnSW5zdGFncmFtJywgbGluazogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vV2FmZmxlYmhhcmF0LycgfSxcbiAgLy8geyBpZDogMiwgaWNvbjogRmFYVHdpdHRlciwgbGFiZWw6ICdUd2l0dGVyJywgbGluazogJ2h0dHBzOi8veC5jb20vV2FmZmxlLUhhY2tjbHViJyB9LFxuICB7IGlkOiAzLCBpY29uOiBGYUxpbmtlZGluLCBsYWJlbDogJ0xpbmtlZEluJywgbGluazogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3dhZmZsZS1oYWNrY2x1YicgfSxcbl07XG5cbmNvbnN0IFNvY2lhbHM6IFJlYWN0LkZDID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEdTQVAgYW5pbWF0aW9uIHNldHVwIGZvciBzb2NpYWwgbWVkaWEgaWNvbnMgd2l0aCBTY3JvbGxUcmlnZ2VyXG4gICAgc29jaWFscy5mb3JFYWNoKChzb2NpYWwpID0+IHtcbiAgICAgIGNvbnN0IGljb25JZCA9IGBzb2NpYWwtaWNvbi0ke3NvY2lhbC5pZH1gOyAvLyBVbmlxdWUgSUQgZm9yIGVhY2ggc29jaWFsIG1lZGlhIGljb25cbiAgICAgIGdzYXAuZnJvbVRvKFxuICAgICAgICBgIyR7aWNvbklkfWAsIC8vIFNlbGVjdCBlYWNoIGljb24gYnkgaXRzIHVuaXF1ZSBJRFxuICAgICAgICB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLFxuICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IGAjJHtpY29uSWR9YCxcbiAgICAgICAgICAgIHN0YXJ0OiAndG9wIDgwJScsIC8vIEFuaW1hdGlvbiBzdGFydHMgd2hlbiB0aGUgdG9wIG9mIHRoZSBpY29uIGlzIDgwJSBpbiB2aWV3XG4gICAgICAgICAgICBlbmQ6ICdib3R0b20gNjAlJywgLy8gQW5pbWF0aW9uIGVuZHMgd2hlbiB0aGUgYm90dG9tIG9mIHRoZSBpY29uIGlzIDYwJSBpbiB2aWV3XG4gICAgICAgICAgICBzY3J1YjogdHJ1ZSwgLy8gU21vb3RobHkgdXBkYXRlcyB0aGUgYW5pbWF0aW9uIHdoaWxlIHNjcm9sbGluZ1xuICAgICAgICAgICAgdG9nZ2xlQWN0aW9uczogJ3BsYXkgbm9uZSBub25lIHJldmVyc2UnLCAvLyBQbGF5IGFuaW1hdGlvbiB3aGVuIGVudGVyaW5nIHZpZXcsIHJldmVyc2Ugd2hlbiBsZWF2aW5nXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD0nc29jaWFscycgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHQtNSBtZDpwdC01IHBiLTEwXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgbWQ6dGV4dC0zeGwgZm9udC1ib2xkIHRleHQtd2hpdGUgbWItNiBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBiZy1ncmFkaWVudC10by1yIGZyb20td2hpdGUgdG8tYmxhY2sgYW5pbWF0ZS1wdWxzZVwiPlxuICAgICAgIE91ciBTb2NpYWxzXG4gICAgICA8L2gyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG4gICAgICAgIHtzb2NpYWxzLm1hcCgoc29jaWFsKSA9PiB7XG4gICAgICAgICAgY29uc3QgSWNvbiA9IHNvY2lhbC5pY29uO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBrZXk9e3NvY2lhbC5pZH1cbiAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmxpbmt9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgICAgIGlkPXtgc29jaWFsLWljb24tJHtzb2NpYWwuaWR9YH0gLy8gVXNlIHVuaXF1ZSBJRCBmb3IgZWFjaCBzb2NpYWwgbWVkaWEgaWNvblxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtNHhsIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMTBcIiAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTb2NpYWxzO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsImdzYXAiLCJTY3JvbGxUcmlnZ2VyIiwiRmFJbnN0YWdyYW0iLCJGYUxpbmtlZGluIiwicmVnaXN0ZXJQbHVnaW4iLCJzb2NpYWxzIiwiaWQiLCJpY29uIiwibGFiZWwiLCJsaW5rIiwiU29jaWFscyIsImZvckVhY2giLCJzb2NpYWwiLCJpY29uSWQiLCJmcm9tVG8iLCJvcGFjaXR5Iiwic2NhbGUiLCJkdXJhdGlvbiIsInNjcm9sbFRyaWdnZXIiLCJ0cmlnZ2VyIiwic3RhcnQiLCJlbmQiLCJzY3J1YiIsInRvZ2dsZUFjdGlvbnMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsIm1hcCIsIkljb24iLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Socials.tsx\n"));

/***/ })

});