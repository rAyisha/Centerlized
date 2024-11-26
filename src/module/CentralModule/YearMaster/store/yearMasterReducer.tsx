import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./yearMaster.Type";
import {
  getYearMasterTableDataMiddleware,
  getYearTypeMiddleware,
  postYearMasterFormMiddleware,
} from "./yearMasterMiddleware";

const initialState: InitialState = {
  isLoading: false,
  error: "",
  yearMasterTableData: [],
  getyearTypeData: [],
  postDatat: {},
};
const yearMasterReducer = createSlice({
  name: "yearMaster",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
      .addCase(getYearMasterTableDataMiddleware.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getYearMasterTableDataMiddleware.fulfilled, (state, action) => {
        state.isLoading = false;
        state.yearMasterTableData = action.payload?.data;
      })
      .addCase(getYearMasterTableDataMiddleware.rejected, (state) => {
        state.isLoading = false;
        state.yearMasterTableData = [];
        state.error = "Failed to fetch Year Master Table Data.";
      });

   
    builder
      .addCase(getYearTypeMiddleware.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getYearTypeMiddleware.fulfilled, (state, action) => {
        state.isLoading = false;
        state.getyearTypeData = action.payload?.data;
      })
      .addCase(getYearTypeMiddleware.rejected, (state) => {
        state.isLoading = false;
        state.getyearTypeData = [];
        state.error = "Failed to fetch Year Type Data.";
      });

   
    builder
      .addCase(postYearMasterFormMiddleware.pending, (state) => {
        state.isLoading = true;
        state.error = ""; 
      })
      .addCase(postYearMasterFormMiddleware.fulfilled, (state, action) => {
        state.isLoading = false;
        state.postDatat = action.payload;
      })
      .addCase(postYearMasterFormMiddleware.rejected, (state, action) => {
        state.isLoading = false;
        state.error =
          action.error.message || "Failed to submit Year Master Form.";
        state.postDatat = []; 
      });
  },
});

export const yearMasterReducers = yearMasterReducer.reducer;

