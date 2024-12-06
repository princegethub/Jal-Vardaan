import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addGp, updateGp } from "../phedSlice";

const PHED_API = "http://localhost:5000/api/v1/phed";

export const phedApi = createApi({
  reducerPath: "phedApi",
  baseQuery: fetchBaseQuery({
    baseUrl: PHED_API,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
        console.warn("Token is missing. Authentication may fail.");
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Add GP Mutation
    gpAdd: builder.mutation({
      query: (inputData) => ({
        url: "/gp-add",
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(addGp(data));
        } catch (error) {
          console.error("Add GP error:", error);
        }
      },
    }),
    // Update GP Mutation
    gpUpdate: builder.mutation({
      query: ({ id, updates }) => ({
        url: `/gp-update/${id}`,
        method: "PUT",
        body: updates,
      }),
    }),
    // Fetch GP List Query
    gpListFetch: builder.query({
      query: () => ({
        url: "/gplist",
        method: "GET",
      }),
    }),
    // Delete GP Mutation
    gpDelete: builder.mutation({
      query: (id) => ({
        url: `gp-delete/${id}`,
        method: "DELETE",
      }),
    }),
    // View Single GP Details Query
    viewSingleGpDetails: builder.query({
      query: (id) => ({
        url: `gp-details/${id}`,
        method: "GET",
      }),
    }),
    // View Announcement List Query
    viewAnnouncementList: builder.query({
      query: () => ({
        url: "/announcement",
        method: "GET",
      }),
    }),
    // Create PHED Announcement Mutation
    createPhedAnnouncement: builder.mutation({
      query: (announcementData) => ({
        url: "/announcement-create",
        method: "POST",
        body: announcementData,
      }),
    }),

    // Create PHED Announcement Mutation
    createAsset: builder.mutation({
      query: (inputData) => ({
        url: "/asset",
        method: "POST",
        body: inputData,
      }),
    }),
    // Create PHED Announcement Mutation
    createInventory: builder.mutation({
      query: (inputData) => ({
        url: "/inventory",
        method: "POST",
        body: inputData,
      }),
    }),

    // View Single GP Details Query
    viewSingleGpAsset: builder.query({
      query: (id) => ({
        url: `/asset/${id}`,
        method: "GET",
      }),
    }),

    // View Single GP Details Query
    viewSingleGpInventory: builder.query({
      query: (id) => ({
        url: `/inventory/${id}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for the endpoints
export const {
  useGpAddMutation,
  useGpUpdateMutation,
  useGpListFetchQuery,
  useViewSingleGpDetailsQuery,
  useGpDeleteMutation,
  useCreatePhedAnnouncementMutation,
  useViewAnnouncementListQuery,
  useCreateAssetMutation,
  useCreateInventoryMutation,
  useViewSingleGpAssetQuery,
  useViewSingleGpInventoryQuery,
} = phedApi;
