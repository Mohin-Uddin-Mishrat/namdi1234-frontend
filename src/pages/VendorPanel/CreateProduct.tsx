// ProductCreateForm.tsx
import { useState } from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "@/store/Api/ProductApi.ts/ProductApi";
import { PartialProduct } from "@/types/table.types";

const ProductCreateForm = () => {
  const navigate = useNavigate();
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const {
    data: categories = [],
    isLoading: isLoadingCategories,
    isError: isCategoryError,
  } = useGetCategoriesQuery();
  console.log("category", categories);
  const [formData, setFormData] = useState<PartialProduct>({
    productName: "",
    productCategory: "",
    productSKU: "",
    companyName: "",
    gender: "",
    availableSize: "",
    productDescription: "",
    stock: 0,
    currency: "NGN",
    pricePerUnit: 0,
    weight: 0,
  });

  const [selectedFiles, setSelectedFiles] = useState<{
    mainImage?: File;
    sideImage?: File;
    sideImage2?: File;
    lastImage?: File;
    video?: File;
  }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "stock" ||
        name === "pricePerUnit" ||
        name === "weight" ||
        name === "specialPrice"
          ? parseFloat(value) || 0
          : value,
    }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFiles((prev) => ({
        ...prev,
        [fieldName]: e.target.files![0],
      }));
    }
  };

  const toggleSize = (size: string) => {
    setFormData((prev) => ({
      ...prev,
      availableSize: prev.availableSize === size ? "" : size,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();

      // Add all text fields
      Object.keys(formData).forEach((key) => {
        const value = formData[key as keyof CreateProductForm];
        if (value !== undefined && value !== null) {
          if (
            key === "mainImage" ||
            key === "sideImage" ||
            key === "sideImage2" ||
            key === "lastImage" ||
            key === "video"
          ) {
            // Skip — handled separately
          } else {
            formDataToSend.append(key, String(value));
          }
        }
      });

      // Add selected files
      Object.entries(selectedFiles).forEach(([fieldName, file]) => {
        if (file) {
          formDataToSend.append(fieldName, file);
        }
      });

      await createProduct(formDataToSend).unwrap();
    } catch (err) {
      console.error("Create failed:", err);
      alert("Failed to create product. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/products");
  };

  // Size options (adjust as needed)
  const sizeOptions = [
    "One Size",
    "S",
    "M",
    "L",
    "XL",
    "5mg",
    "10 mg",
    "20 mg",
    "50 mg",
  ];

  return (
    <div className="p-6 max-w-[100%] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Image Upload Section */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-semibold mb-4">Upload Images & Video</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["mainImage", "sideImage", "sideImage2", "lastImage"].map(
              (field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field === "mainImage"
                      ? "Main Image"
                      : field.replace(/([A-Z])/g, " $1").trim()}
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, field)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  {selectedFiles[field as keyof typeof selectedFiles] && (
                    <p className="mt-1 text-xs text-gray-500">
                      Selected:{" "}
                      {selectedFiles[field as keyof typeof selectedFiles]?.name}
                    </p>
                  )}
                </div>
              )
            )}
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Video
            </label>
            <input
              type="file"
              accept="video/*"
              onChange={(e) => handleFileChange(e, "video")}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {selectedFiles.video && (
              <p className="mt-1 text-xs text-gray-500">
                Selected: {selectedFiles.video.name}
              </p>
            )}
          </div>
        </div>

        {/* Product Information */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-semibold mb-4">Product Information</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name*
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Category*
              </label>
              {isLoadingCategories ? (
                <p className="text-sm text-gray-500">Loading categories...</p>
              ) : isCategoryError ? (
                <p className="text-sm text-red-500">
                  Failed to load categories.
                </p>
              ) : (
                // the select element shown above
                <select
                  name="productCategory"
                  value={formData.productCategory}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a category</option>
                  {categories?.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.categoryName}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SKU*
              </label>
              <input
                type="text"
                name="productSKU"
                value={formData.productSKU}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand/Company Name*
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender*
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select gender</option>
                <option value="Unisex">Unisex</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Available Size*
              </label>
              <div className="flex flex-wrap gap-2 mt-1">
                {sizeOptions.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => toggleSize(size)}
                    className={`px-3 py-1 rounded-full text-xs transition-colors ${
                      formData.availableSize === size
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Description*
            </label>
            <textarea
              name="productDescription"
              value={formData.productDescription}
              onChange={handleChange}
              rows={3}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Quantity & Pricing */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-semibold mb-4">Quantity & Pricing</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Stock Quantity*
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Currency
              </label>
              <div className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700 cursor-default">
                ₦ NGN (Nigerian Naira)
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Unit*
              </label>
              <input
                type="number"
                name="pricePerUnit"
                value={formData.pricePerUnit}
                onChange={handleChange}
                step="0.01"
                min="0"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Price (Optional)
              </label>
              <input
                type="number"
                name="specialPrice"
                value={formData.specialPrice || ""}
                onChange={handleChange}
                step="0.01"
                min="0"
                placeholder="0.00"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Price From
              </label>
              <input
                type="date"
                name="specialPriceStartingDate"
                value={formData.specialPriceStartingDate?.split("T")[0] || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Special Price To
              </label>
              <input
                type="date"
                name="specialPriceEndingDate"
                value={formData.specialPriceEndingDate?.split("T")[0] || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Dimensions & Weight */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <h3 className="font-semibold mb-4">Dimensions & Weight</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Length (cm)
              </label>
              <input
                type="number"
                name="length"
                value={formData.length || ""}
                onChange={handleChange}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Width (cm)
              </label>
              <input
                type="number"
                name="width"
                value={formData.width || ""}
                onChange={handleChange}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height || ""}
                onChange={handleChange}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Weight (kg)*
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                step="0.1"
                min="0"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {isLoading ? "Creating..." : "Save Product"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCreateForm;
