import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_TABLEDATA ,POST_ASSING_TEACHER,PATCH_ASSING_TEACHER,DELETE_ASSING_TEACHER } from "../../../../redux/actions";
import { getRequest, patchRequest, postRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getAllTableDataMiddleWare = createAsyncThunk(
    GET_ALL_TABLEDATA,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ASSINGTEACHER.GET_ALL_TABLEDATA}`
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

export const postAssingTeacherMiddleWare = createAsyncThunk(
    POST_ASSING_TEACHER,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await postRequest(
                `${EDVANCEAPI.ASSINGTEACHER.POST_ASSING_TEACHER}`
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

export const patchAssingTeacherMiddleWare = createAsyncThunk(
    PATCH_ASSING_TEACHER,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await patchRequest(
                `${EDVANCEAPI.ASSINGTEACHER.PATCH_ASSING_TEACHER}`
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

export const DeleteAssingTeacherMiddleWare = createAsyncThunk(
    DELETE_ASSING_TEACHER,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await patchRequest(
                `${EDVANCEAPI.ASSINGTEACHER.DELETE_ASSING_TEACHER}`
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
