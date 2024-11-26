import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import {
  DELETE_SMS_DATA,
  EDIT_SMS_DATA,
  GET_ALL_SMS_DATA,
  POST_SMS_DATA,
  VIEW_SMS_DATA,
} from "../../../../redux/actions";

export const GetAllTableSmsMiddleware = createAsyncThunk(
  GET_ALL_SMS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SMS.GET_TABLE_SMSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const PostSmsMiddleware = createAsyncThunk(
  POST_SMS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SMS.POST_SMSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const EditSmsMiddleware = createAsyncThunk(
  EDIT_SMS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SMS.EDIT_SMSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const ViewSmsMiddleware = createAsyncThunk(
  VIEW_SMS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SMS.VIEW_SMSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
export const DeleteSmsMiddleware = createAsyncThunk(
  DELETE_SMS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SMS.DLETE_SMSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
