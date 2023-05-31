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

/***/ "./src/features/Candidate/jobSearch.tsx":
/*!**********************************************!*\
  !*** ./src/features/Candidate/jobSearch.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ JobSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/useJobSearch */ \"./src/features/Candidate/views/useJobSearch.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ApplyJob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ApplyJob */ \"./src/features/Candidate/ApplyJob.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction JobSearch() {\n    _s();\n    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [jobData, setJobData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [selectedJobId, setSelectedJobId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const { handleSubmit , handleApply , handlePreviousPage , handleNextPage  } = (0,_views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(role, currentPage, setCurrentPage, jobData, setJobData, router);\n    const closeModal = ()=>{\n        setIsModalOpen(false);\n        setSelectedJobId(\"\");\n    };\n    const openModal = (jobId)=>{\n        setSelectedJobId(jobId);\n        setIsModalOpen(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold mt-8\",\n                children: \"Search for a Job\"\n            }, void 0, false, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"block text-gray-700 font-bold mb-2\",\n                                htmlFor: \"role\",\n                                children: \"Job Role\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline\",\n                                id: \"role\",\n                                type: \"text\",\n                                placeholder: \"Enter the job role\",\n                                value: role,\n                                onChange: (event)=>setRole(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            jobData && jobData.data.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8 grid grid-cols-4 gap-2\",\n                children: jobData.data.map((job)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white shadow-md rounded-lg p-4 flex flex-col justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-800 font-bold\",\n                                        children: [\n                                            \"ID: \",\n                                            job.id\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-800 font-bold\",\n                                        children: [\n                                            \"Title: \",\n                                            job.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-800 font-bold\",\n                                        children: \"Description:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-800 font-bold\",\n                                        children: job.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-800 font-bold\",\n                                        children: [\n                                            \"Location: \",\n                                            job.location\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-gray-800 font-bold\",\n                                        children: [\n                                            \"Salary: \",\n                                            job.salary\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline\",\n                                onClick: ()=>openModal(job.id),\n                                children: \"Apply\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, job.id, true, {\n                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {\n                isOpen: isModalOpen,\n                onRequestClose: closeModal,\n                className: \"modal\",\n                overlayClassName: \"modal-overlay\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ApplyJob__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    jobId: selectedJobId,\n                    closeModal: closeModal\n                }, void 0, false, {\n                    fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                    lineNumber: 94,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                lineNumber: 88,\n                columnNumber: 11\n            }, this),\n            jobData && jobData.pagination && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline\",\n                        onClick: handlePreviousPage,\n                        disabled: currentPage === 1,\n                        children: \"Previous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline\",\n                        onClick: handleNextPage,\n                        disabled: currentPage === jobData.pagination.totalPages,\n                        children: \"Next\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                        lineNumber: 105,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n                lineNumber: 97,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pabitraghosh/Downloads/next-template/frontend/src/features/Candidate/jobSearch.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(JobSearch, \"Sk5tSNvJjtO23KzX3np7NPy3GeI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = JobSearch;\nvar _c;\n$RefreshReg$(_c, \"JobSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvQ2FuZGlkYXRlL2pvYlNlYXJjaC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUNtQjtBQUNaO0FBQ0g7QUFDSDtBQUVuQixTQUFTSyxZQUFZOztJQUNsQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFNLElBQUk7SUFDaEQsTUFBTSxDQUFDVSxhQUFhQyxlQUFlLEdBQUdYLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ1ksYUFBYUMsZUFBZSxHQUFHYiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU0sQ0FBQ2MsZUFBZUMsaUJBQWlCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1nQixTQUFTZCxzREFBU0E7SUFDeEIsTUFBTSxFQUFFZSxhQUFZLEVBQUVDLFlBQVcsRUFBQ0MsbUJBQWtCLEVBQUNDLGVBQWMsRUFBRSxHQUFHbkIsK0RBQWdCQSxDQUFDSyxNQUFLSSxhQUFZQyxnQkFBZUgsU0FBUUMsWUFBV087SUFFNUksTUFBTUssYUFBYSxJQUFNO1FBQ3ZCUixlQUFlLEtBQUs7UUFDcEJFLGlCQUFpQjtJQUNuQjtJQUVBLE1BQU1PLFlBQVksQ0FBQ0MsUUFBa0I7UUFDbkNSLGlCQUFpQlE7UUFDakJWLGVBQWUsSUFBSTtJQUNyQjtJQUdBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDRTtnQkFBS0MsVUFBVVg7Z0JBQWNRLFdBQVU7O2tDQUN0Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FDQ0osV0FBVTtnQ0FDVkssU0FBUTswQ0FDVDs7Ozs7OzBDQUdELDhEQUFDQztnQ0FDQ04sV0FBVTtnQ0FDVk8sSUFBRztnQ0FDSEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsT0FBTzdCO2dDQUNQOEIsVUFBVSxDQUFDQyxRQUFVOUIsUUFBUThCLE1BQU1DLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7O2tDQUduRCw4REFBQ0k7d0JBQ0NOLE1BQUs7d0JBQ0xSLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7OztZQUtGakIsV0FBV0EsUUFBUWdDLElBQUksQ0FBQ0MsTUFBTSxHQUFHLG1CQUNoQyw4REFBQ2pCO2dCQUFJQyxXQUFVOzBCQUNaakIsUUFBUWdDLElBQUksQ0FBQ0UsR0FBRyxDQUFDLENBQUNDLG9CQUNqQiw4REFBQ25CO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0Q7O2tEQUNDLDhEQUFDb0I7d0NBQUVuQixXQUFVOzs0Q0FBMEI7NENBQUtrQixJQUFJWCxFQUFFOzs7Ozs7O2tEQUNsRCw4REFBQ1k7d0NBQUVuQixXQUFVOzs0Q0FBMEI7NENBQVFrQixJQUFJRSxLQUFLOzs7Ozs7O2tEQUN4RCw4REFBQ0Q7d0NBQUVuQixXQUFVO2tEQUEwQjs7Ozs7O2tEQUl2Qyw4REFBQ21CO3dDQUFFbkIsV0FBVTtrREFBMkJrQixJQUFJRyxXQUFXOzs7Ozs7a0RBQ3ZELDhEQUFDRjt3Q0FBRW5CLFdBQVU7OzRDQUEwQjs0Q0FDMUJrQixJQUFJSSxRQUFROzs7Ozs7O2tEQUV6Qiw4REFBQ0g7d0NBQUVuQixXQUFVOzs0Q0FBMEI7NENBQVNrQixJQUFJSyxNQUFNOzs7Ozs7Ozs7Ozs7OzBDQUU1RCw4REFBQ1Q7Z0NBQ0NOLE1BQUs7Z0NBQ0xSLFdBQVU7Z0NBQ1Z3QixTQUFTLElBQU0zQixVQUFVcUIsSUFBSVgsRUFBRTswQ0FDaEM7Ozs7Ozs7dUJBcEJJVyxJQUFJWCxFQUFFOzs7Ozs7Ozs7OzBCQTRCZiw4REFBQzdCLG9EQUFVQTtnQkFDYitDLFFBQVF0QztnQkFDUnVDLGdCQUFnQjlCO2dCQUNoQkksV0FBVTtnQkFDVjJCLGtCQUFpQjswQkFFakIsNEVBQUNoRCxpREFBUUE7b0JBQUNtQixPQUFPVDtvQkFBZU8sWUFBWUE7Ozs7Ozs7Ozs7O1lBRTdDYixXQUFXQSxRQUFRNkMsVUFBVSxrQkFDNUIsOERBQUM3QjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNjO3dCQUNDZCxXQUFVO3dCQUNWd0IsU0FBUzlCO3dCQUNUbUMsVUFBVTVDLGdCQUFnQjtrQ0FDM0I7Ozs7OztrQ0FHRCw4REFBQzZCO3dCQUNDZCxXQUFVO3dCQUNWd0IsU0FBUzdCO3dCQUNUa0MsVUFBVTVDLGdCQUFnQkYsUUFBUTZDLFVBQVUsQ0FBQ0UsVUFBVTtrQ0FDeEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YLENBQUM7R0E3R3VCbEQ7O1FBT1BILGtEQUFTQTtRQUNnREQsMkRBQWdCQTs7O0tBUmxFSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvQ2FuZGlkYXRlL2pvYlNlYXJjaC50c3g/NTNjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZUpvYlNlYXJjaFZpZXcgZnJvbSBcIi4vdmlld3MvdXNlSm9iU2VhcmNoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xuaW1wb3J0IEFwcGx5Sm9iIGZyb20gXCIuL0FwcGx5Sm9iXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEpvYlNlYXJjaCgpIHtcbiAgY29uc3QgW3JvbGUsIHNldFJvbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtqb2JEYXRhLCBzZXRKb2JEYXRhXSA9IHVzZVN0YXRlPGFueT4obnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdID0gdXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2VsZWN0ZWRKb2JJZCwgc2V0U2VsZWN0ZWRKb2JJZF0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGhhbmRsZVN1Ym1pdCwgaGFuZGxlQXBwbHksaGFuZGxlUHJldmlvdXNQYWdlLGhhbmRsZU5leHRQYWdlIH0gPSB1c2VKb2JTZWFyY2hWaWV3KHJvbGUsY3VycmVudFBhZ2Usc2V0Q3VycmVudFBhZ2Usam9iRGF0YSxzZXRKb2JEYXRhLHJvdXRlcik7XG5cbiAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc01vZGFsT3BlbihmYWxzZSk7XG4gICAgc2V0U2VsZWN0ZWRKb2JJZChcIlwiKTtcbiAgfTtcblxuICBjb25zdCBvcGVuTW9kYWwgPSAoam9iSWQ6IHN0cmluZykgPT4ge1xuICAgIHNldFNlbGVjdGVkSm9iSWQoam9iSWQpO1xuICAgIHNldElzTW9kYWxPcGVuKHRydWUpO1xuICB9O1xuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgbXQtOFwiPlNlYXJjaCBmb3IgYSBKb2I8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwibXQtOFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgaHRtbEZvcj1cInJvbGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEpvYiBSb2xlXG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBib3JkZXIgcm91bmRlZCB3LWZ1bGwgcHktMiBweC0zIHRleHQtZ3JheS03MDAgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6c2hhZG93LW91dGxpbmVcIlxuICAgICAgICAgICAgaWQ9XCJyb2xlXCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGhlIGpvYiByb2xlXCJcbiAgICAgICAgICAgIHZhbHVlPXtyb2xlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Um9sZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgPlxuICAgICAgICAgIFN1Ym1pdFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cblxuICAgICAge2pvYkRhdGEgJiYgam9iRGF0YS5kYXRhLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZ3JpZCBncmlkLWNvbHMtNCBnYXAtMlwiPlxuICAgICAgICAgIHtqb2JEYXRhLmRhdGEubWFwKChqb2I6IGFueSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e2pvYi5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LW1kIHJvdW5kZWQtbGcgcC00IGZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZFwiPklEOiB7am9iLmlkfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZFwiPlRpdGxlOiB7am9iLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgRGVzY3JpcHRpb246IFxuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDAgZm9udC1ib2xkXCI+e2pvYi5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTgwMCBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgIExvY2F0aW9uOiB7am9iLmxvY2F0aW9ufVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktODAwIGZvbnQtYm9sZFwiPlNhbGFyeToge2pvYi5zYWxhcnl9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpzaGFkb3ctb3V0bGluZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKGpvYi5pZCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBBcHBseVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgICAgIDxSZWFjdE1vZGFsXG4gICAgICAgIGlzT3Blbj17aXNNb2RhbE9wZW59XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtjbG9zZU1vZGFsfVxuICAgICAgICBjbGFzc05hbWU9XCJtb2RhbFwiXG4gICAgICAgIG92ZXJsYXlDbGFzc05hbWU9XCJtb2RhbC1vdmVybGF5XCJcbiAgICAgID5cbiAgICAgICAgPEFwcGx5Sm9iIGpvYklkPXtzZWxlY3RlZEpvYklkfSBjbG9zZU1vZGFsPXtjbG9zZU1vZGFsfSAvPlxuICAgICAgPC9SZWFjdE1vZGFsPlxuICAgICAge2pvYkRhdGEgJiYgam9iRGF0YS5wYWdpbmF0aW9uICYmKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLWwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVByZXZpb3VzUGFnZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtjdXJyZW50UGFnZSA9PT0gMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBQcmV2aW91c1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGhvdmVyOmJnLWJsdWUtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkLXIgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnNoYWRvdy1vdXRsaW5lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRQYWdlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2N1cnJlbnRQYWdlID09PSBqb2JEYXRhLnBhZ2luYXRpb24udG90YWxQYWdlc31cbiAgICAgICAgICA+XG4gICAgICAgICAgICBOZXh0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VKb2JTZWFyY2hWaWV3IiwidXNlUm91dGVyIiwiUmVhY3RNb2RhbCIsIkFwcGx5Sm9iIiwiSm9iU2VhcmNoIiwicm9sZSIsInNldFJvbGUiLCJqb2JEYXRhIiwic2V0Sm9iRGF0YSIsImN1cnJlbnRQYWdlIiwic2V0Q3VycmVudFBhZ2UiLCJpc01vZGFsT3BlbiIsInNldElzTW9kYWxPcGVuIiwic2VsZWN0ZWRKb2JJZCIsInNldFNlbGVjdGVkSm9iSWQiLCJyb3V0ZXIiLCJoYW5kbGVTdWJtaXQiLCJoYW5kbGVBcHBseSIsImhhbmRsZVByZXZpb3VzUGFnZSIsImhhbmRsZU5leHRQYWdlIiwiY2xvc2VNb2RhbCIsIm9wZW5Nb2RhbCIsImpvYklkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwiYnV0dG9uIiwiZGF0YSIsImxlbmd0aCIsIm1hcCIsImpvYiIsInAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJzYWxhcnkiLCJvbkNsaWNrIiwiaXNPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJvdmVybGF5Q2xhc3NOYW1lIiwicGFnaW5hdGlvbiIsImRpc2FibGVkIiwidG90YWxQYWdlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/Candidate/jobSearch.tsx\n"));

/***/ })

});