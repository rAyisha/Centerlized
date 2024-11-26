import { createSlice } from "@reduxjs/toolkit";
import { getBloodGroupDropdownMiddleWare, getCategoryDropdownMiddleWare, getClassDropdownMiddleWare, getDisableReasonsDropdownMiddleWare, getDisableStudentMiddleware, getGenderDropdownMiddleWare, getHouseDropdownMiddleWare, getReligionDropdownMiddleWare, getSchoolDivisionDropdownMiddleWare, getSectionDropdownMiddleWare, getStudentMiddleware } from "./studentMiddleware";
import { StudentState } from "./student.Types";
const initialState: StudentState = {
  loading: false,
  error: "",
  showInactiveStudents: false,
  classDropdownData: [],
  sectionDropdownData: [],
  schoolDivisionDropdownData: [],
  genderDropdownData: [],
  religionDropdownData: [],
  categoryDropdownData: [],
  houseDropdownData: [],
  bloodGroupDropdownData: [],
  disableReasonsData: [],
  studentData: {
    studentList: [],
    pagination: {
      total: 0,
      page: 0,
      limit: 0,
      totalPages: 0
    }
  },
  page: 0,
  limit: 5
};

const studentSlice = createSlice({
  name: "studentDetails",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload
    },
    setLimit: (state, action) => {
      state.limit = action.payload
    },
    toggleInactiveStudent: (state) => {
      state.showInactiveStudents = !state.showInactiveStudents
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getClassDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getClassDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.classDropdownData = action.payload;
      })
      .addCase(getClassDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });

    builder
      .addCase(getSectionDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSectionDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.sectionDropdownData = action.payload;
      })
      .addCase(getSectionDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getSchoolDivisionDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSchoolDivisionDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.schoolDivisionDropdownData = action.payload;
      })
      .addCase(getSchoolDivisionDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getGenderDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGenderDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.genderDropdownData = action.payload;
      })
      .addCase(getGenderDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getReligionDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getReligionDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.religionDropdownData = action.payload;
      })
      .addCase(getReligionDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getCategoryDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDropdownData = action.payload;
      })
      .addCase(getCategoryDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getHouseDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getHouseDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.houseDropdownData = action.payload;
      })
      .addCase(getHouseDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getBloodGroupDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBloodGroupDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.bloodGroupDropdownData = action.payload;
      })
      .addCase(getBloodGroupDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getDisableReasonsDropdownMiddleWare.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDisableReasonsDropdownMiddleWare.fulfilled, (state, action) => {
        state.loading = false;
        state.disableReasonsData = action.payload;
      })
      .addCase(getDisableReasonsDropdownMiddleWare.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getStudentMiddleware.pending, (state) => {
        state.loading = true;
      })
      .addCase(getStudentMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.studentData = action.payload;
      })
      .addCase(getStudentMiddleware.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
    builder
      .addCase(getDisableStudentMiddleware.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDisableStudentMiddleware.fulfilled, (state, action) => {
        state.loading = false;
        state.studentData = action.payload;
      })
      .addCase(getDisableStudentMiddleware.rejected, (state, action) => {
        state.loading = false;
        state.error = typeof action.payload === "string" ? action.payload : "";
      });
  },
});

export const { setPage, setLimit, toggleInactiveStudent } = studentSlice.actions;
export const studentReducers = studentSlice.reducer;
