import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import ApiRoutes from '@/config/apiRoutes';
import { axiosInstance } from '@/utils/axios';
import JobSearch from '@/features/Candidate/jobSearch';
import ReactModal from 'react-modal';
const JobSearchPage = () => {
    ReactModal.setAppElement("#__next");

    return <JobSearch/>;
};

export default JobSearchPage;
