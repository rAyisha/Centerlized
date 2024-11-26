import { createSlice } from "@reduxjs/toolkit";
import { branchType } from "./branch.Type";
import { deleteBranchByIdMiddleWare, getAllBranchMiddleWare, getAllBranchTypeMiddleWare, getBranchByCompanyIDMiddleWare, getBranchByIdMiddleWare, getCompanyIdBranchMiddleWare, getCurrencyMiddleWare, getTimeZoneMiddleWare, patchBranchMiddleWare, postBranchMiddleWare } from "./branchMiddleware";


const branchInitialState: branchType = {
    isLoading: false,
    error: "",
    getBranchType: [],
    getBranchByCompanyId: [],
    postBranch: {},
    Branch: [],
    IdBasedBranch: [],
    getBranchById: [],
    patchcompany: {},
    branchdelete: [],
    currency:[],
    timezone:[]
};

const BranchReducer = createSlice({
    name: "SideBar",
    initialState: branchInitialState,
    reducers: {},
    extraReducers: (builder) => {

        //get all branch 

        builder.addCase(getAllBranchMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllBranchMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.Branch = action.payload;
        });
        builder.addCase(getAllBranchMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        //getCompanyIdBranchMiddleWare

        builder.addCase(getCompanyIdBranchMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getCompanyIdBranchMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.IdBasedBranch = action.payload;
        });
        builder.addCase(getCompanyIdBranchMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get All branch types

        builder.addCase(getAllBranchTypeMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllBranchTypeMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getBranchType = action.payload;
        });
        builder.addCase(getAllBranchTypeMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //post company 

        builder.addCase(postBranchMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(postBranchMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postBranch = action.payload;
        });
        builder.addCase(postBranchMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // getBranchByCompanyIDMiddleWare
        builder.addCase(getBranchByCompanyIDMiddleWare.pending, (state) => {
            // state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getBranchByCompanyIDMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getBranchByCompanyId = action.payload?.data;
        });
        builder.addCase(getBranchByCompanyIDMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            state.getBranchByCompanyId = []
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get branch by id 

        builder.addCase(getBranchByIdMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getBranchByIdMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getBranchById = action.payload?.data;
        });
        builder.addCase(getBranchByIdMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            state.getBranchById = []
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //patch company

        builder.addCase(patchBranchMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(patchBranchMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchcompany = action.payload?.data;
        });
        builder.addCase(patchBranchMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            state.patchcompany = []
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //Delete Branch

        builder.addCase(deleteBranchByIdMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(deleteBranchByIdMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.branchdelete = action.payload?.data;
        });
        builder.addCase(deleteBranchByIdMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            state.branchdelete = []
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // get all currency

        builder.addCase(getCurrencyMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getCurrencyMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.currency = action.payload?.data;
        });
        builder.addCase(getCurrencyMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            state.currency = []
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // get all timezone

        builder.addCase(getTimeZoneMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getTimeZoneMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.timezone = action.payload?.data;
        });
        builder.addCase(getTimeZoneMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            state.timezone = []
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });



    },
});

export const BranchReducers = BranchReducer.reducer;
