import baseApi from "../BaseApi/BaseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query({
      query: ({ status, paymentStatus }) => {
        const params = new URLSearchParams();
        if (status) params.append("status", status);
        if (paymentStatus) params.append("paymentStatus", paymentStatus);
        return `/orders/vendor/my-orders?${params.toString()}`;
      },
    }),
    getMyStats: builder.query({
      query: () => "/orders/vendor/my-stats",
    }),
    getOrderDetails: builder.query({
      query: (orderId: string) => `/orders/admin/${orderId}`,
    }),
  }),
});

export const { useGetMyOrdersQuery, useGetMyStatsQuery, useGetOrderDetailsQuery } = orderApi;

export default orderApi;
