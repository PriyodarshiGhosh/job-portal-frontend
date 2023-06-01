"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/candidate/candidatePage",{

/***/ "./src/features/Candidate/jobApplication.tsx":
/*!***************************************************!*\
  !*** ./src/features/Candidate/jobApplication.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobApplication; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/axios */ \"./src/utils/axios.ts\");\n/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config/apiRoutes */ \"./src/config/apiRoutes.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction JobApplication() {\n    _s();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [selectedJob, setSelectedJob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [showApplications, setShowApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State variable to track whether to show applications\n    const { data: jobApplications , isLoading , isError  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)([\n        \"jobApplications\"\n    ], async ()=>{\n        const jwtToken = localStorage.getItem(\"token\") || \"\";\n        try {\n            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_2__.axiosInstance.get(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].CANDIDATE + \"/application\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(jwtToken)\n                }\n            });\n            console.log(response);\n            return response.data.map((jobApplication)=>({\n                    jobId: jobApplication.jobId,\n                    resume: jobApplication.resume\n                }));\n        } catch (error) {\n            throw new Error(\"Failed to fetch job applications\");\n        }\n    });\n    if (isLoading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, this);\n    }\n    if (isError) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: error\n        }, void 0, false, {\n            fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n            lineNumber: 39,\n            columnNumber: 12\n        }, this);\n    }\n    const toggleApplications = ()=>{\n        setShowApplications(!showApplications);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mt-8\",\n                children: \"Your Job Applications\"\n            }, void 0, false, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            showApplications && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4\",\n                children: jobApplications.map((jobApplication)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white shadow-md rounded-lg p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-lg font-medium\",\n                                children: jobApplication.jobId\n                            }, void 0, false, {\n                                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600\",\n                                children: jobApplication.resume\n                            }, void 0, false, {\n                                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, jobApplication.jobId, true, {\n                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobApplication.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(JobApplication, \"xgXBwU5efJ2TNm2l36j3IM6VFW0=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery\n    ];\n});\n_c = JobApplication;\nvar _c;\n$RefreshReg$(_c, \"JobApplication\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvQ2FuZGlkYXRlL2pvYkFwcGxpY2F0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2dCO0FBQ0g7QUFDSDtBQUc1QixTQUFTSSxpQkFBaUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNPLGFBQWFDLGVBQWUsR0FBR1IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDUyxrQkFBa0JDLG9CQUFvQixHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJLEdBQUcsdURBQXVEO0lBRXZILE1BQU0sRUFBRVcsTUFBTUMsZ0JBQWUsRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUUsR0FBR2IsK0RBQVFBLENBQzVEO1FBQUM7S0FBa0IsRUFDbkIsVUFBWTtRQUNWLE1BQU1jLFdBQVdDLGFBQWFDLE9BQU8sQ0FBQyxZQUFZO1FBRWxELElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1oQiwyREFBaUIsQ0FBQ0MsbUVBQW1CLEdBQUcsZ0JBQWdCO2dCQUM3RWtCLFNBQVM7b0JBQ1BDLGVBQWUsVUFBbUIsT0FBVFA7Z0JBQzNCO1lBQ0Y7WUFDQVEsUUFBUUMsR0FBRyxDQUFDTjtZQUNaLE9BQU9BLFNBQVNQLElBQUksQ0FBQ2MsR0FBRyxDQUFDLENBQUNDLGlCQUF5QjtvQkFDakRDLE9BQU9ELGVBQWVDLEtBQUs7b0JBQzNCQyxRQUFRRixlQUFlRSxNQUFNO2dCQUMvQjtRQUNGLEVBQUUsT0FBT3ZCLE9BQU87WUFDZCxNQUFNLElBQUl3QixNQUFNLG9DQUFvQztRQUN0RDtJQUNGO0lBR0YsSUFBSWhCLFdBQVc7UUFDYixxQkFBTyw4REFBQ2lCO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQsSUFBSWhCLFNBQVM7UUFDWCxxQkFBTyw4REFBQ2dCO3NCQUFLekI7Ozs7OztJQUNmLENBQUM7SUFFRCxNQUFNMEIscUJBQXFCLElBQU07UUFDL0JyQixvQkFBb0IsQ0FBQ0Q7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ3FCOzswQkFDQyw4REFBQ0U7Z0JBQUdDLFdBQVU7MEJBQTBCOzs7Ozs7WUFDdkN4QixrQ0FDQyw4REFBQ3FCO2dCQUFJRyxXQUFVOzBCQUNackIsZ0JBQWdCYSxHQUFHLENBQUMsQ0FBQ0MsK0JBQ3BCLDhEQUFDSTt3QkFFQ0csV0FBVTs7MENBRVYsOERBQUNDO2dDQUFFRCxXQUFVOzBDQUF1QlAsZUFBZUMsS0FBSzs7Ozs7OzBDQUN4RCw4REFBQ087Z0NBQUVELFdBQVU7MENBQWlCUCxlQUFlRSxNQUFNOzs7Ozs7O3VCQUo5Q0YsZUFBZUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztBQVd2QyxDQUFDO0dBekR1QnZCOztRQUtnQ0gsMkRBQVFBOzs7S0FMeENHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9DYW5kaWRhdGUvam9iQXBwbGljYXRpb24udHN4PzdjYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBheGlvc0luc3RhbmNlIH0gZnJvbSAnQC91dGlscy9heGlvcyc7XG5pbXBvcnQgQXBpUm91dGVzIGZyb20gJ0AvY29uZmlnL2FwaVJvdXRlcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSm9iQXBwbGljYXRpb24oKSB7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc2VsZWN0ZWRKb2IsIHNldFNlbGVjdGVkSm9iXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Nob3dBcHBsaWNhdGlvbnMsIHNldFNob3dBcHBsaWNhdGlvbnNdID0gdXNlU3RhdGUodHJ1ZSk7IC8vIFN0YXRlIHZhcmlhYmxlIHRvIHRyYWNrIHdoZXRoZXIgdG8gc2hvdyBhcHBsaWNhdGlvbnNcblxuICBjb25zdCB7IGRhdGE6IGpvYkFwcGxpY2F0aW9ucywgaXNMb2FkaW5nLCBpc0Vycm9yIH0gPSB1c2VRdWVyeShcbiAgICBbJ2pvYkFwcGxpY2F0aW9ucyddLFxuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGp3dFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgfHwgJyc7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoQXBpUm91dGVzLkNBTkRJREFURSArICcvYXBwbGljYXRpb24nLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2p3dFRva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5tYXAoKGpvYkFwcGxpY2F0aW9uOiBhbnkpID0+ICh7XG4gICAgICAgICAgam9iSWQ6IGpvYkFwcGxpY2F0aW9uLmpvYklkLFxuICAgICAgICAgIHJlc3VtZTogam9iQXBwbGljYXRpb24ucmVzdW1lLFxuICAgICAgICB9KSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBqb2IgYXBwbGljYXRpb25zJyk7XG4gICAgICB9XG4gICAgfVxuICApO1xuXG4gIGlmIChpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgaWYgKGlzRXJyb3IpIHtcbiAgICByZXR1cm4gPGRpdj57ZXJyb3J9PC9kaXY+O1xuICB9XG5cbiAgY29uc3QgdG9nZ2xlQXBwbGljYXRpb25zID0gKCkgPT4ge1xuICAgIHNldFNob3dBcHBsaWNhdGlvbnMoIXNob3dBcHBsaWNhdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXQtOFwiPllvdXIgSm9iIEFwcGxpY2F0aW9uczwvaDE+XG4gICAgICB7c2hvd0FwcGxpY2F0aW9ucyAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy00IGdhcC00XCI+XG4gICAgICAgICAge2pvYkFwcGxpY2F0aW9ucy5tYXAoKGpvYkFwcGxpY2F0aW9uOiBhbnkpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtqb2JBcHBsaWNhdGlvbi5qb2JJZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bVwiPntqb2JBcHBsaWNhdGlvbi5qb2JJZH08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIj57am9iQXBwbGljYXRpb24ucmVzdW1lfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VRdWVyeSIsImF4aW9zSW5zdGFuY2UiLCJBcGlSb3V0ZXMiLCJKb2JBcHBsaWNhdGlvbiIsImVycm9yIiwic2V0RXJyb3IiLCJzZWxlY3RlZEpvYiIsInNldFNlbGVjdGVkSm9iIiwic2hvd0FwcGxpY2F0aW9ucyIsInNldFNob3dBcHBsaWNhdGlvbnMiLCJkYXRhIiwiam9iQXBwbGljYXRpb25zIiwiaXNMb2FkaW5nIiwiaXNFcnJvciIsImp3dFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInJlc3BvbnNlIiwiZ2V0IiwiQ0FORElEQVRFIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwibWFwIiwiam9iQXBwbGljYXRpb24iLCJqb2JJZCIsInJlc3VtZSIsIkVycm9yIiwiZGl2IiwidG9nZ2xlQXBwbGljYXRpb25zIiwiaDEiLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/Candidate/jobApplication.tsx\n"));

/***/ })

});