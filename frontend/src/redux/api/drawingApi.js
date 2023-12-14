import { baseApi } from "./apiSlice";

export const drawingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllDrawings: build.query({
      query: (arg) => ({
        url: "/drawing",
        params: arg,
        method: "GET",
      }),
      providesTags: ["drawing"],
    }),
    getSingleDrawing: build.query({
      query: (id) => ({
        url: `/drawing/${id}`,
        method: "GET",
      }),
      providesTags: ["item"],
    }),
    createDrawing: build.mutation({
      query: (data) => ({
        url: "/drawing/create-drawing",
        method: "POST",
        data,
      }),
      invalidatesTags: ["drawing"],
    }),
    updateDrawing: build.mutation({
      query: ({ id, data }) => ({
        url: `/drawing/${id}`,
        method: "PATCH",
        data: data,
      }),
      invalidatesTags: ["drawing"],
    }),
    deleteDrawing: build.mutation({
      query: (id) => ({
        url: `/drawing/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["drawing"],
    }),
  }),
});

export const {
  useGetAllDrawingsQuery,
  useCreateDrawingMutation,
  useGetSingleDrawingQuery,
  useDeleteDrawingMutation,
  useUpdateDrawingMutation,
} = drawingApi;
