import { createAsyncThunk } from "@reduxjs/toolkit";
import { EDVANCEAPI } from "../../../route/edvanceApi";
import { getRequest } from "../../../../../utility/commonServices";
import { GET_DEPARTMENT_DROPDOWN, GET_DESIGNATION_DROPDOWN, GET_DISABLED_STAFFS, GET_STAFFS, GET_STAFF_TYPE_DROPDOWN } from "../../../redux/actions";

interface OptionsType {
    headers?: any;
    params?: any;
}
export const getDepartmentDropdownMiddleware = createAsyncThunk(GET_DEPARTMENT_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
    try {
        const res = await getRequest(EDVANCEAPI.STAFF_MODULE.GET_DEPARTMENT_DROPDOWN, { headers });
        return res.data.data;
    } catch (error: any) {
        return rejectWithValue(error?.response?.data?.error?.message);
    }
});
export const getDesignationDropdownMiddleware = createAsyncThunk(GET_DESIGNATION_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
    try {
        const res = await getRequest(EDVANCEAPI.STAFF_MODULE.GET_DESIGNATION_DROPDOWN, { headers });
        return res.data.data;
    } catch (error: any) {
        return rejectWithValue(error?.response?.data?.error?.message);
    }
});
export const getStaffTypeDropdownMiddleware = createAsyncThunk(GET_STAFF_TYPE_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
    try {
        const res = await getRequest(EDVANCEAPI.STAFF_MODULE.GET_STAFF_TYPE_DROPDOWN, { headers });
        return res.data.data;
    } catch (error: any) {
        return rejectWithValue(error?.response?.data?.error?.message);
    }
});
export const getStaffsMiddleware = createAsyncThunk(GET_STAFFS, async ({ headers, params }: OptionsType, { rejectWithValue }) => {
    try {
        const res = await getRequest(EDVANCEAPI.STAFF_MODULE.GET_STAFFS, { headers }, params)
        return res.data.data
    } catch (error) {
        return rejectWithValue(error?.response?.data?.error?.message);
    }
})
export const getDisabledStaffsMiddleware = createAsyncThunk(GET_DISABLED_STAFFS, async ({ headers, params }: OptionsType, { rejectWithValue }) => {
    try {
        const res = await getRequest(EDVANCEAPI.STAFF_MODULE.GET_DISABLED_STAFFS, { headers }, params)
        return res.data.data
    } catch (error) {
        return rejectWithValue(error?.response?.data?.error?.message);
    }
})