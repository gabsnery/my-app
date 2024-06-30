import { defaultApi } from "../default";
import IItem from "../interfaces/item";
export const ghgApi = defaultApi.injectEndpoints({
  endpoints: (build) => ({
    addItem: build.mutation<IItem, Omit<IItem, "id">>({
      query: (payload) => {
        return {
          url: "/item",
          method: "POST",
          body: payload,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
      },
      invalidatesTags: ["Item"],
    }),
    updateItem: build.mutation<IItem, IItem>({
      query: (payload) => {
        return {
          url: `/item/${payload.id}`,
          method: "PUT",
          body: payload,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
      },
      invalidatesTags: ["Item"],
    }),
    deleteItem: build.mutation<void, IItem>({
      query: (item) => {
        return {
          url:  `/item/${item.id}`,
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        };
      },
      invalidatesTags: ["Item"],
    }),

    getItem: build.query<IItem, number>({
      query: (id) => `/${id}`,
    }),
    getItems: build.query<IItem[], void>({
      query: (id) => `/item`,
    }),
  }),
});
export const {
  useGetItemQuery,
  useGetItemsQuery,
  useAddItemMutation,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = ghgApi;
