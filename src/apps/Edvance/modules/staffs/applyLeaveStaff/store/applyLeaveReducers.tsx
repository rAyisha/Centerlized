import { createSlice } from "@reduxjs/toolkit";
import {
  getapllyleaveMiddleware,
  getleavetype,
  getOneLeave,
  getSearchapplyLeaveMiddleware,
  patchOneLeave,
  postApplyLeave,
} from "./applyLeaveMiddleware";
import { ApplyLeaveState } from "./applyLeave.Types";

const initalState: ApplyLeaveState = {
  loading: false,
  error: "",
  getallapplyleave: [],
  searchLeaveData: [],
  getoneleavedata: {},
  getleavetypedata: [],
  postapplyleave: {},
  patchoneleavedata:{}
};
const nextId = 6;
const applyLeaveReducers = createSlice({
  name: "approveLeave",
  initialState: initalState,
  reducers: {},
  extraReducers: (builder) => {
    //getallapplyleave
    builder.addCase(getapllyleaveMiddleware.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getapllyleaveMiddleware.fulfilled, (state, action) => {
      state.loading = false;
      state.getallapplyleave = action.payload;
    });
    builder.addCase(getapllyleaveMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    //search
    builder.addCase(getSearchapplyLeaveMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      getSearchapplyLeaveMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.searchLeaveData = action.payload;
      }
    );
    builder.addCase(getSearchapplyLeaveMiddleware.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    //view
    builder.addCase(getOneLeave.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getOneLeave.fulfilled, (state, action) => {
      state.loading = false;
      state.getoneleavedata = action.payload;
    });
    builder.addCase(getOneLeave.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(getleavetype.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getleavetype.fulfilled, (state, action) => {
      state.loading = false;
      state.getleavetypedata = action.payload;
    });
    builder.addCase(getleavetype.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    //postApplyLeave
    builder.addCase(postApplyLeave.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(postApplyLeave.fulfilled, (state, action) => {
      state.loading = false;
      state.postapplyleave = action.payload;
    });
    builder.addCase(postApplyLeave.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    
     //patchOneLeave
     builder.addCase(patchOneLeave.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(patchOneLeave.fulfilled, (state, action) => {
      state.loading = false;
      state.patchoneleavedata = action.payload;
    });
    builder.addCase(patchOneLeave.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    })
  },
});

export const applyLeaveMainReducers = applyLeaveReducers.reducer;
