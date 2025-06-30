
import { apiSlice } from "../apiSlice/apiSlice";
export const demoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDemos: builder.query({
      query: (query) => {
        return {
          url: `/demos?${query}`,
        };
      },
    }),
    getDemoById: builder.query({
      query: (id) => `/demos/${id}`,
    }),
    addDemo: builder.mutation({
      query: (info) => {
        return {
          url: "/demos",
          method: "POST",
          body: info,
        };
      },
    }),
    editDemo: builder.mutation({
      query: (info) => {
        return {
          url: `/demos/${info._id}`,
          method: "PATCH",
          body: info,
        };
      },
    }),
    deleteDemo: builder.mutation({
      query: (id) => {
        return {
          url: `/demos/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});
export const {
  useGetDemosQuery,
  useAddDemoMutation,
  useDeleteDemoMutation,
  useEditDemoMutation,
  useGetDemoByIdQuery,
} = demoApi;
