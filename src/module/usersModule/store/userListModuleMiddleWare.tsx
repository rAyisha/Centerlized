import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_USER_LIST } from "../../../redux/actions";
import { getRequest } from "../../../utility/commonServices";

export const getUserListMiddleware = createAsyncThunk(
  GET_USER_LIST,
  async ({ params }: { params: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.USER.GET_USER_LIST_API}`,
        params
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
