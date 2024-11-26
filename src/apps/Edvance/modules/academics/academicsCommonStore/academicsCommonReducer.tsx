import { createSlice } from "@reduxjs/toolkit";
import { academicState } from "./academicsCommonType";
import { getClassMiddleWare, getSectionMiddleWare, getSubjectMiddleWare, getTeacherMiddleWare } from "./academicsCommonMiddleware";

const commonInitialState: academicState = {
    isLoading: false,
    error: "",
    getclass:[],
    getsection:[],
    getteacher:[],
    getsubject:[]
};

const AcademicCommonReducer = createSlice({
    name: "CommonReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getClassMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getClassMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getclass = action.payload;
        });
        builder.addCase(getClassMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //section

        builder.addCase(getSectionMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getSectionMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getsection = action.payload;
        });
        builder.addCase(getSectionMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //teacher

        builder.addCase(getTeacherMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getTeacherMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getteacher = action.payload;
        });
        builder.addCase(getTeacherMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        }); 

        //subject

        builder.addCase(getSubjectMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getSubjectMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getsubject = action.payload;
        });
        builder.addCase(getSubjectMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        }); 

    },
});

export const AcademicCommonReducers = AcademicCommonReducer.reducer;
