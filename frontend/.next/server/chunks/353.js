"use strict";
exports.id = 353;
exports.ids = [353];
exports.modules = {

/***/ 9579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ApplyJob)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_useApplyJob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8190);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_useApplyJob__WEBPACK_IMPORTED_MODULE_3__]);
_views_useApplyJob__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ApplyJob({ jobId , closeModal  }) {
    const [resume, setResume] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [jobIdState, setJobIdState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // Retrieve jobId from the query parameter in the URL
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const { query  } = router;
        const jobIdParam = query.jobId;
        if (jobIdParam) {
            setJobIdState(jobIdParam);
        }
    }, [
        router.query
    ]);
    const { handleSubmit  } = (0,_views_useApplyJob__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(resume, jobId);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen py-8",
        style: {
            backgroundImage: "linear-gradient(0deg, #EDF6FF 60%, #303F60 60%)"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "text-2xl font-bold mt-8",
                    children: "Apply for a Job"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    onSubmit: handleSubmit,
                    className: "bg-white p-6 rounded-lg shadow-md",
                    style: {
                        position: "absolute",
                        top: "160px",
                        left: "442px",
                        width: "557px",
                        height: "427px",
                        borderRadius: "20px",
                        boxShadow: "0px 30px 36px #557DA526",
                        opacity: 1
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: closeModal,
                            className: "close-icon",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_4__.MdClose, {})
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block text-gray-700 font-bold mb-2",
                                children: "Submit your resume for the given job"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: "block text-gray-700 font-bold mb-2",
                                    htmlFor: "resume",
                                    children: "Resume"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                    className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                    id: "resume",
                                    placeholder: "Enter your resume here",
                                    value: resume,
                                    onChange: (event)=>setResume(event.target.value)
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
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1840:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ JobSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4874);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ApplyJob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9579);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__, _ApplyJob__WEBPACK_IMPORTED_MODULE_5__]);
([_views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__, _ApplyJob__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






function JobSearch() {
    const [role, setRole] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [jobData, setJobData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedJobId, setSelectedJobId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { handleSubmit , handleApply , handlePreviousPage , handleNextPage  } = (0,_views_useJobSearch__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(role, currentPage, setCurrentPage, jobData, setJobData, router);
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedJobId("");
    };
    const openModal = (jobId)=>{
        setSelectedJobId(jobId);
        setIsModalOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold mt-8",
                children: "Search for a Job"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                className: "block text-gray-700 font-bold mb-2",
                                htmlFor: "role",
                                children: "Job Role"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                className: "appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
                                id: "role",
                                type: "text",
                                placeholder: "Enter the job role",
                                value: role,
                                onChange: (event)=>setRole(event.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        children: "Submit"
                    })
                ]
            }),
            jobData && jobData.data.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 grid grid-cols-4 gap-2",
                children: jobData.data.map((job)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white shadow-md rounded-lg p-4 flex flex-col justify-between",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-800 font-bold",
                                        children: [
                                            "ID: ",
                                            job.id
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-800 font-bold",
                                        children: [
                                            "Title: ",
                                            job.title
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-800 font-bold",
                                        children: [
                                            "Description: ",
                                            job.description
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-800 font-bold",
                                        children: [
                                            "Location: ",
                                            job.location
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-800 font-bold",
                                        children: [
                                            "Salary: ",
                                            job.salary
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                onClick: ()=>openModal(job.id),
                                children: "Apply"
                            })
                        ]
                    }, job.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_4___default()), {
                isOpen: isModalOpen,
                onRequestClose: closeModal,
                className: "modal",
                overlayClassName: "modal-overlay",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ApplyJob__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    jobId: selectedJobId,
                    closeModal: closeModal
                })
            }),
            jobData && jobData.pagination && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-center mt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none focus:shadow-outline",
                        onClick: handlePreviousPage,
                        disabled: currentPage === 1,
                        children: "Previous"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline",
                        onClick: handleNextPage,
                        disabled: currentPage === jobData.pagination.totalPages,
                        children: "Next"
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9752);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2947);
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _utils_axios__WEBPACK_IMPORTED_MODULE_1__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__, _utils_axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useApplyJobView = (resume, jobId)=>{
    const { mutateAsync  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.useMutation)(async (jwtToken)=>{
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_1__/* .axiosInstance.post */ .b.post(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].CANDIDATE */ .Z.CANDIDATE, {
                resume,
                jobId
            }, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error("Error submitting job application");
        }
    });
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const jwtToken = localStorage.getItem("token") || "";
        console.log(jwtToken);
        try {
            await mutateAsync(jwtToken);
            alert("Job application submitted successfully!");
        } catch (error) {
            alert(error.message);
        }
    };
    return {
        handleSubmit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useApplyJobView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4874:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7530);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2947);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_3__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useJobSearchView = (role, currentPage, setCurrentPage, jobData, setJobData, router)=>{
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { mutateAsync  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (jwtToken)=>{
        setIsLoading(true);
        setError(null);
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* .axiosInstance.get */ .b.get(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].CANDIDATE */ .Z.CANDIDATE + `/?search=${role}&currentPage=${currentPage}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            return response.data;
        } catch (error) {
            throw new Error("Error fetching jobs");
        } finally{
            setIsLoading(false);
        }
    });
    const handleApply = (jobId)=>{
        router.push(`http://localhost:3000/candidate/applyJob?jobId=${jobId}`);
    };
    const handlePreviousPage = async ()=>{
        if (currentPage > 1) {
            const jwtToken = localStorage.getItem("token") || "";
            try {
                const previousPage = currentPage - 1;
                const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* .axiosInstance.get */ .b.get(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].CANDIDATE */ .Z.CANDIDATE + `/?search=${role}&currentPage=${previousPage}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                setJobData(response.data);
                setCurrentPage(previousPage);
            } catch (error) {
                alert("Error fetching jobs");
            }
        }
    };
    const handleNextPage = async ()=>{
        if (currentPage < jobData.pagination.totalPages) {
            const jwtToken = localStorage.getItem("token") || "";
            try {
                const nextPage = currentPage + 1;
                const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_3__/* .axiosInstance.get */ .b.get(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_2__/* ["default"].CANDIDATE */ .Z.CANDIDATE + `/?search=${role}&currentPage=${nextPage}`, {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${jwtToken}`
                    }
                });
                setJobData(response.data);
                setCurrentPage(nextPage);
            } catch (error) {
                alert("Error fetching jobs");
            }
        }
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const jwtToken = localStorage.getItem("token") || "";
        try {
            const jobResult = await mutateAsync(jwtToken);
            console.log(jobResult);
            setJobData(jobResult);
            setCurrentPage(1);
            alert("Here are the list of available jobs");
        } catch (error) {
            alert("Error fetching jobs");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (jobData) {}
    }, [
        jobData
    ]);
    return {
        handleSubmit,
        handleApply,
        handlePreviousPage,
        handleNextPage
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useJobSearchView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4353:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_Candidate_jobSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1840);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Candidate_jobSearch__WEBPACK_IMPORTED_MODULE_1__]);
_features_Candidate_jobSearch__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const JobSearchPage = ()=>{
    react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Candidate_jobSearch__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobSearchPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;