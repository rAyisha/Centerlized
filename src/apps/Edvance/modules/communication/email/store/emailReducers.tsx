import { createSlice } from "@reduxjs/toolkit";

import { EmailType } from "./email.Types";
import { DeleteEmailMiddleware, EditEmailMiddleware, GetAllTableEmailMiddleware, PostEmailMiddleware, ViewEmailMiddleware } from "./emailMiddleware";
const initialState: EmailType = {
  loading: false,
  getAllTableData: [],
  error: "",
  postData: {},
  editData:{},
  viewData:{},
  deleteData:{}
};
const EmailSlice = createSlice({
  name: "Email",
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
    builder.addCase(GetAllTableEmailMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetAllTableEmailMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.getAllTableData = action.payload;
    });
    builder.addCase(GetAllTableEmailMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(PostEmailMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(PostEmailMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    });
    builder.addCase(PostEmailMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(EditEmailMiddleware.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(EditEmailMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      });
      builder.addCase(EditEmailMiddleware.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(ViewEmailMiddleware.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(ViewEmailMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.viewData = action.payload;
      });
      builder.addCase(ViewEmailMiddleware.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(DeleteEmailMiddleware.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(DeleteEmailMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteData = action.payload;
      });
      builder.addCase(DeleteEmailMiddleware.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
    
  },
});
export const EmailMainReducers = EmailSlice.reducer;
