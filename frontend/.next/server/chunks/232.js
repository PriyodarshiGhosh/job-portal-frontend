"use strict";
exports.id = 232;
exports.ids = [232];
exports.modules = {

/***/ 9997:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FetchApplication)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_useFetchApplication__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(882);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_views_useFetchApplication__WEBPACK_IMPORTED_MODULE_1__]);
_views_useFetchApplication__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function FetchApplication({ jobId , closeModal  }) {
    const [jobData, setJobData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const { handleSubmit  } = (0,_views_useFetchApplication__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(jobId, jobData, setJobData);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-screen py-8",
        style: {
            width: "694px",
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            opacity: 1
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: closeModal,
                    className: "close-icon",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdClose, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        className: "block text-gray-700 font-bold mb-2",
                        children: "View Appliccants"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit,
                    className: "mt-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "submit",
                        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                        children: "Fetch Applicants"
                    })
                }),
                jobData.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mt-8",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "text-xl font-bold mb-4",
                            children: "Resume of Applicants"
                        }),
                        jobData.map((job)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "bg-white shadow-md rounded-lg p-4 mb-4",
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
                                            "Resume: ",
                                            job.resume
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "text-gray-800 font-bold",
                                        children: [
                                            "UserId: ",
                                            job.userId
                                        ]
                                    })
                                ]
                            }, job.id))
                    ]
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9154:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7530);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2947);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _FetchApplication__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9997);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__, _FetchApplication__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _utils_axios__WEBPACK_IMPORTED_MODULE_5__, _FetchApplication__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const JobsList = ()=>{
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [recruiterId, setRecruiterId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [jobData, setJobData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isFetchingApplications, setIsFetchingApplications] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [selectedJobId, setSelectedJobId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleFetchApplications = (jobId)=>{
        setSelectedJobId(jobId);
        setIsModalOpen(true);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setSelectedJobId(0);
    };
    const { data: jobApplications , isLoading , isError , refetch  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([
        "jobApplications",
        recruiterId
    ], async ()=>{
        const jwtToken = localStorage.getItem("token") || "";
        const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(jwtToken);
        try {
            const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* .axiosInstance.get */ .b.get(`${_config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECRUITER */ .Z.RECRUITER}?recruiterId=${decodedToken.id}&currentPage=${currentPage}`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`
                }
            });
            console.log(response.data);
            setJobData(response.data);
            return jobData;
        } catch (error) {
            setError("Failed to fetch job applications");
            throw new Error("Failed to fetch job applications");
        }
    });
    const handlePreviousPage = async ()=>{
        if (currentPage > 1) {
            const jwtToken = localStorage.getItem("token") || "";
            const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(jwtToken);
            try {
                const previousPage = currentPage - 1;
                const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* .axiosInstance.get */ .b.get(`${_config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECRUITER */ .Z.RECRUITER}?recruiterId=${decodedToken.id}&currentPage=${previousPage}`, {
                    headers: {
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
            const decodedToken = jsonwebtoken__WEBPACK_IMPORTED_MODULE_4___default().decode(jwtToken);
            try {
                const nextPage = currentPage + 1;
                const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_5__/* .axiosInstance.get */ .b.get(`${_config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECRUITER */ .Z.RECRUITER}?recruiterId=${decodedToken.id}&currentPage=${nextPage}`, {
                    headers: {
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
    const handleSubmit = (event)=>{
        event.preventDefault();
        refetch();
    };
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl font-bold mt-8",
                children: "Your job Postings"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit,
                className: "mt-8"
            }),
            jobData && jobData.data.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
                children: jobData.data.map((jobApplication)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white border-gray-200 shadow-md rounded-lg mb-4 p-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-gray-800 font-bold",
                                            children: [
                                                "ID: ",
                                                jobApplication.id
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-gray-800 font-bold",
                                            children: [
                                                "Title: ",
                                                jobApplication.title
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-gray-800 font-bold",
                                            children: [
                                                "Description: ",
                                                jobApplication.description
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-gray-800 font-bold",
                                            children: [
                                                "Location: ",
                                                jobApplication.location
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            className: "text-gray-800 font-bold",
                                            children: [
                                                "Salary: ",
                                                jobApplication.salary
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",
                                onClick: ()=>handleFetchApplications(jobApplication.id),
                                children: "Fetch Applications"
                            })
                        ]
                    }, jobApplication.id))
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "No job applications found."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_modal__WEBPACK_IMPORTED_MODULE_6___default()), {
                isOpen: isModalOpen,
                onRequestClose: closeModal,
                className: "modal",
                overlayClassName: "modal-overlay",
                style: {
                    content: {
                        position: "absolute",
                        top: "50px",
                        left: "373px",
                        right: "350px",
                        bottom: "400px",
                        borderRadius: "8px",
                        width: "694px",
                        height: "731px",
                        overflow: "auto",
                        opacity: 1
                    },
                    overlay: {
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        zIndex: 1000
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FetchApplication__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobsList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2947);
/* harmony import */ var _config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7530);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_2__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, _utils_axios__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const useFetchApplicationView = (Id, jobData, setJobData)=>{
    const { mutateAsync  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(async (jwtToken)=>{
        const response = await _utils_axios__WEBPACK_IMPORTED_MODULE_2__/* .axiosInstance.get */ .b.get(_config_apiRoutes__WEBPACK_IMPORTED_MODULE_3__/* ["default"].RECRUITER */ .Z.RECRUITER + `/id?id=${Id}`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwtToken}`
            }
        });
        const data = response.data;
        console.log(data);
        return data;
    });
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const jwtToken = localStorage.getItem("token") || "";
        try {
            const jobResult = await mutateAsync(jwtToken);
            setJobData(jobResult);
            console.log(jobResult);
            alert("Here are the list of available applicants for your posted job");
        } catch (error) {
            alert(`No applicants for this position`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (jobData) {
            console.log(jobData);
        }
    }, [
        jobData
    ]);
    return {
        handleSubmit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFetchApplicationView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7232:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_Recruiter_FetchCreatedJobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9154);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9931);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_features_Recruiter_FetchCreatedJobs__WEBPACK_IMPORTED_MODULE_1__]);
_features_Recruiter_FetchCreatedJobs__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const JobsListPage = ()=>{
    react_modal__WEBPACK_IMPORTED_MODULE_2___default().setAppElement("#__next");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_features_Recruiter_FetchCreatedJobs__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JobsListPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;