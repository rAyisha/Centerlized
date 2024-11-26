import { createSlice } from "@reduxjs/toolkit";
import {
    DeleteSmsMiddleware,
    EditSmsMiddleware,
  GetAllTableSmsMiddleware,
  PostSmsMiddleware,
  ViewSmsMiddleware,
} from "./smsMiddleWare";
import { SmsType } from "./sms.Types";
const initialState: SmsType = {
  loading: false,
  getAllTableData: [],
  error: "",
  postData: {},
  editData:{},
  viewData:{},
  deleteData:{}
};
const SmsSlice = createSlice({
  name: "Sms",
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
    builder.addCase(GetAllTableSmsMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetAllTableSmsMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.getAllTableData = action.payload;
    });
    builder.addCase(GetAllTableSmsMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(PostSmsMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(PostSmsMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    });
    builder.addCase(PostSmsMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(EditSmsMiddleware.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(EditSmsMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      });
      builder.addCase(EditSmsMiddleware.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(ViewSmsMiddleware.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(ViewSmsMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.viewData = action.payload;
      });
      builder.addCase(ViewSmsMiddleware.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(DeleteSmsMiddleware.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(DeleteSmsMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteData = action.payload;
      });
      builder.addCase(DeleteSmsMiddleware.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
    
  },
});
export const SmsMainReducers = SmsSlice.reducer;
