import baseApi from "../BaseApi/BaseApi";
interface Category {
  _id: string;
  categoryName: string;
}

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
  
   getCategories: builder.query<Category[], void>({
      query: () => '/category',
      transformResponse: (response: { data: Category[] }) => response.data,
    }),
    createProduct: builder.mutation({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product,
      }),
    }),
        // New endpoint: Get My Products
    getMyProducts:builder.query({
      query: () => ({
        url: "/products/my/products",
        method: "GET",
      }),
      // providesTags: ["Users"],
    }),

  }),
});

export const {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetMyProductsQuery
} = productApi;

export default productApi;
