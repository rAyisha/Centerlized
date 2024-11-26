import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_COMPANY, GET_ALL_LEGAL_ENTITY, GET_ALL_INDUSTRY, POST_COMPANY,GET_COMPANY_BY_ID,PATCH_COMPANY_MIDDLEWARE,DELETE_COMPANY_BY_ID } from "../../../../redux/actions";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getAllCompanyMiddleWare = createAsyncThunk(
    GET_ALL_COMPANY,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMPANY.GET_ALL_COMPANY}`
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

export const getAllLegalEntityMiddleWare = createAsyncThunk(
    GET_ALL_LEGAL_ENTITY,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMPANY.GET_ALL_LEGAL_ENTITY}`
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

export const getAllIndustryMiddleWare = createAsyncThunk(
    GET_ALL_INDUSTRY,
    async (_a, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMPANY.GET_ALL_INDUSTRY}`
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

export const postCompanyMiddleWare = createAsyncThunk(
    POST_COMPANY,
    async ({ payload }: { payload: any }, { rejectWithValue }) => {
        try {
            const { data } = await postRequest(
                `${APIROUTES.COMPANY.POST_COMPANY}`, payload
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

export const getCompanyByIdMiddleWare = createAsyncThunk(
    GET_COMPANY_BY_ID,
    async ({id}:{id:any}, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.COMPANY.GET_COMPANY_BY_ID}${id}`
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

export const patchCompanyMiddleWare = createAsyncThunk(
    PATCH_COMPANY_MIDDLEWARE,
    async ({ value,Id }: { value: any,Id:any }, { rejectWithValue }) => {
        console.log(value,Id, "test")
        try {
            const { data } = await patchRequest(
                `${APIROUTES.COMPANY.PATCH_COMPANY_MIDDLEWARE}${Id}`, value
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

export const deleteCompanyByIdMiddleWare = createAsyncThunk(
    DELETE_COMPANY_BY_ID,
    async ({id}:{id:any}, { rejectWithValue }) => {
        try {
            const { data } = await deleteRequest(
                `${APIROUTES.COMPANY.DELETE_COMPANY_BY_ID}${id}`
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