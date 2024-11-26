import { createSlice } from "@reduxjs/toolkit";
import { templatesType } from "./templates.Type";
import { addDetailTemplateMiddleware, deleteTemplateListMiddleWare, detailViewTemplateMiddleware, getListAccessMiddleWare,getListOfUsersAccessMiddleWare,patchTemplateCardMiddleWare, postTemplateCardMiddleWare } from "./templatesMiddleware";


const templatesInitialState: templatesType = {
    isLoading: false,
    error: "",
    getTemplateList:[],
    postBranch:[],
    Branch:[],
    postTemplate:[],
    patchTemplate:[],
    deleteTemplate:[],
    detailTemplatedata:[],
    adddetailTemplateData:[],
    listOfUsersAccess:[]
};

const TemplatesReducer = createSlice({
    name: "Templates",
    initialState: templatesInitialState,
    reducers: {},
    extraReducers: (builder) => {

        //get all Templates 

        builder.addCase(getListAccessMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getListAccessMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getTemplateList = action.payload;
        });
        builder.addCase(getListAccessMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        //get All branch types

        // builder.addCase(getAllBranchTypeMiddleWare.pending, (state) => {
        //     state.isLoading = true;
        //     state.error = "";
        // });
        // builder.addCase(getAllBranchTypeMiddleWare.fulfilled, (state, action) => {
        //     state.isLoading = false;
        //     state.getBranchType = action.payload;
        // });
        // builder.addCase(getAllBranchTypeMiddleWare.rejected, (state, action) => {
        //     state.isLoading = false;
        //     if (typeof action.payload === "string") {
        //         state.error = action.payload;
        //     }
        // });

        //post company 

        builder.addCase(postTemplateCardMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(postTemplateCardMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.postTemplate = action.payload;
        });
        builder.addCase(postTemplateCardMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        builder.addCase(patchTemplateCardMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(patchTemplateCardMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.patchTemplate = action.payload;
        });
        builder.addCase(patchTemplateCardMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        builder.addCase(deleteTemplateListMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(deleteTemplateListMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.deleteTemplate = action.payload;
        });
        builder.addCase(deleteTemplateListMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


        builder.addCase(detailViewTemplateMiddleware.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(detailViewTemplateMiddleware.fulfilled, (state, action) => {
            state.isLoading = false;
            state.detailTemplatedata = action.payload;
        });
        builder.addCase(detailViewTemplateMiddleware.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        builder.addCase(addDetailTemplateMiddleware.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(addDetailTemplateMiddleware.fulfilled, (state, action) => {
            state.isLoading = false;
            state.adddetailTemplateData = action.payload;
        });
        builder.addCase(addDetailTemplateMiddleware.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
        // getListOfUsersAccessMiddleWare
        builder.addCase(getListOfUsersAccessMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getListOfUsersAccessMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listOfUsersAccess = action.payload?.data;
        });
        builder.addCase(getListOfUsersAccessMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });


    },
});

export const TemplatesReducers = TemplatesReducer.reducer;
