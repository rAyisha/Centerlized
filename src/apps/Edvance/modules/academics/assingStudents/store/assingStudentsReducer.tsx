import { createSlice } from "@reduxjs/toolkit";
import { assingTeacherState } from "./assingStudentsType";
import { DeleteAssingStudentsMiddleWare, getAllTableDataMiddleWare, patchAssingStudentsMiddleWare, postAssingStudentsMiddleWare } from "./assingStudentsMiddleware";

const commonInitialState: assingTeacherState = {
    isLoading: false,
    error: "",
    getallassingteacher: [],
    postassingteacher: [],
    patchassingteacher: [],
    deleteassingteacher:[]
};

const AssingTeacherReducer = createSlice({
    name: "AssingTeacherReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllTableDataMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllTableDataMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getallassingteacher = action.payload;
        });
        builder.addCase(getAllTableDataMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //post assing student

        builder.addCase(postAssingStudentsMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(postAssingStudentsMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postassingteacher = action.payload;
        });
        builder.addCase(postAssingStudentsMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //patch assing student

        builder.addCase(patchAssingStudentsMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(patchAssingStudentsMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchassingteacher = action.payload;
        });
        builder.addCase(patchAssingStudentsMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //delete assing student

        builder.addCase(DeleteAssingStudentsMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(DeleteAssingStudentsMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchassingteacher = action.payload;
        });
        builder.addCase(DeleteAssingStudentsMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const AssingTeacherReducers = AssingTeacherReducer.reducer;
