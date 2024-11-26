import { createSlice } from "@reduxjs/toolkit";
import {
  GetAllTablelessonPlanMiddleware,

} from "./lessonPlanMiddleWare";
import { SmsType } from "./lessonPlan.Types";
const initialState: SmsType = {
  loading: false,
  getAllTableData: [],
  error: "",

};
const lessonPlanSlice = createSlice({
  name: "lessonPlan",
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
    builder.addCase(GetAllTablelessonPlanMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetAllTablelessonPlanMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.getAllTableData = action.payload;
    });
    builder.addCase(GetAllTablelessonPlanMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
   
    
  },
});
export const lessonPlanMainReducers = lessonPlanSlice.reducer;
