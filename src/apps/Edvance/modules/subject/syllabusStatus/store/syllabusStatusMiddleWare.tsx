import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import { GET_ALL_SYLLABUSSTATUS_DATA } from "../../../../redux/actions";

export const GetAllTableSyllabusStatusMiddleware = createAsyncThunk(
  GET_ALL_SYLLABUSSTATUS_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SYLLABUSSTATUS.GET_TABLE_SYLLABUSSTATUSAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
