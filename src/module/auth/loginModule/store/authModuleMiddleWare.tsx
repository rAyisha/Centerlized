import { createAsyncThunk } from "@reduxjs/toolkit";
import { POST_LOGIN, POST_SIGNUP } from "../../../../redux/actions";
import { postRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

export const postSignUpMiddleware = createAsyncThunk(
  POST_SIGNUP,
  async ({ payload }: { payload: any }, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(
        `${APIROUTES.AUTH.POST_SIGNUP_API}`,
        payload
      );
      console.log(data, "find signup api");
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
export const postLoginMiddleware = createAsyncThunk(
  POST_LOGIN,
  async ({ payload }: { payload: any }, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(
        `${APIROUTES.AUTH.POST_LOGIN_API}`,
        payload
      );
      console.log(data, "find login api");
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
export const postBranchMiddleware = createAsyncThunk(
  POST_LOGIN,
  async ({ payload }: { payload: any }, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(
        `${APIROUTES.AUTH.POST_LOGIN_API}`,
        payload
      );
      console.log(data, "find login api");
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
