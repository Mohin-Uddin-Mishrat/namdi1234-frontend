import baseApi from "../BaseApi/BaseApi";

export interface VendorRegistrationData {
  name: string;
  email: string;
  password: string;
  businessName: string;
  businessCRNumber: string;
  CRDocuments: string; // You'll handle file uploads separately (e.g., pre-upload to cloud)
  businessType: string;
  businessDescription: string;
  country: string;
  productCategory: string[];
  shippingLocation: string[];
  storeDescription: string;
  paymentMethod: string;
  bankAccountHolderName: string;
  bankAccountNumber: string;
  bankRoughingNumber: string; // Note: likely meant "routing number"
  taxId: string;
  isPrivacyPolicyAccepted: boolean;
  vendorSignature: string;
  vendorContract: string; // Again, assume pre-uploaded file path
  isSellerPolicyAccepted: boolean;
  address: string;
  phone: string;
}
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
    }),
    registration: builder.mutation({
      query: (credentials) => ({
        url: "/users/register/customer",
        method: "POST",
        body: credentials,
      }),
    }),
    registerVendor: builder.mutation({
      query: (credentials) => ({
        url: '/users/register/vendor',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: credentials,
      }),
    }),
    changePassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/change-password",
        method: "POST",
        body: credentials,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (credentials) => ({
        url: "/auth/forgot-password",
        method: "POST",
        body: credentials,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ token, credentials }) => ({
        url: `/auth/reset-password?token=${token}`,
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useRegisterVendorMutation
} = authApi;
export default authApi;
