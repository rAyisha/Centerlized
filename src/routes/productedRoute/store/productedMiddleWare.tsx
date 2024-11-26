import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_SIDEBAR, GET_SIDEBAR_ONE } from "../../../redux/actions";
import { APIROUTES } from "../../apiRoutes";
import { getRequest } from "../../../utility/commonServices";
// import { Menu } from './producted.Types';

export const getsideBarMiddleWare = createAsyncThunk(
  GET_SIDEBAR,
  async (_a, { rejectWithValue }) => {
    console.log(_a, "sde");
    try {
      const { data } = await getRequest(APIROUTES.SIDEBAR.GET_SIDEBAR);
      console.log(data, "find initial side bar data");
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getsideBarOneMiddleWare = createAsyncThunk(
  GET_SIDEBAR_ONE,
  async ({ payload }: any, { rejectWithValue }) => {
    try {
      const data = payload;
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
