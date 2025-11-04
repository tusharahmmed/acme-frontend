/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "../../../config";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.api_base_url }),
  endpoints: (builder) => ({}),
  tagTypes: [],
});
