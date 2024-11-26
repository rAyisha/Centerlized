import { createAsyncThunk } from "@reduxjs/toolkit";
import {  patchRequest, postRequest } from "../../../../utility/commonServices";
import { GET_ALL_CONTRACT, GET_ALL_MARITIAL_STATUS, GET_ALL_ROLES, GET_ALL_TEACHER_DISABLE_STAFF, GET_DEPARTMENT_DROPDOWN, GET_DESIGNATION_DROPDOWN, GET_EDIT_STAFF_DIRECTORY, GET_STAFF_DROPDOWN, GET_STAFF_LIST, GET_TEACHER_BY_ID, PATCH_ENABLE_DISABLE_TEACHER, PATCH_UPDATE_STAFF_BY_ID, POST_TEACHER } from "../../../../redux/actions";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import { GET_DEPARTMENT } from "../../../../../../redux/actions";
import { getRequest } from "../../../../../../utility/commonServices";

interface OptionsType {
  headers?: any;
  params?: any;
}

export const getAllContractMiddleware = createAsyncThunk(
  GET_ALL_CONTRACT,
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_ALL_CONTRACT);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAllMaritialStatusMiddleware = createAsyncThunk(
  GET_ALL_MARITIAL_STATUS,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_ALL_MARITIAL_STATUS);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAllRolesMiddleware = createAsyncThunk(
  GET_ALL_ROLES,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_ALL_ROLES);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getTeacherByIdMiddleware = createAsyncThunk(
  GET_TEACHER_BY_ID,
  async (payload: any, { rejectWithValue }) => {
    try {
      const ID = payload.payload
      const { data } = await getRequest(`${EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_TEACHER_BY_ID}${ID}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const patchUpdateStaffByIdMiddleware = createAsyncThunk(
  PATCH_UPDATE_STAFF_BY_ID,
  async ({ payload, ID }: any, { rejectWithValue }) => {
    console.log(payload, ID, "datafind")
    try {
      const { data } = await patchRequest(`${EDVANCEAPI.STAFF_DIRECTORY_MODULE.PATCH_UPDATE_STAFF_BY_ID}${ID}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const postTeacherMiddleware = createAsyncThunk(
  POST_TEACHER,
  async (payload: any, { rejectWithValue }) => {
    console.log(payload, "payload")
    try {
      const { data } = await postRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.POST_TEACHER, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getEditDataStaffDirectoryMiddleware = createAsyncThunk(
  GET_EDIT_STAFF_DIRECTORY,
  async (payload: any, { rejectWithValue }) => {
    try {

      const data = payload;
      return data;
    } catch (error: any) {

      let errorMessage = 'An unknown error occurred';
      if (error.response && error.response.data && error.response.data.error && error.response.data.error.message) {
        errorMessage = error.response.data.error.message;
      } else if (error.message) {
        errorMessage = error.message;
      }
      return rejectWithValue(errorMessage);
    }
  }
);

export const patchEnabledisableMiddleware = createAsyncThunk(
  PATCH_ENABLE_DISABLE_TEACHER,
  async (id: string, { rejectWithValue }) => {
    try {
      const { data } = await patchRequest(`${EDVANCEAPI.STAFF_DIRECTORY_MODULE.PATCH_ENABLE_DISABLE_TEACHER}${id}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getAllTeacherDisableMiddleware = createAsyncThunk(
  GET_ALL_TEACHER_DISABLE_STAFF,
  async (payload: any, { rejectWithValue }) => {
    const roleid = payload?.payload?.roleid
    const status = payload?.payload?.status
    const term = payload?.payload?.term
    const rowdata = payload?.payload?.rows;
    const pageNoData = payload?.payload?.pageno;
    try {
      const { data } = await getRequest(`${EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_ALL_TEACHER_DISABLE_STAFF}pageNo=${pageNoData}&roleId=${roleid}&term=${term}&status=${status}&rows=${rowdata}`);
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

//getDepartmentDropdownMiddleWare
export const getDepartmentDropdownMiddleWare = createAsyncThunk(
  GET_DEPARTMENT_DROPDOWN,
  async ({ headers }: OptionsType, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_DEPARTMENT_DROPDOWN, { headers });
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

//getStafftypeDropdownMiddleWare
export const getStafftypeDropdownMiddleWare = createAsyncThunk(
  GET_STAFF_DROPDOWN,
  async ({ headers }: OptionsType, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_STAFF_DROPDOWN, { headers });
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
//getDesignationDropdownMiddleWare
export const getDesignationDropdownMiddleWare = createAsyncThunk(
  GET_DESIGNATION_DROPDOWN,
  async ({ headers }: OptionsType, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_DESIGNATION_DROPDOWN, { headers });
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);

export const getStaffListMiddleware = createAsyncThunk(GET_STAFF_LIST, async ({ headers, params }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(`${EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_STAFF_LIST}`, { headers }, params)
    return res.data.data
  } catch (error) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
})