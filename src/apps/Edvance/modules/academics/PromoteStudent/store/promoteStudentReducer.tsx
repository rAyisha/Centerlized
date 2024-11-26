import { createSlice } from "@reduxjs/toolkit";
import { promoteStudentState } from "./promoteStudentType";
import { getpromoteStudentTableMiddleWare } from "./promoteStudentMiddleware";

const commonInitialState: promoteStudentState = {
    isLoading: false,
    error: "",
    promoteStudent:[]
};

const PromoteStudentsTableReducer = createSlice({
    name: "ClassTimeTableReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getpromoteStudentTableMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getpromoteStudentTableMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.promoteStudent = action.payload;
        });
        builder.addCase(getpromoteStudentTableMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const PromoteStudentsTableReducers = PromoteStudentsTableReducer.reducer;
