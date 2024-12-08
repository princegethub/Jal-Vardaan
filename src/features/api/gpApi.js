import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { addGp, updateGp } from "../phedSlice";
// Define your API endpoint
const GP_API = "http://localhost:5000/api/v1/gp";
export const gpApi = createApi({
  reducerPath: "gpApi",
  baseQuery: fetchBaseQuery({
    baseUrl: GP_API,
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
    // Add Consumer Mutation
    addConsumer: builder.mutation({
      query: (consumerData) => ({
        url: "/user/add", // Correct API endpoint
        method: "POST",
        body: consumerData, // Sending data in the request body
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled; // Wait for the query to succeed
          dispatch(addGp(data)); // Dispatching an action to update the state
          console.log("Consumer added successfully:", data);
        } catch (error) {
          console.error("Error in creating consumer:", error);
        }
      },
    }),
    getActiveConsumer: builder.query({
      query: () => ({
        url: "/users/active", // Correct API endpoint
        method: "GET",
        // Sending data in the request body
      }),
    }),
    getInActiveConsumer: builder.query({
      query: () => ({
        url: "/users/inactive", // Correct API endpoint
        method: "get",
        // Sending data in the request body
      }),
    }),


    getGpComplaintList: builder.query({
      query: () => ({
        url: "/gp-complaint", // Correct API endpoint
        method: "GET",
        // Sending data in the request body
      }),
    }),


    addGpComplaint: builder.mutation({
      query: (inputData) => ({
        url: "/gp-complaint", // Correct API endpoint
        method: "POST",
        body: inputData, // Sending data in the request body
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled; // Wait for the query to succeed
          dispatch(addGp(data)); // Dispatching an action to update the state
          console.log("Consumer added successfully:", data);
        } catch (error) {
          console.error("Error in creating consumer:", error);
        }
      },
    }),


    getGpAnnouncmentList: builder.query({
      query: () => ({
        url: "/announcements", // Correct API endpoint
        method: "GET",
        // Sending data in the request body
      }),
    }),


    addGpAnnoucement: builder.mutation({
      query: (inputData) => ({
        url: "/announcement", // Correct API endpoint
        method: "POST",
        body: inputData, // Sending data in the request body
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled; // Wait for the query to succeed
          dispatch(addGp(data)); // Dispatching an action to update the state
          console.log("Consumer added successfully:", data);
        } catch (error) {
          console.error("Error in creating consumer:", error);
        }
      },
    }),




    gpFundRequest: builder.query({
      query: () => ({
        url: "/fund/requests", // Correct API endpoint
        method: "GET",
        // Sending data in the request body
      }),
    }),
    
    
    createGpFundRequest: builder.mutation({
      query: (inputData) => ({
        url: "/fund/request", // Correct API endpoint
        method: "POST",
        body: inputData, // Sending data in the request body
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled; // Wait for the query to succeed
          dispatch(addGp(data)); // Dispatching an action to update the state
          console.log("Consumer added successfully:", data);
        } catch (error) {
          console.error("Error in creating consumer:", error);
        }
      },
    }),
    
    
    
    getNotificationPhed: builder.query({
      query: () => ({
        url: "/notifications", // Correct API endpoint
        method: "GET",
        // Sending data in the request body
      }),
    }),

  }),
});
// Export hooks for the endpoints
export const {
  useAddConsumerMutation, // Consistent naming convention
  useGetActiveConsumerQuery,
  useGetInActiveConsumerQuery,
  useAddGpComplaintMutation,
  useGetGpComplaintListQuery,
  useGetGpAnnouncmentListQuery,
  useAddGpAnnoucementMutation,
  useGpFundRequestQuery,
  useCreateGpFundRequestMutation,
  useGetNotificationPhedQuery,
} = gpApi;
