"use strict";
exports.id = 112;
exports.ids = [112];
exports.modules = {

/***/ 8542:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_useCreateJob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8818);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_useCreateJob__WEBPACK_IMPORTED_MODULE_2__]);
_views_useCreateJob__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CreateJob = ()=>{
    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [salary, setSalary] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const { handleSubmit  } = (0,_views_useCreateJob__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(title, description, location, salary, setTitle, setDescription, setLocation, setSalary);
    const handleFormSubmit = (event)=>{
        event.preventDefault();
        handleSubmit();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold mt-8",
                children: "Create a Job Posting"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleFormSubmit,
                className: "bg-white p-6 rounded-lg shadow-md",
                style: {
                    position: "absolute",
                    top: "160px",
                    left: "442px",
                    width: "557px",
                    height: "480px",
                    borderRadius: "20px",
                    boxShadow: "0px 30px 36px #557DA526",
                    opacity: 1
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block text-gray-700 font-bold mb-2",
                                htmlFor: "title",
                                children: "Title"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                id: "title",
                                placeholder: "Enter your title here",
                                value: title,
                                onChange: (event)=>setTitle(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block text-gray-700 font-bold mb-2",
                                htmlFor: "description",
                                children: "Description"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                id: "description",
                                placeholder: "Enter your description here",
                                value: description,
                                onChange: (event)=>setDescription(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block text-gray-700 font-bold mb-2",
                                htmlFor: "location",
                                children: "Location"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                id: "location",
                                placeholder: "Enter your location here",
                                value: location,
                                onChange: (event)=>setLocation(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block text-gray-700 font-bold mb-2",
                                htmlFor: "salary",
                                children: "Salary"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                id: "salary",
                                placeholder: "Enter your salary here",
                                value: salary,
                                onChange: (event)=>setSalary(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateJob);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8818:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _utils_axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _utils_axios__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useCreateJobView = (title, description, location, salary, setTitle, setDescription, setLocation, setSalary)=>{
    const { mutateAsync  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(async (jwtToken)=>{
        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.post */ .b.post(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].RECRUITER */ .Z.RECRUITER, {
            title,
            description,
            location,
            salary
        }, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`
            }
        });
        return response.data;
    });
    const handleSubmit = async ()=>{
        const jwtToken = localStorage.getItem("token") || "";
        try {
            await mutateAsync(jwtToken);
            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error("Job posting created successfully!");
            clearFormFields(); // Clear form fields after successful submission
        } catch (error) {
        // Handle error
        }
    };
    const clearFormFields = ()=>{
        setTitle("");
        setDescription("");
        setLocation("");
        setSalary("");
    };
    return {
        handleSubmit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCreateJobView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6112:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_Recruiter_CreateJob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8542);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Recruiter_CreateJob__WEBPACK_IMPORTED_MODULE_1__]);
_features_Recruiter_CreateJob__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const CreateJobPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Recruiter_CreateJob__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateJobPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;