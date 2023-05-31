"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 7530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ApiRoutes = {
    LOGIN: "/api/v1/auth/login",
    REGISTER: "/api/v1/auth/register",
    CANDIDATE: "/api/v1/user/jobs",
    RECRUITER: "/api/v1/recruiter/jobs"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApiRoutes);


/***/ }),

/***/ 1607:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Routes = {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    RECRUITER: "/recruiter/recruiter"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);


/***/ }),

/***/ 2947:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ axiosInstance)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3590);
/* harmony import */ var _config_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1607);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_1__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, react_toastify__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: "http://localhost:5005",
    timeout: 30000
});
const getGenericErrorMessage = (e)=>{
    const text = e.response?.data?.errors ? Object.values(e.response?.data?.errors)[0] : e.response?.data?.message || "Something went wrong!";
    toast.error(text);
};
axiosInstance.interceptors.request.use((request)=>{
    const storedToken = window.localStorage.getItem("accessToken");
    const signature = window.localStorage.getItem("signature");
    const params = new URLSearchParams(window.location.search);
    request.headers["x-device-client"] = "agent-partner-panel";
    request.headers["x-platform-app"] = "web";
    if (storedToken || params.get("auth")) {
        request.headers.Authorization = !params.get("auth") ? `Bearer ${storedToken}` : `Bearer ${params.get("auth")}`;
    }
    if (signature) {
        request.headers["x-device-hash"] = signature;
    }
    return request;
});
axiosInstance.interceptors.response.use((res)=>{
    return res;
}, (error)=>{
    const isLoginPage = window.location.pathname.includes(_config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].LOGIN */ .Z.LOGIN);
    const isRegisterPage = window.location.pathname.includes(_config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].REGISTER */ .Z.REGISTER);
    const isRecruiterPage = window.location.pathname.includes(_config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].RECRUITER */ .Z.RECRUITER);
    if (isRegisterPage) {
        if (error?.response?.status === 422) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("some entities have failed the check");
            throw error;
        }
    }
    if (!isLoginPage) {
        console.log("not login page");
        if (error?.response?.status === 401 || error?.response?.status === 402 || error?.response?.status === 500) {
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Unauthorized Access");
            console.log("enter");
            window.localStorage.removeItem("accessToken");
            window.location.replace(_config_routes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].LOGIN */ .Z.LOGIN);
        } else if (isRecruiterPage && error?.response?.status === 404) {
            console.log("recruiter");
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("No applicants for this position");
        } else if (error?.response?.status === 404 || error?.response?.status === 422) {
            console.log("error received");
            react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Invalid inputs given");
        }
    } else if (isLoginPage && error?.response?.status === 404) {
        react_toastify__WEBPACK_IMPORTED_MODULE_1__.toast.error("Invalid credentials");
        throw error;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;