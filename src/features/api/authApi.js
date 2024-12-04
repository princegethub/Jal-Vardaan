import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";

const AUTH_API = "http://localhost:5000/api/v1"; // Replace with your API endpoint


// Accessing Token in Other API Calls
// You can access the token stored in localStorage for authenticated requests by modifying the fetchBaseQuery to include the Authorization header:

// baseQuery: fetchBaseQuery({
//   baseUrl: AUTH_API,
//   prepareHeaders: (headers) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       headers.set("Authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// }),



export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: AUTH_API,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (inputData) => ({
        url: "/login",
        method: "POST",
        body: inputData,
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          // Wait for the query to complete
          const { data } = await queryFulfilled;

          // Save token to localStorage
          localStorage.setItem("token", data.token);

          // Dispatch action to update Redux state
          dispatch(
            userLoggedIn({
              user: data.user,
              token:data.token,
            })
          );
        } catch (error) {
          console.error("Login error:", error);
        }
      },
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      }),
      async onQueryStarted(args, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;

          // Clear token from localStorage
          localStorage.removeItem("token");

          // Dispatch action to update Redux state
          dispatch(userLoggedOut());
        } catch (error) {
          console.error("Logout error:", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
