import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_YEAR_MASTER_DATA,
  GET_YEAR_TYPE_VIEW,
  POST_YEAR_MASTER_FORM,
} from "../../../../redux/actions";
import { getRequest, postRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const getYearMasterTableDataMiddleware = createAsyncThunk(
  GET_YEAR_MASTER_DATA,
  async ({ headers }: { headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        APIROUTES.YEAR_MASTER.GET_YAER_MASTER_DATA_API,
        { headers }
      );
      return data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errorDescription ||
        "An unexpected error occurred.";
      console.error("Error posting template card:", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const postYearMasterFormMiddleware = createAsyncThunk(
  POST_YEAR_MASTER_FORM,
  async (
    { payload, headers }: { payload: any; headers: any },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await postRequest(
        APIROUTES.YEAR_MASTER.POST_YAER_MASTER_FORM_API,
        payload,
        { headers }
      );
      return data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errorDescription ||
        "An unexpected error occurred.";
      console.error("Error posting template card:", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
export const getYearTypeMiddleware = createAsyncThunk(
  GET_YEAR_TYPE_VIEW,
  async ({ headers }: { headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.YEAR_MASTER.GET_YEAR_TYPE_API}`,
        { headers }
      );
      return data;
    } catch (error) {
      const typedError = error as Error;
      return rejectWithValue(
        typedError.message || "Failed to fetch year types"
      );
    }
  }
);
