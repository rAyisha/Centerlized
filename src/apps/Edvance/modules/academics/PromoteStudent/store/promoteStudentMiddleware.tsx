import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_PROMOTESTUDENT_TABLE  } from "../../../../redux/actions";
import { getRequest} from "../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";



export const getpromoteStudentTableMiddleWare = createAsyncThunk(
    GET_PROMOTESTUDENT_TABLE,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${EDVANCEAPI.PROMOTESTUDENTS.GET_PROMOTESTUDENT_TABLE}`
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
