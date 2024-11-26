import { createSlice } from "@reduxjs/toolkit";
import { StaffDirectoryState } from "./staffDirectory.Types";
import { getAllContractMiddleware, getAllMaritialStatusMiddleware, getAllRolesMiddleware, getDepartmentDropdownMiddleWare, getDesignationDropdownMiddleWare, getStaffListMiddleware, getStafftypeDropdownMiddleWare } from "./staffDirectoryMiddleware";
import { staffsData } from "../mock";

const initialState: StaffDirectoryState = {
    loading: false,
    error: "",
    staffs: staffsData,
    contracts: {},
    maritalStatus: {},
    roles: {},
    departmentdropdown:{},
    page: 0,
    limit: 5,
    stafftypedropdown:{},
    designationdropdown:{},
    staffListdata:{}
}

const staffDirectorySlice = createSlice({
    name: "staffDirectory",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
          },
          setLimit: (state, action) => {
            state.limit = action.payload
          },
          resetData: (state) => {
            state.page = 0;
            state.limit = 5;
            // state.studentData = {
            //   studentList: [],
            //   pagination: {
            //     total: 0,
            //     page: 0,
            //     limit: 0,
            //     totalPages: 0
            //   }
            // }
          },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllContractMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllContractMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.contracts = action.payload;
            })
            .addCase(getAllContractMiddleware.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            });

        builder
            .addCase(getAllMaritialStatusMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllMaritialStatusMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.maritalStatus = action.payload;
            })
            .addCase(getAllMaritialStatusMiddleware.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            });

        builder
            .addCase(getAllRolesMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllRolesMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.roles = action.payload;
            })
            .addCase(getAllRolesMiddleware.rejected, (state, action) => {
                state.loading = false;
                state.error = typeof action.payload === "string" ? action.payload : "";
            });


//DEPARTMENT DROPDOWN

builder
.addCase(getDepartmentDropdownMiddleWare.pending, (state) => {
  state.loading = true;
})
.addCase(getDepartmentDropdownMiddleWare.fulfilled, (state, action) => {
  state.loading = false;
  state.departmentdropdown = action.payload;
})
.addCase(getDepartmentDropdownMiddleWare.rejected, (state, action) => {
  state.loading = false;
  state.error = typeof action.payload === "string" ? action.payload : "";
});

//getStafftypeDropdownMiddleWare

builder
.addCase(getStafftypeDropdownMiddleWare.pending, (state) => {
  state.loading = true;
})
.addCase(getStafftypeDropdownMiddleWare.fulfilled, (state, action) => {
  state.loading = false;
  state.stafftypedropdown = action.payload;
})
.addCase(getStafftypeDropdownMiddleWare.rejected, (state, action) => {
  state.loading = false;
  state.error = typeof action.payload === "string" ? action.payload : "";
});

//getStafftypeDropdownMiddleWare

builder
.addCase(getDesignationDropdownMiddleWare.pending, (state) => {
  state.loading = true;
})
.addCase(getDesignationDropdownMiddleWare.fulfilled, (state, action) => {
  state.loading = false;
  state.designationdropdown = action.payload;
})
.addCase(getDesignationDropdownMiddleWare.rejected, (state, action) => {
  state.loading = false;
  state.error = typeof action.payload === "string" ? action.payload : "";
});


//getStaffListMiddleware

builder
.addCase(getStaffListMiddleware.pending, (state) => {
  state.loading = true;
})
.addCase(getStaffListMiddleware.fulfilled, (state, action) => {
  state.loading = false;
  state.staffListdata = action.payload;
})
.addCase(getStaffListMiddleware.rejected, (state, action) => {
  state.loading = false;
  state.error = typeof action.payload === "string" ? action.payload : "";
});


    }
})
export const { setPage, setLimit, resetData } = staffDirectorySlice.actions;
export const staffDirectoryReducer = staffDirectorySlice.reducer