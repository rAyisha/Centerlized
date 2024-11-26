import { createSlice } from "@reduxjs/toolkit";
import { getAllHomeWorkTableMiddleWare, getHomeWorkMiddleWare } from "./homeWorkMiddleware";
import { homeWorkState } from "./homeWorkType";


const commonInitialState: homeWorkState = {
    isLoading: false,
    error: "",
    getallhomeworktable:[],
    gethomework:[]
};

const HomeWorkReducer = createSlice({
    name: "HomeWorkReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllHomeWorkTableMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllHomeWorkTableMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getallhomeworktable = action.payload;
        });
        builder.addCase(getAllHomeWorkTableMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get Attendance

        builder.addCase(getHomeWorkMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getHomeWorkMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.gethomework = action.payload;
        });
        builder.addCase(getHomeWorkMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const HomeWorkReducers = HomeWorkReducer.reducer;
