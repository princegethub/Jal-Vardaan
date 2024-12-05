import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn, userLoggedOut } from "../authSlice";
import { useDispatch } from "react-redux";

const AUTH_API = "http://localhost:5000/api/v1"; // Replace with your API endpoint

// const dispatch = useDispatch();



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
          const { data } = await queryFulfilled;
          localStorage.setItem("token", data.token);
          dispatch(userLoggedIn({ user: data.user, token: data.token }));
        } catch (error) {
          console.error("Login error:", error);
          throw error; // Optionally rethrow or handle the error in the UI
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
          localStorage.removeItem("token");
          dispatch(userLoggedOut());
        } catch (error) {
          console.error("Logout error:", error);
        }
      },
    }),
    
  }),
});

export const { useLoginMutation, useLogoutMutation } = authApi;
