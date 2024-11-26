import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLASS , GET_SECTION , GET_TEACHER , GET_SUBJECT } from "../../../redux/actions";
import { getRequest } from "../../../utility/commonServices";
import { EDVANCEAPI } from "../../../route/edvanceApi";



export const getClassMiddleWare = createAsyncThunk(
    GET_CLASS,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ACADEMICCOMMON.GET_CLASS}`
            );
            return data;
        } catch (error: any) {
            if (error.response?.data?.error?.message) {
            }
            const typedError = error as Error;
            return rejectWithValue(typedError);
        }
    }
);

export const getSectionMiddleWare = createAsyncThunk(
    GET_SECTION,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ACADEMICCOMMON.GET_SECTION}`
            );
            return data;
        } catch (error: any) {
            if (error.response?.data?.error?.message) {
            }
            const typedError = error as Error;
            return rejectWithValue(typedError);
        }
    }
);

export const getTeacherMiddleWare = createAsyncThunk(
    GET_TEACHER,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ACADEMICCOMMON.GET_TEACHER}`
            );
            return data;
        } catch (error: any) {
            if (error.response?.data?.error?.message) {
            }
            const typedError = error as Error;
            return rejectWithValue(typedError);
        }
    }
);

export const getSubjectMiddleWare = createAsyncThunk(
    GET_SUBJECT,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ACADEMICCOMMON.GET_SUBJECT}`
            );
            return data;
        } catch (error: any) {
            if (error.response?.data?.error?.message) {
            }
            const typedError = error as Error;
            return rejectWithValue(typedError);
        }
    }
);