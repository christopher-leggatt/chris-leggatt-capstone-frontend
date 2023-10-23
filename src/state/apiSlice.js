import { createApi } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "./authSlice";
import axios from "axios";

const path = "/auth/login";
const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const baseQuery = async ({ url, method, body, headers }) => {
  try {
    const response = await api({
      url,
      method,
      body,
      headers,
      withCredentials: true,
    });
    return(response.data);
  } catch (error) {
    return { error: error.response.data };
  }
};

const prepareHeaders = (headers, { getState }) => {
  const token = getState().auth.token;
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return headers;
};

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args);

  if (result?.error?.status === 403) {
    const refreshResult = await baseQuery({
      url: "/auth/refresh",
      method: "GET",
      headers: prepareHeaders({}, api.getState()),
    });

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));
      result = await baseQuery(args);
    } else {
      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (order) => ({
        url: "/orders",
        method: "POST",
        body: order,
      }),
    }),
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getCategorizedProducts: builder.query({
      query: (category) => ({
        url: `/products/category/${category}`,
        method: "GET",
      }),
    }),
    getCurrentProduct: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "POST",
      }),
    }),
  }),
});
