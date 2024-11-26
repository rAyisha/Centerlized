import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  DELETE_USER,
  GET_ALL_TEMPLATE,
  GET_ALL_USER_ACCESS,
  GET_BLOODGROUPS,
  GET_DEPARTMENT,
  GET_DESIGNATION,
  GET_GENDER_OPTIONS,
  GET_REPORTING_TO,
  GET_USER_ACCESS_BY_ID,
  PATCH_USER_ACCESS,
  POST_USER_ACCESS,
} from "../../../../redux/actions";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getAllUserAccessMiddleware = createAsyncThunk(
  GET_ALL_USER_ACCESS,
  async ({ headers }: { headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_ALL_USERS_BY_COMPANY_API}`, { headers }
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getUserAccessByIDMiddleware = createAsyncThunk(
  GET_USER_ACCESS_BY_ID,
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_USER_ACCESS_BY_ID_API}${id}`
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
export const getGenderOptionsMiddleware = createAsyncThunk(
  GET_GENDER_OPTIONS,
  async ({ headers }: { headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_GENDER_OPTIONS_API}`, { headers }
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const postUserAccessMiddleware = createAsyncThunk(
  POST_USER_ACCESS,
  async ({ payload, headers }: { payload: any, headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(
        `${APIROUTES.USER_ACCESS.POST_USER_ACCESS_API}`,
        payload, { headers }
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
export const editUserAccessMiddleware = createAsyncThunk(
  POST_USER_ACCESS,
  async ({ id, payload, headers }: { id: string | undefined, payload: any, headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await patchRequest(
        `${APIROUTES.USER_ACCESS.EDIT_USER_ACCESS_API}${id}`,
        payload, { headers }
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);


export const patchUserAccessMiddleware = createAsyncThunk(
  PATCH_USER_ACCESS,
  async (_, { rejectWithValue }) => {
    try {
      // const { data } = await patchRequest(
      //   `${APIROUTES.USER_ACCESS.PATCH_USERACCESS}/${id}`,
      //   payload
      // );
      // return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getAllTemplateMiddleWare = createAsyncThunk(
  GET_ALL_TEMPLATE,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_ALL_TEMPLATE_API}`
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
export const getDepartmentsMiddleWare = createAsyncThunk(
  GET_DEPARTMENT,
  async ( { headers }: { headers: any } , { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_DEPARTMENT_API}`,
          { headers }
      
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
export const getBloodGroupsMiddleWare = createAsyncThunk(
  GET_BLOODGROUPS,
  async ({ headers }: any, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_BLOOD_GROUPS_API}`, { headers },
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
export const getDesignationMiddleWare = createAsyncThunk(
  GET_DESIGNATION,
  async ({ id , headers }: { id: string ,headers:any}, { rejectWithValue }) => {
    console.log("headers",headers.headers)
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_DESIGNATION_API}`,{headers}
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
export const getReportingToDMiddleWare = createAsyncThunk(
  GET_REPORTING_TO,
  async ({ headers }: { headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER_ACCESS.GET_REPORTING_API}`, { headers },
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
export const deleteUsersMasterMiddleWare = createAsyncThunk(
  DELETE_USER,
  async ({ id }: { id: number }, { rejectWithValue }) => {
    try {
      const { data } = await deleteRequest(
        `${APIROUTES.USER_ACCESS.DELETE_USER_ACCESS_API}${id}`
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