import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_TABLEDATA ,POST_ASSING_STUDENTS,PATCH_ASSING_STUDENTS,DELETE_ASSING_STUDENTS } from "../../../../redux/actions";
import { deleteRequest, getRequest, patchRequest, postRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getAllTableDataMiddleWare = createAsyncThunk(
    GET_ALL_TABLEDATA,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ASSINGSTUDENTS.GET_ALL_TABLEDATA}`
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

export const postAssingStudentsMiddleWare = createAsyncThunk(
    POST_ASSING_STUDENTS,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await postRequest(
                `${EDVANCEAPI.ASSINGSTUDENTS.POST_ASSING_STUDENTS}`
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

export const patchAssingStudentsMiddleWare = createAsyncThunk(
    PATCH_ASSING_STUDENTS,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await patchRequest(
                `${EDVANCEAPI.ASSINGSTUDENTS.PATCH_ASSING_STUDENTS}`
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

export const DeleteAssingStudentsMiddleWare = createAsyncThunk(
    DELETE_ASSING_STUDENTS,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await deleteRequest(
                `${EDVANCEAPI.ASSINGSTUDENTS.DELETE_ASSING_STUDENTS}`
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
