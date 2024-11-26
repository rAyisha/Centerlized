import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import { GET_ALL_LESSONPLAN_DATA } from "../../../../redux/actions";

export const GetAllTablelessonPlanMiddleware = createAsyncThunk(
  GET_ALL_LESSONPLAN_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.LESSONPLAN.GET_TABLE_LESSONPLANAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
