import { createAsyncThunk } from "@reduxjs/toolkit";
import { ADD_DETAIL_TEMPLATE_CARD, DELETE_TEMPLATE_CARD, DETAIL_TEMPLATE_CARD, GET_LIST_ACCESS_TEMPLATES, GET_LIST_OF_USERS_ACCESS_TEMPLATES, PATCH_TEMPLATE_CARD, POST_TEMPLATE_CARD } from "../../../../redux/actions";
import { APIROUTES } from "../../../../routes/apiRoutes";
import { deleteRequest, getRequest, patchRequest, postRequest } from "../../../../utility/commonServices";

export const getListAccessMiddleWare = createAsyncThunk(
  GET_LIST_ACCESS_TEMPLATES,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.TEMPLATES.GET_LIST_ACCESS_TEMPLATES}`
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
export const getListOfUsersAccessMiddleWare = createAsyncThunk(
  GET_LIST_OF_USERS_ACCESS_TEMPLATES,
  async ({id}:{id:number|string}, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.TEMPLATES.GET_LIST_OF_USERS_ACCESS_TEMPLATES}${id}`
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

// export const getAllBranchTypeMiddleWare = createAsyncThunk(
//     GET_ALL_BRANCH_TYPE,
//   async (_a, { rejectWithValue }) => {
//     try {
//       const { data } = await getRequest(
//         `${APIROUTES.BRANCH.GET_ALL_BRANCH_TYPE}`
//       );
//       return data;
//     } catch (error: any) {
//       if (error.response?.data?.error?.message) {
//       }
//       const typedError = error as Error;
//       return rejectWithValue(typedError);
//     }
//   }
// );

// getTemplateCardMiddleWare

// postTemplateCardMiddleWare

export const postTemplateCardMiddleWare = createAsyncThunk(
  POST_TEMPLATE_CARD,
  async ({ payload, header }: { payload: any; header: any }, { rejectWithValue }) => {
    console.log(header, payload, "headerpayload");

    try {
      const { data } = await postRequest(
        APIROUTES.TEMPLATES.POST_TEMPLATE_CARD,
        payload,
        { headers: header } // Correctly passing headers
      );
      return data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.error?.message || 'An unexpected error occurred.';
      console.error('Error posting template card:', errorMessage); // Optional: log error to console
      return rejectWithValue(errorMessage); // Return meaningful error message
    }
  }
);

//PatchTemplateCard


export const patchTemplateCardMiddleWare = createAsyncThunk(
  PATCH_TEMPLATE_CARD,
  async ({ id, payload, header }: { id: any, payload: any; header: any; }, { rejectWithValue }) => {
    console.log(header, payload, "headerpayload");

    try {
      const { data } = await patchRequest(
        `${APIROUTES.TEMPLATES.PATCH_TEMPLATE_CARD}${id}`,
        payload,
        { headers: header } // Correctly passing headers
      );
      return data;
    } catch (error: any) {
      const errorMessage = error.response?.data?.error?.message || 'An unexpected error occurred.';
      console.error('Error posting template card:', errorMessage); // Optional: log error to console
      return rejectWithValue(errorMessage); // Return meaningful error message
    }
  }
);

//deleteTemplatesList

export const deleteTemplateListMiddleWare = createAsyncThunk(
  DELETE_TEMPLATE_CARD,
  async ({ id }: { id: any }, { rejectWithValue }) => {
    try {
      const { data } = await deleteRequest(
        `${APIROUTES.TEMPLATES.DELETE_TEMPLATE_CARD}${id}`
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

//IndividualDetail

export const detailViewTemplateMiddleware = createAsyncThunk(
  DETAIL_TEMPLATE_CARD,
  async ({ id }: { id: any }, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.TEMPLATES.DETAIL_TEMPLATE_CARD}${id}`
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

//addDetailTemplateMiddleWare

export const addDetailTemplateMiddleware = createAsyncThunk(
  ADD_DETAIL_TEMPLATE_CARD,
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await getRequest(
        `${APIROUTES.TEMPLATES.ADD_DETAIL_TEMPLATE_CARD}`
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

export const postAssignUsersTemplateMiddleWare = createAsyncThunk(
  POST_TEMPLATE_CARD,
  async ({ payload }: { payload: any; }, { rejectWithValue }) => {
    console.log(payload, "find headerpayload");
    try {
      const { data } = await patchRequest(
        APIROUTES.TEMPLATES.ASSIGN_TEMPLATE_USERS, payload,
      );
      return data;
    } catch (error: any) {
      // const errorMessage = error.response?.data?.error?.message || 'An unexpected error occurred.';
      // console.error('Error posting template card:', errorMessage); // Optional: log error to console
      return rejectWithValue(error); // Return meaningful error message
    }
  }
);