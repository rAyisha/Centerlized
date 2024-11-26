import { createSlice } from "@reduxjs/toolkit";
import { getModuleAccessMiddleware, getSideBarListMiddleware } from "./SideBarMiddleware";
import { sideBarType } from "./sideBar.Type";

const sideBarInitialState: sideBarType = {
  isLoading: false,
  error: "",
  sideBarList: [],
  moduleAccess: {
    create: false,
    view: false,
    update: false,
    delete: false,
    import: false,
    export: false
  }
};

const sideBarReducer = createSlice({
  name: "SideBar",
  initialState: sideBarInitialState,
  reducers: {},
  extraReducers: (builder) => {
    //getUserListMiddleware
    builder.addCase(getSideBarListMiddleware.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getSideBarListMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.sideBarList = action.payload;
    });
    builder.addCase(getSideBarListMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(getModuleAccessMiddleware.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(getModuleAccessMiddleware.fulfilled, (state, action) => {
      state.isLoading = false;
      state.moduleAccess = action.payload
    })
    builder.addCase(getModuleAccessMiddleware.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
        state.moduleAccess = {
          create: false,
          view: false,
          update: false,
          delete: false,
          import: false,
          export: false
        }
      }
    })
  },
});

export const sideBarReducers = sideBarReducer.reducer;
