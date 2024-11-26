import { createSlice } from "@reduxjs/toolkit";
import { authType } from "./authModule.Types";
import {
  postLoginMiddleware,
  postSignUpMiddleware,
} from "./authModuleMiddleWare";
import Cookies from 'js-cookie';
import { USER_TYPE } from "../../../../utility/constant";
const userInitialState: any = {
  isLoader: false,
  data: {},
};

export const userReducer = createSlice({
  name: 'user_data',
  initialState: userInitialState,
  reducers: {
    logIn: (state, action) => {
      // localStorage.setItem("companyDetails", JSON.stringify(action.payload?.companyDetails));
      // localStorage.setItem("branchDetails", JSON.stringify(action.payload?.branchDetails))
      state.isLoading = false;
    },
    logOut: (state, action) => {
      state.isLoading = false;
      localStorage.removeItem("companyDetails");
      localStorage.removeItem("branchDetails");
      localStorage.removeItem(USER_TYPE);
      Cookies.remove("token");
      location.reload();
    },
  },
});
const authInitialState: authType = {
  isLoading: false,
  error: "",
  login: "",
};

const authModuleReducers = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    //postLoginMiddleware
    builder.addCase(postLoginMiddleware.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(postLoginMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.login = action.payload?.data;
    });
    builder.addCase(postLoginMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // postSignUpMiddleware
    builder.addCase(postSignUpMiddleware.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(postSignUpMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.login = action.payload?.data;
    });
    builder.addCase(postSignUpMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});
export const { logIn, logOut } = userReducer.actions;

export const authReducers = authModuleReducers.reducer;
export const userReducers = userReducer.reducer;
