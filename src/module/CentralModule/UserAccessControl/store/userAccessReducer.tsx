import { createSlice } from "@reduxjs/toolkit";
import { getAllTemplateMiddleWare, getAllUserAccessMiddleware, getBloodGroupsMiddleWare, getDepartmentsMiddleWare, getDesignationMiddleWare, getGenderOptionsMiddleware, getReportingToDMiddleWare, getUserAccessByIDMiddleware } from "./userAccessMiddleware";
import { InitialState } from "./userAccess.Type";

const initialState: InitialState = {
  isLoading: false,
  error: "",
  userAccess: [],
  templateDropDown: [],
  departments: [],
  designations: [],
  reportData: [],
  userDetails: {},
  bloodGroupsData:[],
  genderOptions:[],
};

const userAccessReducer = createSlice({
  name: "userAccess",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUserAccessMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllUserAccessMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userAccess = action.payload?.data;
    });
    builder.addCase(getAllUserAccessMiddleware.rejected, (state) => {
      state.isLoading = false;
      state.userAccess = [];
    });
    // getAllTemplateMiddleWare
    builder.addCase(getAllTemplateMiddleWare.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllTemplateMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.templateDropDown = action.payload?.data;
    });
    builder.addCase(getAllTemplateMiddleWare.rejected, (state) => {
      state.isLoading = false;
    });
    // getUserAccessByIDMiddleware
    builder.addCase(getUserAccessByIDMiddleware.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUserAccessByIDMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.userDetails = action.payload?.data
    });
    builder.addCase(getUserAccessByIDMiddleware.rejected, (state) => {
      state.isLoading = false;
      state.userDetails = {};
    });
    // getDepartmentsMiddleWare
    builder.addCase(getDepartmentsMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getDepartmentsMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.departments = action.payload?.data;
    });
    builder.addCase(getDepartmentsMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      state.departments = []
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // getDesignationMiddleWare
    builder.addCase(getDesignationMiddleWare.pending, (state) => {
      // state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getDesignationMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.designations = action.payload?.data;
    });
    builder.addCase(getDesignationMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      state.designations = []
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // getBloodGroupsMiddleWare
    builder.addCase(getBloodGroupsMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getBloodGroupsMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bloodGroupsData = action.payload?.data;
    });
    builder.addCase(getBloodGroupsMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      state.designations = []
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // getReportingToDMiddleWare
    builder.addCase(getReportingToDMiddleWare.pending, (state) => {
      // state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getReportingToDMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reportData = action.payload?.data;
    });
    builder.addCase(getReportingToDMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      state.reportData = []
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    // getGenderOptionsMiddleware
    builder.addCase(getGenderOptionsMiddleware.pending, (state) => {
      // state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getGenderOptionsMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.genderOptions = action.payload?.data;
    });
    builder.addCase(getGenderOptionsMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      state.genderOptions = []
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const userAccessReducers = userAccessReducer.reducer;
