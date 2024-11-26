import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../../../../utility/commonServices";
import { EDVANCEAPI } from "../../../../route/edvanceApi";
import {
  DELETE_ANNOUNCEMENT_DATA,
  EDIT_ANNOUNCEMENT_DATA,
  GET_ALL_ANNOUNCEMENT_DATA,
  POST_ANNOUNCEMENT_DATA,
  VIEW_ANNOUNCEMENT_DATA,
} from "../../../../redux/actions";

export const GetAllTableAnnouncementData = createAsyncThunk(
  GET_ALL_ANNOUNCEMENT_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.ANNOUNCEMENT.GET_TABLE_ANNOUNCEMENTAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const PostAnnouncementData = createAsyncThunk(
  POST_ANNOUNCEMENT_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.ANNOUNCEMENT.POST_ANNOUNCEMENTAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const EditAnnouncementData = createAsyncThunk(
  EDIT_ANNOUNCEMENT_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.ANNOUNCEMENT.EDIT_ANNOUNCEMENTAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);

export const ViewAnnouncementData = createAsyncThunk(
  VIEW_ANNOUNCEMENT_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.ANNOUNCEMENT.VIEW_ANNOUNCEMENTAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
export const DeleteAnnouncementData = createAsyncThunk(
  DELETE_ANNOUNCEMENT_DATA,
  async (payload: any, { rejectWithValue }) => {
    try {
      const res = await getRequest(
        EDVANCEAPI.ANNOUNCEMENT.DLETE_ANNOUNCEMENTAPI
      );
      return res.data.data;
    } catch (error: any) {
      return rejectWithValue(error?.response?.data?.error?.message);
    }
  }
);
