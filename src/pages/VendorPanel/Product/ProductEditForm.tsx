// ProductEditForm.tsx
import { useState, useEffect } from "react";
import { FaImage, FaVideo } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetOneProductByIdQuery,
  useUpdateProductMutation,
} from "@/store/Api/ProductApi.ts/ProductApi";
import { PartialProduct } from "@/types/table.types";

const ProductEditForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: productResponse, isLoading } = useGetOneProductByIdQuery(id);
  const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();

  console.log(productResponse?.data);
  const [formData, setFormData] = useState<PartialProduct | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<{
    mainImage?: File;
    sideImage?: File;
    sideImage2?: File;
    lastImage?: File;
    video?: File;
  }>({});

  // Initialize form with fetched product
  useEffect(() => {
    if (productResponse?.data) {
      setFormData(productResponse.data);
    }
  }, [productResponse]);

  if (isLoading || !id || !formData) {
    return <div className="p-8 text-center">Loading product...</div>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev!, [name]: value }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id) return;

    try {
      const formDataToSend = new FormData();

      // Add required text fields
      formDataToSend.append("productName", formData.productName || "");
      formDataToSend.append("pricePerUnit", String(formData.pricePerUnit || 0));
      formDataToSend.append("stock", String(formData.stock || 0));

      // Add selected files
      Object.entries(selectedFiles).forEach(([fieldName, file]) => {
        if (file) {
          formDataToSend.append(fieldName, file);
        }
      });

      // Fallback: send existing URLs if no new file selected
      if (!selectedFiles.mainImage && formData.mainImageUrl) {
        formDataToSend.append("mainImage", formData.mainImageUrl);
      }
      if (!selectedFiles.sideImage && formData.sideImageUrl) {
        formDataToSend.append("sideImage", formData.sideImageUrl);
      }
      if (!selectedFiles.sideImage2 && formData.sideImage2Url) {
        formDataToSend.append("sideImage2", formData.sideImage2Url);
      }
      if (!selectedFiles.lastImage && formData.lastImageUrl) {
        formDataToSend.append("lastImage", formData.lastImageUrl);
      }
      if (!selectedFiles.video && formData.videoUrl) {
        formDataToSend.append("video", formData.videoUrl);
      }

      await updateProduct({ id, body: formDataToSend }).unwrap();
      console.log(formDataToSend);
    } catch (err) {
      console.error("Update failed:", err);
      alert("Failed to update product. Please try again.");
    }
  };

  const handleCancel = () => {
    navigate("/products");
  };

  // Fallback image for preview
  const mainImageUrl =
    formData.mainImageUrl?.trim() ||
    "https://via.placeholder.com/300?text=No+Image";

  return (
    <div className="p-6 max-w-[100%] mx-auto">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Card: Product Preview */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
          <div className="mb-4">
            <img
              src={mainImageUrl}
              alt={formData.productName || "Product"}
              className="w-full h-48 object-cover rounded-lg"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://via.placeholder.com/300?text=Image+Error")
              }
            />
          </div>

          {/* Product Name */}
          <h2 className="font-semibold text-lg">{formData.productName}</h2>

          {/* Company Name */}
          {formData.companyName && (
            <p className="text-sm text-gray-500 mt-1">
              by {formData.companyName}
            </p>
          )}

          {/* Price Display (with special price if exists) */}
          <div className="mt-2">
            {formData.specialPrice ? (
              <>
                <span className="text-xl font-bold text-green-600">
                  ${formData.specialPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm line-through text-gray-500">
                  ${formData.pricePerUnit?.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-xl font-bold text-green-600">
                ${formData.pricePerUnit?.toFixed(2) || "0.00"}
              </span>
            )}
          </div>

          {/* Available Size */}
          {formData.availableSize && (
            <div className="mt-3">
              <span className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-xs">
                Size: {formData.availableSize}
              </span>
            </div>
          )}

          {/* Gender */}
          {formData.gender && (
            <div className="mt-2">
              <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                {formData.gender}
              </span>
            </div>
          )}

          {/* Stock */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              Stock: {formData.stock}
            </span>
          </div>

          {/* Special Price Dates (if active) */}
          {formData.specialPrice && formData.specialPriceStartingDate && (
            <div className="mt-3 text-xs text-yellow-600">
              On sale until{" "}
              {new Date(formData.specialPriceEndingDate!).toLocaleDateString()}
            </div>
          )}

          {/* SKU */}
          {formData.productSKU && (
            <div className="mt-3 text-xs text-gray-500">
              SKU: {formData.productSKU}
            </div>
          )}

          {/* Category (if you have category name, otherwise show ID) */}
          {formData.productCategory && (
            <div className="mt-2 text-xs text-gray-500">
              Category: {formData.productCategory}{" "}
              {/* Replace with actual category name if available */}
            </div>
          )}

          {/* Dimensions (if any) */}
          {(formData.width || formData.height || formData.length) && (
            <div className="mt-3 text-xs text-gray-500">
              Dimensions: {formData.width}" x {formData.height}" x{" "}
              {formData.length}"
            </div>
          )}

          {/* Weight */}
          {formData.weight && (
            <div className="mt-1 text-xs text-gray-500">
              Weight: {formData.weight} kg
            </div>
          )}
        </div>

        {/* Right Form: Minimal Fields Only */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-semibold mb-4">Product Details</h3>

            {/* Product Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name*
              </label>
              <input
                type="text"
                name="productName"
                value={formData.productName || ""}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Price Per Unit */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price Per Unit*
              </label>
              <input
                type="number"
                name="pricePerUnit"
                value={formData.pricePerUnit || ""}
                onChange={handleChange}
                step="0.01"
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Stock */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity*
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock || ""}
                onChange={handleChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Media Uploads */}
            <div className="space-y-4">
              <h4 className="font-medium text-sm">Media Uploads</h4>

              {/* Main Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Main Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "mainImage")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedFiles.mainImage && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {selectedFiles.mainImage.name}
                  </p>
                )}
              </div>

              {/* Side Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Side Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "sideImage")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedFiles.sideImage && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {selectedFiles.sideImage.name}
                  </p>
                )}
              </div>

              {/* Side Image 2 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Side Image 2
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "sideImage2")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedFiles.sideImage2 && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {selectedFiles.sideImage2.name}
                  </p>
                )}
              </div>

              {/* Last Image */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "lastImage")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {selectedFiles.lastImage && (
                  <p className="mt-1 text-xs text-gray-500">
                    Selected: {selectedFiles.lastImage.name}
                  </p>
                )}
              </div>

              {/* Video */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Video
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
              onClick={handleSubmit}
              disabled={isUpdating}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 transition-colors"
            >
              {isUpdating ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEditForm;
