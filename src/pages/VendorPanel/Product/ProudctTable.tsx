import { getProductColumns } from "@/components/table/columns/ColumnReusable";
import ReusableTable from "@/components/table/TableReusable";
import {
  useDeleteProductMutation,
  useGetMyProductsQuery,
} from "@/store/Api/ProductApi.ts/ProductApi";
import { PartialProduct } from "@/types/table.types";
import { useState } from "react";
import { FaPlus, FaCheck, FaClock, FaExclamationCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Table = () => {
  const { data, error, isLoading } = useGetMyProductsQuery(undefined);
  console.log(data);
  const navigate = useNavigate();

  const prdductData: PartialProduct[] = data?.data ?? [];

  const [deleteProduct] = useDeleteProductMutation();

  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  // Calculate metrics based on available data
  const totalProducts = prdductData.length;
  const activeProducts = prdductData.filter(
    (product) => product.stock > 0
  ).length;
  const recentlyAddedCount = 1; // Assuming first item is recently added
  const outOfStock = prdductData.filter(
    (product) => product.stock === 0
  ).length;

  const handleEdit = (product: PartialProduct) => {
    navigate(`/vendor-dashboard/products/${product._id}`);
  };

  const handleDelete = async (product: PartialProduct) => {
    if (!product._id) return;

    setIsDeleting(product._id);
    try {
      await deleteProduct(product._id).unwrap();
      // Success: `invalidatesTags` will auto-refresh the product list
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Failed to delete product. Please try again.");
    } finally {
      setIsDeleting(null);
    }
  };

  const columns = getProductColumns({
    onEdit: handleEdit,
    onDelete: handleDelete,
  });

  return (
    <div className="p-4 max-w-[100%] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">PRODUCTS</h1>
        <Link to="/vendor-dashboard/products/create">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
            <FaPlus /> Add new product
          </button>
        </Link>
      </div>

      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Total Products Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-3">
          <div className="bg-purple-100 p-2 rounded-full">
            <FaPlus className="text-purple-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Products</p>
            <p className="text-2xl font-bold text-purple-600">
              {totalProducts}
            </p>
          </div>
        </div>

        {/* Active Products Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-3">
          <div className="bg-green-100 p-2 rounded-full">
            <FaCheck className="text-green-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Active products</p>
            <p className="text-2xl font-bold text-green-600">
              {activeProducts}
            </p>
          </div>
        </div>

        {/* Recently Added Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-3">
          <div className="bg-orange-100 p-2 rounded-full">
            <FaClock className="text-orange-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Recently added</p>
            <p className="text-2xl font-bold text-orange-600">
              {recentlyAddedCount}
            </p>
          </div>
        </div>

        {/* Out of Stock Card */}
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-center gap-3">
          <div className="bg-red-100 p-2 rounded-full">
            <FaExclamationCircle className="text-red-600 text-lg" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Out of Stock</p>
            <p className="text-2xl font-bold text-red-600">{outOfStock}</p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Your Products</h2>
        <ReusableTable
          data={prdductData}
          columns={columns}
          showFilter={true}
          filterPlaceholder="Search by name or SKU..."
          pageSize={8}
        />
      </div>
    </div>
  );
};

export default Table;
