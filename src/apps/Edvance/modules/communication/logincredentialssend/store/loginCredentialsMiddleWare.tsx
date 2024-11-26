import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import {
  DELETE_LOGINCREDENTIALS_DATA,
  EDIT_LOGINCREDENTIALS_DATA,
  GET_ALL_LOGINCREDENTIALS_DATA,
  POST_LOGINCREDENTIALS_DATA,
  VIEW_LOGINCREDENTIALS_DATA,
} from "../../../../redux/actions";

export const GetAllTableloginCredentialsMiddleware = createAsyncThunk(
  GET_ALL_LOGINCREDENTIALS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.LOGINCREDENTIALS.GET_TABLE_LOGINCREDENTIALSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const PostloginCredentialsMiddleware = createAsyncThunk(
  POST_LOGINCREDENTIALS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.LOGINCREDENTIALS.POST_LOGINCREDENTIALSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const EditloginCredentialsMiddleware = createAsyncThunk(
  EDIT_LOGINCREDENTIALS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.LOGINCREDENTIALS.EDIT_LOGINCREDENTIALSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const ViewloginCredentialsMiddleware = createAsyncThunk(
  VIEW_LOGINCREDENTIALS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.LOGINCREDENTIALS.VIEW_LOGINCREDENTIALSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
export const DeleteloginCredentialsMiddleware = createAsyncThunk(
  DELETE_LOGINCREDENTIALS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.LOGINCREDENTIALS.DLETE_LOGINCREDENTIALSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
