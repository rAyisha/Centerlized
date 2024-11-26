import { createSlice } from "@reduxjs/toolkit";
import { myClassState } from "./myClassType";
import { getStudentListMiddleWare, patchStudentListMiddleWare, postStudentListMiddleWare } from "./myClassListMiddleware";

const commonInitialState: myClassState = {
    isLoading: false,
    error: "",
    myClassList: "",
    postStudentList: "",
    patchStudentList:""
};

const MyClassListReducer = createSlice({
    name: "MyClassListReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getStudentListMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getStudentListMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.myClassList = action.payload;
        });
        builder.addCase(getStudentListMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //post studentList

        builder.addCase(postStudentListMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(postStudentListMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postStudentList = action.payload;
        });
        builder.addCase(postStudentListMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //patch studentList

        builder.addCase(patchStudentListMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(patchStudentListMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchStudentList = action.payload;
        });
        builder.addCase(patchStudentListMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const MyClassListReducers = MyClassListReducer.reducer;
