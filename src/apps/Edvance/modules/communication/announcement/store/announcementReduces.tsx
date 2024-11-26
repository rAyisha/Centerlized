import { createSlice } from "@reduxjs/toolkit";
import {
    DeleteAnnouncementData,
    EditAnnouncementData,
  GetAllTableAnnouncementData,
  PostAnnouncementData,
  ViewAnnouncementData,
} from "./announcementMiddleWare";
import { AnnouncementType } from "./announcement.Types";
const initialState: AnnouncementType = {
  loading: false,
  getAllTableData: [],
  error: "",
  postData: {},
  editData:{},
  viewData:{},
  deleteData:{}
};
const AnnouncementSlice = createSlice({
  name: "Announcement",
  initialState,
  reducers: {
    // setPage: (state, action) => {
    //     state.page = action.payload
    // },
    // setLimit: (state, action) => {
    //     state.limit = action.payload
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(GetAllTableAnnouncementData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(GetAllTableAnnouncementData.fulfilled, (state, action) => {
      state.loading = false;
      state.getAllTableData = action.payload;
    });
    builder.addCase(GetAllTableAnnouncementData.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
    builder.addCase(PostAnnouncementData.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(PostAnnouncementData.fulfilled, (state, action) => {
      state.loading = false;
      state.postData = action.payload;
    });
    builder.addCase(PostAnnouncementData.rejected, (state, action) => {
      state.loading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });

    builder.addCase(EditAnnouncementData.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(EditAnnouncementData.fulfilled, (state, action) => {
        state.loading = false;
        state.editData = action.payload;
      });
      builder.addCase(EditAnnouncementData.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(ViewAnnouncementData.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(ViewAnnouncementData.fulfilled, (state, action) => {
        state.loading = false;
        state.viewData = action.payload;
      });
      builder.addCase(ViewAnnouncementData.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });


      builder.addCase(DeleteAnnouncementData.pending, (state) => {
        state.loading = true;
        state.error = "";
      });
      builder.addCase(DeleteAnnouncementData.fulfilled, (state, action) => {
        state.loading = false;
        state.deleteData = action.payload;
      });
      builder.addCase(DeleteAnnouncementData.rejected, (state, action) => {
        state.loading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      });
    
  },
});
export const AnnouncementMainReducers = AnnouncementSlice.reducer;
