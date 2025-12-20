import baseApi from "../BaseApi/BaseApi";
interface Category {
  _id: string;
  categoryName: string;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query<Category[], void>({
      query: () => "/category",
      transformResponse: (response: { data: Category[] }) => response.data,
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
    }),
    // New endpoint: Get My Products
    getMyProducts: builder.query({
      query: () => ({
        url: "/products/my/products",
        method: "GET",
      }),
      providesTags: ["Product"],
    }),
    getOneProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      // Automatically refetch getMyProducts after deletion
      invalidatesTags: ["Product"],
    }),
    // 👇 ADD UPDATE MUTATION
    updateProduct: builder.mutation({
      query: ({id , body}) => ({
        url: `/products/${id}`,
        method: "PATCH",
        body: body,
      }),
      invalidatesTags: ["Product"],
    }),
    
  }),
});

export const {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetMyProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useGetOneProductByIdQuery,
} = productApi;

export default productApi;
