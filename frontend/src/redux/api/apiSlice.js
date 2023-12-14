import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://whiteboard-ndh92p435-abrakib942.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: [],
});
