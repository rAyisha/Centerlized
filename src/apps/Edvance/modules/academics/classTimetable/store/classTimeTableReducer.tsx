import { createSlice } from "@reduxjs/toolkit";
import { getClassTimeTableMiddleWare } from "./classTimeTableMiddleware";
import { classTimeTableState } from "./classTimeTableType";

const commonInitialState: classTimeTableState = {
    isLoading: false,
    error: "",
    classtimetable:[]
};

const ClassTimeTableReducer = createSlice({
    name: "ClassTimeTableReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClassTimeTableMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getClassTimeTableMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.classtimetable = action.payload;
        });
        builder.addCase(getClassTimeTableMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const ClassTimeTableReducers = ClassTimeTableReducer.reducer;
