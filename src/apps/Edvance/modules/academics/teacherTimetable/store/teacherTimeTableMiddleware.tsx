import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_TEACHER_TIMETABLE  } from "../../../../redux/actions";
import { getRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getTeacherTimeTableMiddleWare = createAsyncThunk(
    GET_TEACHER_TIMETABLE,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.TEACHERTIMETABLE.GET_TEACHER_TIMETABLE}`
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
