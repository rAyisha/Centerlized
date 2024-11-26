import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_APPLYLEAVE_DATA,
  GET_LEAVE_TYPE,
  GET_ONELEAVE_DATA,
  GETSEARCHLEAVEAPPLY,
  PATCH_ONELEAVE_DATA,
  POST_APPLY_LEAVE,
} from "../../../../redux/actions";
import {
  getRequest,
  patchRequest,
  postRequest,
} from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";

export const getapllyleaveMiddleware = createAsyncThunk(
  GET_APPLYLEAVE_DATA,
  async (payload: any, { rejectWithValue }) => {
    console.log(payload, "payload-");
    const pageno = payload?.payload?.page;
    const rows = payload?.payload?.rows;
    const term = payload?.payload?.term;
    try {
      const { data } = await getRequest(
        `${EDVANCEAPI.STAFF_APPLY_LEAVE.GET_APPLYLEAVE_DATA}?pageNo=${pageno}&rows=${rows}&term=${term}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const getSearchapplyLeaveMiddleware = createAsyncThunk(
  GETSEARCHLEAVEAPPLY,
  async (payload: any, { rejectWithValue, getState }) => {
    const { textSearch } = payload;
    const { applyleaveMainReducers }: any = getState();
    const { data } = applyleaveMainReducers;

    console.log(textSearch, data, "textSearch");

    try {
      if (textSearch !== "") {
        const searchResults = data.filter(
          (item) =>
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

      console.log(error,'find mental ayisha')
      return rejectWithValue(typedError);
    }
  }
);

//view data

export const getOneLeave = createAsyncThunk(
  GET_ONELEAVE_DATA,
  async (id: any, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${EDVANCEAPI.STAFF_APPLY_LEAVE.GET_ONELEAVE_DATA}${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const getleavetype = createAsyncThunk(
  GET_LEAVE_TYPE,
  async (_a, { rejectWithValue }) => {
    try {
      console.log("success");
      const { data } = await getRequest(
        `${EDVANCEAPI.STAFF_APPLY_LEAVE.GET_LEAVE_TYPE}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const postApplyLeave = createAsyncThunk(
  POST_APPLY_LEAVE,
  async (payload: any, { rejectWithValue }) => {
    console.log(payload?.payload, "copylesson");
    try {
      const { data } = await postRequest(
        `${EDVANCEAPI.STAFF_APPLY_LEAVE.POST_APPLY_LEAVE}`,
        payload?.payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const patchOneLeave = createAsyncThunk(
  PATCH_ONELEAVE_DATA,
  async ({ id, payload }: any, { rejectWithValue }) => {
    console.log(payload, id, "test");
    try {
      const { data } = await patchRequest(
        `${EDVANCEAPI.STAFF_APPLY_LEAVE.PATCH_ONELEAVE_DATA}${id}`,
        payload
      );
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
