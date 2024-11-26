import { createAsyncThunk } from "@reduxjs/toolkit";
import { DELETE_DYNAMIC_MASTER_DATA, GET_DYNAMIC_MASTER_ASSOCIATION_DATA, GET_DYNAMIC_MASTER_DATA, GET_MASTER_DROPDOWN, PATCH_DYNAMIC_MASTER_DATA, POST_MASTER_VALUES } from "../../../../redux/actions";
import { APIROUTES } from "../../../../routes/apiRoutes";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../../../utility/commonServices";

export const getDynamicMasterOptionsMiddleWare = createAsyncThunk(
  GET_MASTER_DROPDOWN,
  async ({ header }: any, { rejectWithValue }) => {
    console.log("headersssss", header)
    try {
      const { data } = await getRequest(
        `${APIROUTES.DYNAMICMASTER.GET_MASTER_DROPDOWN}`,
        { headers: header }
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
export const getDynamicMasterTableDataMiddleWare = createAsyncThunk(
  GET_DYNAMIC_MASTER_DATA,
  async ({ id, headers }: any, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.DYNAMICMASTER.GET_DYNAMIC_MASTER_DATA_API}${id}`,
        { headers }
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
export const getDynamicMasterAssociationMiddleWare = createAsyncThunk(
  GET_DYNAMIC_MASTER_ASSOCIATION_DATA,
  async ({ id, headers }: any, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.DYNAMICMASTER.GET_DYNAMIC_MASTER_DATA_API}${id}`,
        { headers }
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

// postMasterValueMiddleWare

export const postMasterValueMiddleWare = createAsyncThunk(
  POST_MASTER_VALUES,
  async ({ payload, header }: { payload: any; header: any }, { rejectWithValue }) => {
    console.log(header, payload, "headerpayload");

    try {
      const { data } = await postRequest(
        APIROUTES.DYNAMICMASTER.POST_MASTER_VALUES,
        payload,
        { headers: header } // Correctly passing headers
      );
      return data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.errorDescription || 'An unexpected error occurred.';
      console.error('Error posting template card:', errorMessage); // Optional: log error to console
      return rejectWithValue(errorMessage); // Return meaningful error message
    }
  }
);

//PatchDynamicMasterForm


export const patchDynamicMasterMiddleWare = createAsyncThunk(
  PATCH_DYNAMIC_MASTER_DATA,
  async ({ id, payload, header }: { id: any, payload: any; header: any; }, { rejectWithValue }) => {
    console.log(header, payload, "headerpayload");

    try {
      const { data } = await patchRequest(
        `${APIROUTES.DYNAMICMASTER.PATCH_MASTER_VALUES_API}${id}`,
        payload,
        { headers: header }
      );
      return data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'An unexpected error occurred.';
      console.error('Error posting template card:', errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

//deleteTemplatesList

export const deleteDynamicMasterMiddleWare = createAsyncThunk(
  DELETE_DYNAMIC_MASTER_DATA,
  async ({ id, headers }: { id: number, headers: any }, { rejectWithValue }) => {
    try {
      const { data } = await deleteRequest(
        `${APIROUTES.DYNAMICMASTER.DELETE_MASTER_VALUES_API}${id}`, { headers }
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
