"use strict";
exports.id = 445;
exports.ids = [445];
exports.modules = {

/***/ 5466:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JobApplication)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _utils_axios__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _utils_axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function JobApplication() {
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedJob, setSelectedJob] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [showApplications, setShowApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // State variable to track whether to show applications
    const { data: jobApplications , isLoading , isError  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "jobApplications"
    ], async ()=>{
        const jwtToken = localStorage.getItem("token") || "";
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* .axiosInstance.get */ .b.get(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_4__/* ["default"].CANDIDATE */ .Z.CANDIDATE + "/application", {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            return response.data.map((jobApplication)=>({
                    jobId: jobApplication.jobId,
                    resume: jobApplication.resume
                }));
        } catch (error) {
            throw new Error("Failed to fetch job applications");
        }
    });
    if (isLoading) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading..."
        });
    }
    if (isError) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: error
        });
    }
    const toggleApplications = ()=>{
        setShowApplications(!showApplications);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold mt-8",
                children: "Your Job Applications"
            }),
            showApplications && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                children: jobApplications.map((jobApplication)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white shadow-md rounded-lg p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-lg font-medium",
                                children: jobApplication.jobId
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-600",
                                children: jobApplication.resume
                            })
                        ]
                    }, jobApplication.jobId))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_Candidate_jobApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5466);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Candidate_jobApplication__WEBPACK_IMPORTED_MODULE_1__]);
_features_Candidate_jobApplication__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const JobApplicationsList = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Candidate_jobApplication__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobApplicationsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;