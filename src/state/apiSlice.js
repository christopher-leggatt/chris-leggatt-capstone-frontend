import { createApi } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "./authSlice";
import api from './api';

const baseUrl = process.env.REACT_APP_BACKEND_URL;
const path = "/auth/login";

const baseQuery = async ({ baseUrl, path, method, body, headers }) => {
  try {
    const response = await api({
      url: baseUrl + path,
      method,
      data: body,
      headers,
      withCredentials: true,
    });
    return { data: response.data };
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
  endpoints: (builder) => ({}),
});
