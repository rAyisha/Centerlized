import { createSlice } from "@reduxjs/toolkit";
import { DisableStaffType } from "./disableStaff.Types";
import { getAllRolesMiddleware, getAllTeacherdisableMiddleware, getSearchStaffDirectoryMiddleware, patchEnabledisableMiddleware } from "./disableStaffMiddleWare";


const initialState: DisableStaffType = {
  loading: false,
  error: "",
  getallroles: [],
  getallteacherdisablestaff: [],
  searchData: [],
  patchEnabledisabledata: [],
};

const dissableStaffReducer = createSlice({
  name: "studentDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRolesMiddleware.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRolesMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.getallroles = action.payload;
      })
      .addCase(getAllRolesMiddleware.rejected, (state, action) => {
        state.loading = false;
        state.getallroles = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getAllTeacherdisableMiddleware.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTeacherdisableMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.getallteacherdisablestaff = action.payload;
      })
      .addCase(getAllTeacherdisableMiddleware.rejected, (state, action) => {
        state.loading = false;
        state.getallteacherdisablestaff = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });

    builder.addCase(
      getSearchStaffDirectoryMiddleware.pending,
      (state, action) => {
        state.loading = true;
        state.error = "";
      }
    );
    builder.addCase(
      getSearchStaffDirectoryMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.searchData = action.payload;
      }
    );
    builder.addCase(
      getSearchStaffDirectoryMiddleware.rejected,
      (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      }
    );

    builder
      .addCase(patchEnabledisableMiddleware.pending, (state) => {
        state.loading = true;
      })
      .addCase(patchEnabledisableMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.patchEnabledisabledata = action.payload;
      })
      .addCase(patchEnabledisableMiddleware.rejected, (state, action) => {
        state.loading = false;
        state.patchEnabledisabledata = [];
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
  },
});

export const dissableStaffMainReducer = dissableStaffReducer.reducer;
