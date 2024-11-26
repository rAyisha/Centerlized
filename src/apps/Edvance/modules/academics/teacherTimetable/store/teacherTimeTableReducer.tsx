import { createSlice } from "@reduxjs/toolkit";
import {  getTeacherTimeTableMiddleWare } from "./teacherTimeTableMiddleware";
import { teacherTimeTableState } from "./teacherTimeTableType";

const commonInitialState: teacherTimeTableState = {
    isLoading: false,
    error: "",
    teachertimetable:[]
};

const TeacherTimeTableReducer = createSlice({
    name: "TeacherTimeTableReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getTeacherTimeTableMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getTeacherTimeTableMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.teachertimetable = action.payload;
        });
        builder.addCase(getTeacherTimeTableMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const TeacherTimeTableReducers = TeacherTimeTableReducer.reducer;
