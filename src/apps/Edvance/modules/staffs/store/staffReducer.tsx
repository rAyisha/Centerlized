import { createSlice } from "@reduxjs/toolkit";
import { StaffStateType } from "./staff.Types";
import { getDepartmentDropdownMiddleware, getDesignationDropdownMiddleware, getDisabledStaffsMiddleware, getStaffsMiddleware, getStaffTypeDropdownMiddleware } from "./staffMiddleware";

const initialState: StaffStateType = {
    loading: false,
    error: "",
    staffData: {
        staffs: [],
        pagination: {
            limit: 5,
            page: 0,
            total: 0,
            totalPages: 0
        }
    },
    disabledStaffData: {
        staffs: [],
        pagination: {
            limit: 5,
            page: 0,
            total: 0,
            totalPages: 0
        }
    },
    departmentData: [],
    designationData: [],
    staffTypeData: [],
    page: 0,
    limit: 5
}

const staffSlice = createSlice({
    name: "staffDetails",
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setLimit: (state, action) => {
            state.limit = action.payload
        },
    },
    extraReducers: buider => {
        buider
            .addCase(getDepartmentDropdownMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDepartmentDropdownMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.departmentData = action.payload;
            })
            .addCase(getDepartmentDropdownMiddleware.rejected, (state) => {
                state.loading = false;
            })
        buider
            .addCase(getDesignationDropdownMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDesignationDropdownMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.designationData = action.payload;
            })
            .addCase(getDesignationDropdownMiddleware.rejected, (state) => {
                state.loading = false;
            })
        buider
            .addCase(getStaffTypeDropdownMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getStaffTypeDropdownMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.staffTypeData = action.payload;
            })
            .addCase(getStaffTypeDropdownMiddleware.rejected, (state) => {
                state.loading = false;
            })
        buider
            .addCase(getStaffsMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getStaffsMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.staffData = action.payload;
            })
            .addCase(getStaffsMiddleware.rejected, (state) => {
                state.loading = false;
            })
        buider
            .addCase(getDisabledStaffsMiddleware.pending, (state) => {
                state.loading = true;
            })
            .addCase(getDisabledStaffsMiddleware.fulfilled, (state, action) => {
                state.loading = false;
                state.disabledStaffData = action.payload;
            })
            .addCase(getDisabledStaffsMiddleware.rejected, (state) => {
                state.loading = false;
            })
    }
});

export const { setLimit, setPage } = staffSlice.actions;
export const staffReducers = staffSlice.reducer;