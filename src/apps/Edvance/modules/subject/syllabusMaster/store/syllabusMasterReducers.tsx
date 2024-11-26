import { createSlice } from "@reduxjs/toolkit";
import {
  GetAllTableSyllabusMasterMiddleware,

} from "./syllabusMasterMiddleWare";
import {SyllabusMasterType } from "./syllabusMaster.Types";
const initialState:SyllabusMasterType = {
  loading: false,
  getAllTableData: [],
  error: "",

};
const SyllabusMasterSlice = createSlice({
  name: "SyllabusMaster",
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
    builder.addCase(GetAllTableSyllabusMasterMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetAllTableSyllabusMasterMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.getAllTableData = action.payload;
    });
    builder.addCase(GetAllTableSyllabusMasterMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
   
    
  },
});
export const SyllabusMasterMainReducers = SyllabusMasterSlice.reducer;
