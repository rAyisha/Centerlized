import { createSlice } from "@reduxjs/toolkit";
import { CommonState } from "./commonType";
import { getAllYearTypeMiddleWare, getCityMiddleWare, getCountryMiddleWare, getStatesMiddleWare } from "./commonMiddleware";

const commonInitialState: CommonState = {
    isLoading: false,
    error: "",
    country: [],
    states : [],
    citys   : [], 
    yeartype :[]
};

const CommonReducer = createSlice({
    name: "CommonReducer",
    initialState: commonInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCountryMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getCountryMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.country = action.payload;
        });
        builder.addCase(getCountryMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get states by country id

        builder.addCase(getStatesMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getStatesMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.states = action.payload;
        });
        builder.addCase(getStatesMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get city by states id 

        builder.addCase(getCityMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getCityMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.citys = action.payload;
        });
        builder.addCase(getCityMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        //get all year type

        builder.addCase(getAllYearTypeMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllYearTypeMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.yeartype = action.payload;
        });
        builder.addCase(getAllYearTypeMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

    },
});

export const CommonReducers = CommonReducer.reducer;
