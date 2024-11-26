import { createSlice } from "@reduxjs/toolkit";
import { templatesType } from "./dynamicMaster.Type";
import { getDynamicMasterTableDataMiddleWare, getDynamicMasterOptionsMiddleWare } from "./dynamicMasterMiddleware";


const templatesInitialState: templatesType = {
    isLoading: false,
    error: "",
    tableLoading:false,
    getmasterdropdown:[],
    postBranch:[],
    Branch:[],
    postTemplate:[],
    patchTemplate:[],
    deleteTemplate:[],
    detailTemplatedata:[],
    dynamicMasterTableData:[],
    masterID:null,
};

const dynamicReducer = createSlice({
    name: "Templates",
    initialState: templatesInitialState,
    reducers: {
        setMasterID: (state, action) => {
            state.masterID = action.payload;
          },
    },
    extraReducers: (builder) => {

        //get all Templates 

        builder.addCase(getDynamicMasterOptionsMiddleWare.pending, (state) => {
            state.isLoading = true;
            state.error = "";
        });
        builder.addCase(getDynamicMasterOptionsMiddleWare.fulfilled, (state, action) => {
            state.isLoading = false;
            state.getmasterdropdown = action.payload?.data;
        });
        builder.addCase(getDynamicMasterOptionsMiddleWare.rejected, (state, action) => {
            state.isLoading = false;
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });

        // getDynamicMasterTableDataMiddleWare

        builder.addCase(getDynamicMasterTableDataMiddleWare.pending, (state) => {
            state.tableLoading = true;
            state.error = "";
        });
        builder.addCase(getDynamicMasterTableDataMiddleWare.fulfilled, (state, action) => {
            state.tableLoading = false;
            state.dynamicMasterTableData = action.payload?.data;
        });
        builder.addCase(getDynamicMasterTableDataMiddleWare.rejected, (state, action) => {
            state.tableLoading = false;
            state.dynamicMasterTableData =[];
            if (typeof action.payload === "string") {
                state.error = action.payload;
            }
        });
        
    },
});

export const dynamicReducers = dynamicReducer.reducer;
export const { setMasterID} = dynamicReducer.actions;
