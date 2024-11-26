import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import {
  GET_ALL_EMAIL_DATA,
  POST_EMAIL_DATA,
  VIEW_EMAIL_DATA,
  EDIT_EMAIL_DATA,
  DELETE_EMAIL_DATA,
} from "../../../../redux/actions";

export const GetAllTableEmailMiddleware = createAsyncThunk(
  GET_ALL_EMAIL_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.EMAIL.GET_TABLE_EMAILAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const PostEmailMiddleware = createAsyncThunk(
  POST_EMAIL_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.EMAIL.POST_EMAILAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const EditEmailMiddleware = createAsyncThunk(
  EDIT_EMAIL_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.EMAIL.EDIT_EMAILAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const ViewEmailMiddleware = createAsyncThunk(
  VIEW_EMAIL_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.EMAIL.VIEW_EMAILAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
export const DeleteEmailMiddleware = createAsyncThunk(
  DELETE_EMAIL_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.EMAIL.DLETE_EMAILAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
