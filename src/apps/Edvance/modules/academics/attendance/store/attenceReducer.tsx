import { createSlice } from "@reduxjs/toolkit";
import {  getAllAttendanceTableMiddleWare, getAttendanceMiddleWare } from "./attenceMiddleware";
import { AttendanceState } from "./attenceType";

const commonInitialState: AttendanceState = {
    isLoading: false,
    error: "",
    getallattendancetable:[],
    getattendance:[]
};

const TeacherTimeTableReducer = createSlice({
    name: "TeacherTimeTableReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllAttendanceTableMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllAttendanceTableMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getallattendancetable = action.payload;
        });
        builder.addCase(getAllAttendanceTableMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get Attendance

        builder.addCase(getAttendanceMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAttendanceMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getattendance = action.payload;
        });
        builder.addCase(getAttendanceMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const TeacherTimeTableReducers = TeacherTimeTableReducer.reducer;
