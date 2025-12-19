import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRegisterVendorMutation } from "@/store/Api/AuthApi/AuthApi";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/Slices/AuthSlice/authSlice";

// Validation Schema
const vendorSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Must include upper, lower, and number"
    ),
  businessName: z.string().min(2),
  businessCRNumber: z.string().min(5),
  businessType: z.string().min(2),
  businessDescription: z.string().min(10),
  country: z.string().min(2),
  productCategory: z.array(z.string()).min(1, "Select at least one category"),
  shippingLocation: z.array(z.string()).min(1, "Select at least one location"),
  storeDescription: z.string().min(10),
  paymentMethod: z.string(),
  bankAccountHolderName: z.string(),
  bankAccountNumber: z.string().regex(/^\d+$/, "Must be digits"),
  bankRoughingNumber: z.string().regex(/^\d+$/, "Must be digits"),
  taxId: z.string().min(3),
  address: z.string().min(5),
  phone: z.string().regex(/^\+?[\d\s\-\(\)]+$/, "Invalid phone number"),
  isPrivacyPolicyAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
  isSellerPolicyAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the seller policy" }),
  }),
  vendorSignature: z.string().min(2, "Please type your full name as signature"),
  // Simulated file paths (in real app, these come from pre-upload)
  CRDocuments: z.string().optional(),
  vendorContract: z.string().optional(),
});

type VendorFormData = z.infer<typeof vendorSchema>;

const VendorRegisterPage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [registerVendor, { isLoading, isSuccess }] =
    useRegisterVendorMutation();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<VendorFormData>({
    resolver: zodResolver(vendorSchema),
    defaultValues: {
      productCategory: [],
      shippingLocation: [],
      paymentMethod: "Bank Account",
      isPrivacyPolicyAccepted: false,
      isSellerPolicyAccepted: false,
    },
  });

  const onSubmit = async (data: VendorFormData) => {
    setError(null);
    try {
      // In real app: ensure CRDocuments & vendorContract are uploaded first
      const response = await registerVendor({
        ...data,
        CRDocuments: "/uploads/cr.pdf", // Placeholder
        vendorContract: "/uploads/vendor_contract.pdf", // Placeholder
      }).unwrap();

      dispatch(
        setUser({
          ...response.data.user,
          accessToken: response?.data.accessToken,
          refreshToken: response?.data.refreshToken,
        })
      );
      setTimeout(() => navigate("/success"), 2000);
    } catch (err: any) {
      setError(err?.data?.message || "Registration failed. Please try again.");
    }
  };

  const toggleCategory = (cat: string) => {
    const current = watch("productCategory");
    if (current.includes(cat)) {
      setValue(
        "productCategory",
        current.filter((c) => c !== cat)
      );
    } else {
      setValue("productCategory", [...current, cat]);
    }
  };

  const toggleLocation = (loc: string) => {
    const current = watch("shippingLocation");
    if (current.includes(loc)) {
      setValue(
        "shippingLocation",
        current.filter((l) => l !== loc)
      );
    } else {
      setValue("shippingLocation", [...current, loc]);
    }
  };

  // Mock data for selections
  const productCategories = [
    "Analgesics",
    "Antibiotics",
    "Vitamins",
    "First Aid",
    "Medical Devices",
  ];
//   const productCategories = [
//   "Bulbs",
//   "CCTV Cameras",
//   "Smart TV",
//   "Solar Battery",
//   "Solar Charge Controller",
//   "Solar Fan",
//   "Solar Generator",
//   "Solar Inverter",
//   "Solar Panel",
//   "Solar Pumps",
//   "Solar Security Camera",
//   "Solar Street Light",
//   "Installation Accessories",
// ];

  const shippingLocations = [
    "Local within city state",
    "National",
    "International",
  ];

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Vendor Registered!
          </h2>
          <p className="text-gray-600 mt-2">
            Your application is under review. We’ll contact you soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Become a Vendor</h1>
          <p className="text-gray-600 mt-2">
            Join our marketplace and start selling pharmacy products
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          {error && (
            <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  {...register("name")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Jane Vendor"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  {...register("email")}
                  type="email"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="vendor@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  {...register("phone")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="+1234567890"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password *
                </label>
                <input
                  {...register("password")}
                  type="password"
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>

            {/* Business Info */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Business Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Name *
                  </label>
                  <input
                    {...register("businessName")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.businessName ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Jane's Store"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.businessName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CR Number *
                  </label>
                  <input
                    {...register("businessCRNumber")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.businessCRNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="CR123456"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Type *
                  </label>
                  <input
                    {...register("businessType")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.businessType ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Retail, Distributor, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country *
                  </label>
                  <input
                    {...register("country")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.country ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="USA"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Description *
                  </label>
                  <textarea
                    {...register("businessDescription")}
                    rows={2}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.businessDescription
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Describe your business..."
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address *
                  </label>
                  <input
                    {...register("address")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.address ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="123 Street, City"
                  />
                </div>
              </div>
            </div>

            {/* Product & Shipping */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Products & Shipping
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Categories *
                  </label>
                  <div className="space-y-2">
                    {productCategories.map((cat) => (
                      <div key={cat} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`cat-${cat}`}
                          checked={watch("productCategory")?.includes(cat)}
                          onChange={() => toggleCategory(cat)}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`cat-${cat}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {cat}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.productCategory && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.productCategory.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Locations *
                  </label>
                  <div className="space-y-2">
                    {shippingLocations.map((loc) => (
                      <div key={loc} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`loc-${loc}`}
                          checked={watch("shippingLocation")?.includes(loc)}
                          onChange={() => toggleLocation(loc)}
                          className="h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                        />
                        <label
                          htmlFor={`loc-${loc}`}
                          className="ml-2 text-sm text-gray-700"
                        >
                          {loc}
                        </label>
                      </div>
                    ))}
                  </div>
                  {errors.shippingLocation && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.shippingLocation.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Store Description *
                </label>
                <textarea
                  {...register("storeDescription")}
                  rows={2}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.storeDescription
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  placeholder="Tell customers about your store..."
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Payment Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Payment Method
                  </label>
                  <select
                    {...register("paymentMethod")}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  >
                    <option>Bank Account</option>
                    <option>PayPal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Holder Name *
                  </label>
                  <input
                    {...register("bankAccountHolderName")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.bankAccountHolderName
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Jane Vendor"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bank Account Number *
                  </label>
                  <input
                    {...register("bankAccountNumber")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.bankAccountNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="12345678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Routing Number * {/* corrected typo */}
                  </label>
                  <input
                    {...register("bankRoughingNumber")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.bankRoughingNumber
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="123456789"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tax ID *
                  </label>
                  <input
                    {...register("taxId")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.taxId ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="TAX12345"
                  />
                </div>
              </div>
            </div>

            {/* Legal & Signature */}
            <div className="border-t pt-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Legal Agreement
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <input
                    {...register("isPrivacyPolicyAccepted")}
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="isPrivacyPolicyAccepted"
                      className="font-medium text-gray-700"
                    >
                      I accept the{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Privacy Policy
                      </a>
                    </label>
                    {errors.isPrivacyPolicyAccepted && (
                      <p className="text-red-500">
                        {errors.isPrivacyPolicyAccepted.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <input
                    {...register("isSellerPolicyAccepted")}
                    type="checkbox"
                    className="mt-1 h-4 w-4 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="isSellerPolicyAccepted"
                      className="font-medium text-gray-700"
                    >
                      I accept the{" "}
                      <a href="#" className="text-indigo-600 hover:underline">
                        Seller Policy
                      </a>
                    </label>
                    {errors.isSellerPolicyAccepted && (
                      <p className="text-red-500">
                        {errors.isSellerPolicyAccepted.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Type Full Name as Signature *
                  </label>
                  <input
                    {...register("vendorSignature")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.vendorSignature
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="Jane Vendor"
                  />
                  {errors.vendorSignature && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.vendorSignature.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Submitting Application...
                  </span>
                ) : (
                  "Submit Vendor Application"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorRegisterPage;
