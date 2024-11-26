import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import { GET_ALL_SYLLABUSMASTER_DATA } from "../../../../redux/actions";

export const GetAllTableSyllabusMasterMiddleware = createAsyncThunk(
  GET_ALL_SYLLABUSMASTER_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.SYLLABUSMASTER.GET_TABLE_SYLLABUSMASTERAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
