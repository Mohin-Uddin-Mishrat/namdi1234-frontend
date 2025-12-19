import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "@/store/Api/ProductApi.ts/ProductApi";

// Validation Schema
const productSchema = z.object({
  productName: z.string().min(2, "Product name is required"),
  productCategory: z.string().min(1, "Select a category"),
  productSKU: z.string().min(2, "SKU is required"),
  companyName: z.string().min(2, "Company name is required"),
  gender: z.enum(["Male", "Female", "Unisex"]),
  availableSize: z.string().min(1, "Size is required"),
  productDescription: z
    .string()
    .min(10, "Description must be at least 10 characters"),
  stock: z.number().min(0, "Stock cannot be negative"),
  currency: z.string().min(3, "Currency code required (e.g., USD)"),
  pricePerUnit: z.number().min(0.01, "Price must be greater than 0"),
  specialPrice: z
    .number()
    .optional()
    .refine((val) => val === undefined || val >= 0, {
      message: "Special price must be non-negative",
    }),
  specialPriceStartingDate: z.string().optional(),
  specialPriceEndingDate: z.string().optional(),
  mainImageUrl: z
    .string()
    .url("Valid URL required")
    .min(1, "Main image is required"),
  sideImageUrl: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Must be a valid URL",
    }),
  videoUrl: z
    .string()
    .optional()
    .refine((val) => !val || z.string().url().safeParse(val).success, {
      message: "Must be a valid URL",
    }),
  width: z.number().optional(),
  height: z.number().optional(),
  length: z.number().optional(),
  weight: z.number().optional(),
});

type ProductFormData = z.infer<typeof productSchema>;

const CreateProductPage = () => {
  const navigate = useNavigate();
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const { data: categories = [], isLoading: categoriesLoading } =
    useGetCategoriesQuery();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      gender: "Unisex",
      currency: "USD",
      stock: 0,
      pricePerUnit: 0,
    },
  });

  const onSubmit = async (data: ProductFormData) => {
    setError(null);
    try {
      await createProduct(data).unwrap();
      setSuccess(true);
      setTimeout(() => navigate("/vendor-dashboard/products"), 2000);
    } catch (err: any) {
      setError(
        err?.data?.message || "Failed to create product. Please try again."
      );
    }
  };

  // Format date for datetime-local input
  const formatDateForInput = (dateString?: string) => {
    if (!dateString) return "";
    const d = new Date(dateString);
    return d.toISOString().slice(0, 16);
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
          <p className="text-gray-600">
            Fill in the details to list your product
          </p>
        </div>

        {success ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
            Product created successfully! Redirecting...
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}

            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Name *
                </label>
                <input
                  {...register("productName")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.productName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Smart Watch"
                />
                {errors.productName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.productName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                {categoriesLoading ? (
                  <div className="w-full px-4 py-2.5 bg-gray-100 rounded-lg">
                    Loading...
                  </div>
                ) : (
                  <select
                    {...register("productCategory")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.productCategory
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  >
                    <option value="">Select a category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat._id}>
                        {cat.categoryName}
                      </option>
                    ))}
                  </select>
                )}
                {errors.productCategory && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.productCategory.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SKU *
                </label>
                <input
                  {...register("productSKU")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.productSKU ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="SW-001"
                />
                {errors.productSKU && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.productSKU.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company *
                </label>
                <input
                  {...register("companyName")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Apple"
                />
                {errors.companyName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.companyName.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender *
                </label>
                <select
                  {...register("gender")}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                >
                  <option value="Unisex">Unisex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Available Size *
                </label>
                <input
                  {...register("availableSize")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.availableSize ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="One Size"
                />
                {errors.availableSize && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.availableSize.message}
                  </p>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Description *
              </label>
              <textarea
                {...register("productDescription")}
                rows={3}
                className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                  errors.productDescription
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                placeholder="Latest smartwatch with health tracking..."
              />
              {errors.productDescription && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.productDescription.message}
                </p>
              )}
            </div>

            {/* Inventory & Pricing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stock *
                </label>
                <input
                  type="number"
                  {...register("stock", { valueAsNumber: true })}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.stock ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="100"
                />
                {errors.stock && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.stock.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Currency *
                </label>
                <input
                  {...register("currency")}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.currency ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="USD"
                />
                {errors.currency && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.currency.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Per Unit ($) *
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register("pricePerUnit", { valueAsNumber: true })}
                  className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.pricePerUnit ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="399.99"
                />
                {errors.pricePerUnit && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.pricePerUnit.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Price ($)
                </label>
                <input
                  type="number"
                  step="0.01"
                  {...register("specialPrice", { valueAsNumber: true })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="349.99"
                />
                {errors.specialPrice && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.specialPrice.message}
                  </p>
                )}
              </div>
            </div>

            {/* Special Price Dates (Optional) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Price Start
                </label>
                <input
                  type="datetime-local"
                  {...register("specialPriceStartingDate")}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Special Price End
                </label>
                <input
                  type="datetime-local"
                  {...register("specialPriceEndingDate")}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Media Uploads */}
            <div className="border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Media</h2>
              <div className="space-y-4">
                {/* Main Image (Required) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Main Image URL * (Required)
                  </label>
                  <input
                    {...register("mainImageUrl")}
                    className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      errors.mainImageUrl ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="https://example.com/main.jpg"
                  />
                  {errors.mainImageUrl && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.mainImageUrl.message}
                    </p>
                  )}
                </div>

                {/* Side Image (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Side Image URL (Optional)
                  </label>
                  <input
                    {...register("sideImageUrl")}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="https://example.com/side.jpg"
                  />
                  {errors.sideImageUrl && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.sideImageUrl.message}
                    </p>
                  )}
                </div>

                {/* Video (Optional) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Video URL (Optional)
                  </label>
                  <input
                    {...register("videoUrl")}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="https://example.com/video.mp4"
                  />
                  {errors.videoUrl && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.videoUrl.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Dimensions & Weight (Optional) */}
            <div className="border-t pt-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Shipping Details (Optional)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Width (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("width", { valueAsNumber: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("height", { valueAsNumber: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Length (cm)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("length", { valueAsNumber: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    {...register("weight", { valueAsNumber: true })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-6 py-2.5 rounded-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                    Creating Product...
                  </span>
                ) : (
                  "Create Product"
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateProductPage;
