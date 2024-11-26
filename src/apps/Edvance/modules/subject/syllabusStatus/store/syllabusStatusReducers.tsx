import { createSlice } from "@reduxjs/toolkit";
import { GetAllTableSyllabusStatusMiddleware } from "./syllabusStatusMiddleWare";
import { SyllabusStatusType } from "./syllabusStatus.Types";
const initialState: SyllabusStatusType = {
  loading: false,
  getAllTableData: [],
  error: "",
};
const SyllabusStatusSlice = createSlice({
  name: "SyllabusStatus",
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
    builder.addCase(GetAllTableSyllabusStatusMiddleware.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(
      GetAllTableSyllabusStatusMiddleware.fulfilled,
      (state, action) => {
        state.loading = false;
        state.getAllTableData = action.payload;
      }
    );
    builder.addCase(
      GetAllTableSyllabusStatusMiddleware.rejected,
      (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      }
    );
  },
});
export const SyllabusStatusMainReducers = SyllabusStatusSlice.reducer;
