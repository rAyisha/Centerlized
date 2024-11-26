import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIROUTES } from "../../../routes/apiRoutes";
import { GET_MODULE_ACCESS, GET_SIDEBAR_LIST } from "../../../redux/actions";
import { getRequest } from "../../../utility/commonServices";

export const getSideBarListMiddleware = createAsyncThunk(
  GET_SIDEBAR_LIST,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.SIDEBAR.GET_SIDEBAR_LIST_USER}`,
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

export const getModuleAccessMiddleware = createAsyncThunk(GET_MODULE_ACCESS, async (id: number, { rejectWithValue }) => {
  try {
    const { data } = await getRequest(`${APIROUTES.SIDEBAR.GET_MODULE_ACCESS}`, undefined, { moduleId: id })
    return data.data;
  } catch (error) {
    const typedError = error as Error;
    return rejectWithValue(typedError);
  }
})