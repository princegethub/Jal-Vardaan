import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addGp, updateGp } from "../phedSlice";

const PHED_API = "http://localhost:5000/api/v1/phed"; // Replace with your API endpoint

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
      async onQueryStarted({ id, updates }, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(updateGp({ id, updates: data }));
        } catch (error) {
          console.error("Update GP error:", error);
        }
      },
    }),

    // New GP List Fetch Mutation
    gpListFetch: builder.query({
      query: () => ({
        url: "/gplist",
        method: "GET",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          // You can add any additional dispatches here if needed, e.g., updating the Redux state
        } catch (error) {
          console.error("Fetch GP list error:", error);
        }
      },
    }),
    // New GP List Fetch Mutation
    // In phedApi.js
    viewSingleGpDetails: builder.query({
      query: (id) => ({
        url: `gp-details/${id}`,
        method: "GET",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          // Add any additional logic if needed
        } catch (error) {
          console.error("Fetch GP Details list error:", error);
        }
      },
    }),
  }),
});

// Export hooks for the endpoints
export const {
  useGpAddMutation,
  useGpUpdateMutation,
  useGpListFetchQuery,
  useViewSingleGpDetailsQuery,
} = phedApi;
