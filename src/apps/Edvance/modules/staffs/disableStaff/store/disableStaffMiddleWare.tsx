import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  GET_ALL_ROLES,
  GET_ALL_TEACHER_DISABLESTAFF,
  GETSEARCHSTAFF,
  PATCH_ENABLEDISABLE_TEACHER,
} from "../../../../redux/actions";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import { getRequest, patchRequest } from "../../../../../../utility/commonServices";

export const getSearchStaffDirectoryMiddleware = createAsyncThunk(
  GETSEARCHSTAFF,
  async (payload: any, { rejectWithValue, getState }) => {
    console.log(payload, "payload");
    const { textSearch } = payload;
    const { dissableStaffMainReducer }: any = getState();
    const { data } = dissableStaffMainReducer;

    console.log(textSearch, data, "textSearch");

    try {
      if (textSearch !== "") {
        const searchResults = data.filter(
          (item: any) =>
            item.staffName &&
            item.staffName.toLowerCase().includes(textSearch.toLowerCase())
        );
        console.log(searchResults, "searchResults");
        return searchResults;
      } else {
        return data;
      }
    } catch (error) {
      const typedError = error;
      return rejectWithValue(typedError);
    }
  }
);

export const getAllRolesMiddleware = createAsyncThunk(
  GET_ALL_ROLES,
  async (_a: undefined, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        EDVANCEAPI.STAFF_DIRECTORY_MODULE.GET_ALL_ROLES
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

interface GetAllTeacherDisablePayload {
  roleid: string;
  status: boolean;
  term: string;
  rows: number;
  pageno: number;
}

export const getAllTeacherdisableMiddleware = createAsyncThunk(
  GET_ALL_TEACHER_DISABLESTAFF,
  async (payloadData: any, { rejectWithValue }) => {
    console.log(payloadData, "==statuspayload");
    // const { roleid, status, term, rows, pageno } = payload;

    try {
      const { data } = await getRequest(
        `${EDVANCEAPI.STAFF_DISABLE_MODULE.GET_ALL_TEACHER_DISABLESTAFF}pageNo=${payloadData?.pageno}&roleId=${payloadData?.roleid}&term=${payloadData?.term}&status=${payloadData?.status}&rows=${payloadData?.rows}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const patchEnabledisableMiddleware = createAsyncThunk(
  PATCH_ENABLEDISABLE_TEACHER,
  async (id:any, { rejectWithValue }) => {
    try {
      const { data } = await patchRequest(
        `${EDVANCEAPI.STAFF_DISABLE_MODULE.PATCH_ENABLEDISABLE_TEACHER}${id}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error?.response.data.error.message);
    }
  }
);
