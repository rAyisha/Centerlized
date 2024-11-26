import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_COMMON_BASE_BRANCH, GET_COMMON_BASE_COMPANY } from "../../../../redux/actions";
import { getRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getBaseBranchMiddleWare = createAsyncThunk(
    GET_COMMON_BASE_BRANCH,
    async ({ id }: any, { rejectWithValue }) => {
        try {
            const { data } = await getRequest(
                `${APIROUTES.BRANCH.GET_COMPANYID_BRANCH}`,
                {
                    headers: {
                        'company-id': id
                    }
                }
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
export const getBaseCompanyMiddleWare = createAsyncThunk(
    GET_COMMON_BASE_COMPANY,
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
