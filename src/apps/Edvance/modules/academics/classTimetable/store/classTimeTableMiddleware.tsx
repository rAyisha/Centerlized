import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_CLASS_TIMETABLE  } from "../../../../redux/actions";
import { getRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getClassTimeTableMiddleWare = createAsyncThunk(
    GET_CLASS_TIMETABLE,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.CLASSTIMETABLE.GET_CLASS_TIMETABLE}`
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
