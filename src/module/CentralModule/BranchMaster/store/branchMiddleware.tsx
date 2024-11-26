import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_BRANCH_TYPE, POST_BRANCH, GET_ALL_BRANCH, GET_COMPANYID_BRANCH, GET_BRANCH_BY_ID, GET_BRANCHBY_ID,PATCH_BRANCH,DELETE_BRANCH_BY_ID,GET_TIMEZONE,GET_CURRENCY } from "../../../../redux/actions";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../../../utility/commonServices";
import { APIROUTES } from "../../../../routes/apiRoutes";

interface GetCompanyIdBranchArgs {
  id: number;
}
export const getAllBranchMiddleWare = createAsyncThunk(
  GET_ALL_BRANCH,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_ALL_BRANCH}`
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getCompanyIdBranchMiddleWare = createAsyncThunk(
  GET_COMPANYID_BRANCH,
  async ({ id }: GetCompanyIdBranchArgs, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_COMPANYID_BRANCH}`,
        {
          headers: {
            'company-id': id
          }
        }
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getAllBranchTypeMiddleWare = createAsyncThunk(
  GET_ALL_BRANCH_TYPE,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_ALL_BRANCH_TYPE}`
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const postBranchMiddleWare = createAsyncThunk(
  POST_BRANCH,
  async ({ payload }: { payload: any }, { rejectWithValue }) => {
    try {
      const { data } = await postRequest(
        `${APIROUTES.BRANCH.POST_BRANCH}`, payload
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);
export const getBranchByCompanyIDMiddleWare = createAsyncThunk(
  GET_BRANCH_BY_ID,
  async ({ id }: { id: string }, { rejectWithValue }) => {
    console.log("find dd midd id", id);
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_BRANCH_BY_COMPANY_ID}`,
        {
          headers: {
            'company-id': id
          }
        }
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const getBranchByIdMiddleWare = createAsyncThunk(
  GET_BRANCHBY_ID,
  async ({id}:{id:any}, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_BRANCHBY_ID}${id}`
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);

export const patchBranchMiddleWare = createAsyncThunk(
  PATCH_BRANCH,
  async ({ value,Id }: { value: any,Id:any }, { rejectWithValue }) => {
      console.log(value,Id, "test")
      try {
          const { data } = await patchRequest(
              `${APIROUTES.BRANCH.PATCH_BRANCH}${Id}`, value
          );
          return data;
      } catch (error: any) {
          if (error.response?.data?.error?.message) {
          }
          const typedError = error as Error;
          return rejectWithValue(typedError);
      }
  }
);

export const deleteBranchByIdMiddleWare = createAsyncThunk(
  DELETE_BRANCH_BY_ID,
  async ({id}:{id:any}, { rejectWithValue }) => {
      try {
          const { data } = await deleteRequest(
              `${APIROUTES.BRANCH.DELETE_BRANCH_BY_ID}${id}`
          );
          return data;
      } catch (error: any) {
          if (error.response?.data?.error?.message) {
          }
          const typedError = error as Error;
          return rejectWithValue(typedError);
      }
  }
);

export const getCurrencyMiddleWare = createAsyncThunk(
  GET_CURRENCY,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_CURRENCY}`
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);


export const getTimeZoneMiddleWare = createAsyncThunk(
  GET_TIMEZONE,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.BRANCH.GET_TIMEZONE}`
      );
      return data;
    } catch (error: any) {
      if (error.response?.data?.error?.message) {
      }
      const typedError = error as Error;
      return rejectWithValue(typedError);
    }
  }
);