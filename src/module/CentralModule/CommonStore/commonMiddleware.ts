import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_COUNTRY, GET_STATES, GET_CITY,GET_YEAR_TYPE } from "../../../redux/actions";
import { getRequest } from "../../../utility/commonServices";
import { APIROUTES } from "../../../routes/apiRoutes";

export const getCountryMiddleWare = createAsyncThunk(
    GET_COUNTRY,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMMON.GET_COUNTRY}`
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

export const getStatesMiddleWare = createAsyncThunk(
    GET_STATES,
    async ({ id }: { id: number }, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMMON.GET_STATES}${id}`
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

export const getCityMiddleWare = createAsyncThunk(
    GET_CITY,
    async ({ id }: { id: number }, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMMON.GET_CITY}${id}`
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

export const getAllYearTypeMiddleWare = createAsyncThunk(
    GET_YEAR_TYPE,
    async ({headers}:{headers:any}, { rejectWithValue }) => {
        console.log(headers,"headers")
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMMON.GET_YEAR_TYPE}`,{headers}
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