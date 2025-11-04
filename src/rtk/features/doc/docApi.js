/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { baseApi } from "../api/baseApi";
import { setActiveId } from "./docSlice";

const DOC_URL = "/legal-docs";

export const docApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDocs: builder.query({
      query: (arg) => ({
        url: `${DOC_URL}`,
        method: "GET",
        params: arg,
      }),
      transformResponse: (response) => {
        return {
          docs: response.data,
          meta: response.meta,
        };
      },
      transformErrorResponse: (response) => {
        return {
          message: response?.data?.message,
          status: response?.data?.statusCode,
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          const firstItem = data?.docs?.[0] || {};

          if (firstItem?.heighlight) {
            dispatch(setActiveId(data?.docs?.[0]?.id));
          } else {
            dispatch(setActiveId(null));
          }
        } catch (err) {}
      },
    }),
  }),
});

export const { useGetDocsQuery } = docApi;
