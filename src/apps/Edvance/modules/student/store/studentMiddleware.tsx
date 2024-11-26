import { createAsyncThunk } from "@reduxjs/toolkit";
import { DELETE_STUDENT, GET_DISABLE_STUDENT, GET_STUDENT, GET_STUDENT_BY_ID, PATCH_ENABLE_DISABLE_STUDENT, PATCH_STUDENT, POST_STUDENT } from "../../../redux/actions";
import { EDVANCEAPI } from "../../../route/edvanceApi";
import { StudentFormData } from "./student.Types"
import { getRequest, postRequest, patchRequest, deleteRequest } from "../../../../../utility/commonServices";
import { GET_BLOOD_GROUP_DROPDOWN, GET_CATEGORY_DROPDOWN, GET_CLASS_DROPDOWN, GET_DISABLE_REASONS_DROPDOWN, GET_GENDER_DROPDOWN, GET_HOUSE_DROPDOWN, GET_RELIGION_DROPDOWN, GET_SCHOOL_DIVISION_DROPDOWN, GET_SECTION_DROPDOWN } from "../../../../../redux/actions";
import { APIROUTES } from "../../../../../routes/apiRoutes";

interface OptionsType {
  headers?: any;
  params?: any;
}

interface PostArgType<T> {
  payload: T;
  options: OptionsType;
}
interface PatchArgType<T> {
  id: string;
  payload: T;
  options: OptionsType;
}

export const getClassDropdownMiddleWare = createAsyncThunk(GET_CLASS_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_CLASS_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getSectionDropdownMiddleWare = createAsyncThunk(GET_SECTION_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_SECTION_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getSchoolDivisionDropdownMiddleWare = createAsyncThunk(GET_SCHOOL_DIVISION_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_SCHOOL_DIVISION_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getGenderDropdownMiddleWare = createAsyncThunk(GET_GENDER_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_GENDER_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getReligionDropdownMiddleWare = createAsyncThunk(GET_RELIGION_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_RELIGION_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getCategoryDropdownMiddleWare = createAsyncThunk(GET_CATEGORY_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_CATEGORY_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getHouseDropdownMiddleWare = createAsyncThunk(GET_HOUSE_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_HOUSE_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getBloodGroupDropdownMiddleWare = createAsyncThunk(GET_BLOOD_GROUP_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_BLOOD_GROUP_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getDisableReasonsDropdownMiddleWare = createAsyncThunk(GET_DISABLE_REASONS_DROPDOWN, async ({ headers }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(APIROUTES.DYNAMICMASTER.GET_DISABLE_REASONS_DROPDOWN, { headers });
    return res.data.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
});

export const getStudentMiddleware = createAsyncThunk(GET_STUDENT, async ({ headers, params }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(`${EDVANCEAPI.STUDENT_MODULE.GET_STUDENT}`, { headers }, params)
    return res.data.data
  } catch (error) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
})

export const getDisableStudentMiddleware = createAsyncThunk(GET_DISABLE_STUDENT, async ({ headers, params }: OptionsType, { rejectWithValue }) => {
  try {
    const res = await getRequest(`${EDVANCEAPI.STUDENT_MODULE.GET_DISABLE_STUDENT}`, { headers }, params)
    return res.data.data
  } catch (error) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
})

export const getStudentByIdMiddleware = createAsyncThunk(GET_STUDENT_BY_ID, async ({ headers, params, id }: OptionsType & { id: number }, { rejectWithValue }) => {
  try {
    const res = await getRequest(`${EDVANCEAPI.STUDENT_MODULE.GET_STUDENT_BY_ID}${id}`, { headers }, params)
    return res.data.data
  } catch (error) {
    return rejectWithValue(error?.response?.data?.error?.message);
  }
})

export const postStudentMiddleware = createAsyncThunk(POST_STUDENT, async (arg: PostArgType<StudentFormData>, { rejectWithValue }) => {
  try {
    const { payload, options: { headers } } = arg
    const res = await postRequest(EDVANCEAPI.STUDENT_MODULE.POST_STUDENT, payload, { headers })
    return res.data
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
})

export const patchStudentMiddleware = createAsyncThunk(PATCH_STUDENT, async (arg: PatchArgType<StudentFormData>, { rejectWithValue }) => {
  try {
    const { id, payload, options: { headers } } = arg
    const res = await patchRequest(`${EDVANCEAPI.STUDENT_MODULE.PATCH_STUDENT}${id}`, payload, { headers })
    return res.data
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
})

export const deleteStudentMiddleware = createAsyncThunk(DELETE_STUDENT, async (id:number, { rejectWithValue }) => {
  try {
    const res = await deleteRequest(`${EDVANCEAPI.STUDENT_MODULE.DELETE_STUDENT}${id}`)
    return res.data
  } catch (error) {
    return rejectWithValue(error?.response?.data);
  }
})

export const patchEnableDisableStudentMiddleware = createAsyncThunk(PATCH_ENABLE_DISABLE_STUDENT, async (arg: PatchArgType<any>, { rejectWithValue }) => {
  try {
    const { id, payload, options: { headers } } = arg
    const res = await patchRequest(`${EDVANCEAPI.STUDENT_MODULE.PATCH_ENABLE_DISABLE_STUDENT}${id}`, payload, { headers })
    return res.data
  } catch (error) {
    return rejectWithValue(error?.response?.data?.error);
  }
})
