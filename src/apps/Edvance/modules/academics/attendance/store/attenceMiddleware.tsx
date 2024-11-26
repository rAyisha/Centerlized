import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALLATTENDANCE_TABLE , GET_ATTENDANCE } from "../../../../redux/actions";
import { getRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getAllAttendanceTableMiddleWare = createAsyncThunk(
    GET_ALLATTENDANCE_TABLE,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ATTENDANCE.GET_ALLATTENDANCE_TABLE}`
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

export const getAttendanceMiddleWare = createAsyncThunk(
    GET_ATTENDANCE,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.ATTENDANCE.GET_ATTENDANCE}`
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
