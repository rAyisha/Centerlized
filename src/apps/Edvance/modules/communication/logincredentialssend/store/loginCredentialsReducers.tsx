import { createSlice } from "@reduxjs/toolkit";
import {
    DeleteloginCredentialsMiddleware ,
    EditloginCredentialsMiddleware ,
  GetAllTableloginCredentialsMiddleware ,
  PostloginCredentialsMiddleware ,
  ViewloginCredentialsMiddleware ,
} from "./loginCredentialsMiddleWare";
import { loginCredentials } from "./loginCredentials.Types";
const initialState: loginCredentials = {
  loading: false,
  getAllTableData: [],
  error: "",
  postData: {},
  editData:{},
  viewData:{},
  deleteData:{}
};
const loginCredentialsSlice = createSlice({
  name: "loginCredentials",
  initialState,
  reducers: {
    // setPage: (state, action) => {
    //     state.page = action.payload
    // },
    // setLimit: (state, action) => {
    //     state.limit = action.payload
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllTableloginCredentialsMiddleware .pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetAllTableloginCredentialsMiddleware .fulfilled, (state, action) => {
      state.loading = false;
      state.getAllTableData = action.payload;
    });
    builder.addCase(GetAllTableloginCredentialsMiddleware .rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(PostloginCredentialsMiddleware .pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(PostloginCredentialsMiddleware .fulfilled, (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    });
    builder.addCase(PostloginCredentialsMiddleware .rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(EditloginCredentialsMiddleware .pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(EditloginCredentialsMiddleware .fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      });
      builder.addCase(EditloginCredentialsMiddleware .rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(ViewloginCredentialsMiddleware .pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(ViewloginCredentialsMiddleware .fulfilled, (state, action) => {
        state.loading = false;
        state.viewData = action.payload;
      });
      builder.addCase(ViewloginCredentialsMiddleware .rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(DeleteloginCredentialsMiddleware .pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(DeleteloginCredentialsMiddleware .fulfilled, (state, action) => {
        state.loading = false;
        state.deleteData = action.payload;
      });
      builder.addCase(DeleteloginCredentialsMiddleware .rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
    
  },
});
export const loginCredentialsMainReducers = loginCredentialsSlice.reducer;
