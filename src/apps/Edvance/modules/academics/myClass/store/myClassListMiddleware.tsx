import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_STUDENTLIST , POST_STUDENTLIST , PATCH_STUDENTLIST } from "../../../../redux/actions";
import { getRequest, patchRequest, postRequest } from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getStudentListMiddleWare = createAsyncThunk(
    GET_STUDENTLIST,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.MYCLASS.GET_STUDENTLIST}`
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

export const postStudentListMiddleWare = createAsyncThunk(
    POST_STUDENTLIST,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await postRequest(
                `${EDVANCEAPI.MYCLASS.POST_STUDENTLIST}`
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

export const patchStudentListMiddleWare = createAsyncThunk(
    PATCH_STUDENTLIST,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await patchRequest(
                `${EDVANCEAPI.MYCLASS.PATCH_STUDENTLIST}`
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