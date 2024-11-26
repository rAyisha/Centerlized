import { createSlice } from "@reduxjs/toolkit";
import { DropdownMainState, DropdownState } from "./dropdownData.Types";
import { getBaseBranchMiddleWare, getBaseCompanyMiddleWare } from "./dropdownCommonMiddleware";


const initialState: DropdownState = {
  loading: false,
  error: "",
  companyID: "1",
  branchID: "1",
  yearID: "1",
  sessionID: 26
};
const DropdownDataReducer = createSlice({
  name: "stuentDetail",
  initialState,
  reducers: {
    setCompanyID: (state, action) => {
      state.companyID = action.payload;
    },
    setBranchID: (state, action) => {
      state.branchID = action.payload;
    },
    setYearID: (state, action) => {
      state.yearID = action.payload;
    },
  },

});
const mainInitialState: DropdownMainState = {
  isLoading: false,
  error: "",
  companyOptions: [],
  branchOptions: [],
  yearOptions: [],
};

const DropDownMainReducer = createSlice({
  name: "auth",
  initialState: mainInitialState,
  reducers: {},
  extraReducers: (builder) => {
    // branch options
    builder.addCase(getBaseBranchMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getBaseBranchMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.branchOptions = action.payload?.data;
    });
    builder.addCase(getBaseBranchMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      state.branchOptions = [];
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // company options
    builder.addCase(getBaseCompanyMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getBaseCompanyMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.companyOptions = action.payload?.data;
      state.branchOptions = [];
    });
    builder.addCase(getBaseCompanyMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      state.companyOptions = [];
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

  },
});

export const dropdownDataReducers = DropdownDataReducer.reducer;
export const dropdownMainReducers = DropDownMainReducer.reducer;
export const { setCompanyID, setBranchID, setYearID } = DropdownDataReducer.actions;
