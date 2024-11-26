import { createSlice } from "@reduxjs/toolkit";
import { usserType } from "./userListModule.Types";
import { getUserListMiddleware } from "./userListModuleMiddleWare";

const authInitialState: usserType = {
  isLoading: false,
  error: "",
  userList: [],
  totalRecords: "",
};

const userListModuleReducer = createSlice({
  name: "SideBar",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    //getUserListMiddleware
    builder.addCase(getUserListMiddleware.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getUserListMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalRecords = action.payload?.count;
      state.userList = action.payload?.data;
    });
    builder.addCase(getUserListMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const userListModuleReducers = userListModuleReducer.reducer;
