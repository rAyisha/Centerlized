import { createSlice } from "@reduxjs/toolkit";
import { assingTeacherState } from "./assingTeacherType";
import { DeleteAssingTeacherMiddleWare, getAllTableDataMiddleWare, patchAssingTeacherMiddleWare, postAssingTeacherMiddleWare } from "./assingTeacherMiddleware";

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

        //post assing teacher

        builder.addCase(postAssingTeacherMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(postAssingTeacherMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postassingteacher = action.payload;
        });
        builder.addCase(postAssingTeacherMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //patch assing teacher

        builder.addCase(patchAssingTeacherMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(patchAssingTeacherMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchassingteacher = action.payload;
        });
        builder.addCase(patchAssingTeacherMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //delete assing teacher

        builder.addCase(DeleteAssingTeacherMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(DeleteAssingTeacherMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.deleteassingteacher = action.payload;
        });
        builder.addCase(DeleteAssingTeacherMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
    },
});

export const AssingTeacherReducers = AssingTeacherReducer.reducer;
