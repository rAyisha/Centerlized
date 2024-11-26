import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_HOMEWORK,GET_ALLHOMEWORK_TABLE } from "../../../../redux/actions";
import { getRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getAllHomeWorkTableMiddleWare = createAsyncThunk(
    GET_ALLHOMEWORK_TABLE,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.HOMEWORK.GET_ALLHOMEWORK_TABLE}`
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

export const getHomeWorkMiddleWare = createAsyncThunk(
    GET_HOMEWORK,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.HOMEWORK.GET_HOMEWORK}`
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
