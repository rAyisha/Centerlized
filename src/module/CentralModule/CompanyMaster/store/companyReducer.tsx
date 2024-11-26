import { createSlice } from "@reduxjs/toolkit";
import { deleteCompanyByIdMiddleWare, getAllCompanyMiddleWare, getAllIndustryMiddleWare, getAllLegalEntityMiddleWare, getCompanyByIdMiddleWare, patchCompanyMiddleWare, postCompanyMiddleWare } from "./companyMiddleware";
import { CompanyState } from "./company.Type";



const companyInitialState: CompanyState = {
    isLoading: false,
    error: "",
    company: [],
    legalentity: [],
    industry:[],
    postCompany:null,
    getcompanybyid:null,
    patchcompany:null,
    deletecompany:[]
};

const CompanyReducer = createSlice({
    name: "SideBar",
    initialState: companyInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCompanyMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllCompanyMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.company = action.payload;
        });
        builder.addCase(getAllCompanyMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get all legalEntity

        builder.addCase(getAllLegalEntityMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllLegalEntityMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.legalentity = action.payload;
        });
        builder.addCase(getAllLegalEntityMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get all industry

        builder.addCase(getAllIndustryMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getAllIndustryMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.industry = action.payload;
        });
        builder.addCase(getAllIndustryMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //post company 

        builder.addCase(postCompanyMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(postCompanyMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postCompany = action.payload;
        });
        builder.addCase(postCompanyMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get company by id 

        builder.addCase(getCompanyByIdMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getCompanyByIdMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getcompanybyid = action.payload;
        });
        builder.addCase(getCompanyByIdMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //patch company 

        builder.addCase(patchCompanyMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(patchCompanyMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchcompany = action.payload;
        });
        builder.addCase(patchCompanyMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //delete company by id 

        builder.addCase(deleteCompanyByIdMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(deleteCompanyByIdMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.deletecompany = action.payload;
        });
        builder.addCase(deleteCompanyByIdMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

    },
});

export const CompanyReducers = CompanyReducer.reducer;
