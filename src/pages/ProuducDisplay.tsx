// components/ProductDisplayPage.tsx
import React, { useMemo, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { formatCurrency } from '@/utils/formatters';
import { IoMdStar } from 'react-icons/io';
import {
  Product,
  useSearchProductsQuery,
  useGetCategoriesQuery,
} from '@/store/Api/ProductApi.ts/ProductApi';

const isObjectId = (str: string): boolean => {
  return /^[0-9a-fA-F]{24}$/.test(str);
};

const ProductDisplayPage: React.FC = () => {
  const { query } = useParams<{ query: string }>();
  const decodedQuery = query ? decodeURIComponent(query) : '';

  const isCategoryQuery = isObjectId(decodedQuery);
  const initialSearch = isCategoryQuery ? '' : decodedQuery;
  const initialCategory = isCategoryQuery ? decodedQuery : '';

  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory || null);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 10; // items per page

  // Reset page to 1 when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, initialSearch]);

  const { data: categoriesData = [], isLoading: categoriesLoading } = useGetCategoriesQuery();
  const categories = useMemo(() => {
    return Array.isArray(categoriesData) ? categoriesData : [];
  }, [categoriesData]);

  const { data: raw = { data: [], pagination: { totalPages: 1 } }, isLoading, isError } = useSearchProductsQuery({
    search: initialSearch,
    productCategory: selectedCategory ?? undefined,
    page: currentPage,
    limit,
  });

  // Extract products and pagination metadata correctly
  const { products, totalPages } = useMemo(() => {
    const products = Array.isArray(raw.data) ? raw.data : [];
    const totalPages = raw.pagination?.totalPages ?? 1;
    return { products, totalPages };
  }, [raw]);

  const getPrice = (product: Product) => {
    const price = product.specialPrice ?? product.pricePerUnit ?? 0;
    return formatCurrency(price, 'NGN');
  };

  if (isLoading || categoriesLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-lg text-gray-700">Loading products...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-red-600">Failed to load products. Please try again.</p>
      </div>
    );
  }

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="flex flex-col md:flex-row max-w-[90%] mx-auto px-4 py-6 gap-6">
        {/* Sidebar - Categories */}
        <div className="w-full md:w-64 flex-shrink-0 bg-white rounded-lg p-4 shadow-sm">
          <h2 className="font-semibold text-lg text-[#015D38] mb-4">Categories</h2>
          <ul className="space-y-1">
            <li>
              <button
                onClick={() => setSelectedCategory(null)}
                className={`w-full text-left px-3 py-2.5 rounded-md transition text-sm font-medium ${
                  selectedCategory === null
                    ? 'bg-[#E8F3E1] text-[#015D38]'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                All Categories
              </button>
            </li>
            <li className="border-t border-gray-100 my-3"></li>
            {categories.map((cat) => (
              <li key={cat._id}>
                <button
                  onClick={() => setSelectedCategory(cat._id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md transition text-sm ${
                    selectedCategory === cat._id
                      ? 'bg-[#E8F3E1] text-[#015D38] font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {cat.categoryName}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Product Grid + Pagination */}
        <div className="flex-1">
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">No products match your search.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                  <Link
                    key={product._id}
                    to={`/product/details/${product._id}`}
                    className="block"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                      <div className="aspect-square bg-gray-100 flex items-center justify-center p-2">
                        <img
                          src={(product.mainImageUrl || '').trim() || '/placeholder.png'}
                          alt={product.productName}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = '/placeholder.png';
                          }}
                        />
                      </div>
                      <div className="p-3">
                        <h3 className="font-medium text-sm text-gray-800 line-clamp-2 h-10">
                          {product.productName}
                        </h3>
                        <div className="flex items-center mt-1">
                          <IoMdStar className="text-yellow-400" />
                          <IoMdStar className="text-yellow-400" />
                          <IoMdStar className="text-yellow-400" />
                          <IoMdStar className="text-yellow-400" />
                          <IoMdStar className="text-gray-300" />
                        </div>
                        <div className="mt-2 flex items-baseline gap-1">
                          <span className="text-lg font-bold text-[#015D38]">
                            {getPrice(product)}
                          </span>
                          {product.specialPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {formatCurrency(product.pricePerUnit, 'NGN')}
                            </span>
                          )}
                        </div>
                        <div className="mt-1 text-xs text-gray-500">
                          {product.stock > 0 ? 'In stock' : 'Out of stock'}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8 space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#015D38] border border-[#015D38] hover:bg-[#E8F3E1]'
                    }`}
                  >
                    Previous
                  </button>

                  {/* Show page numbers only if <= 5 pages */}
                  {totalPages <= 5 ? (
                    Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-4 py-2 rounded-md text-sm font-medium ${
                          currentPage === page
                            ? 'bg-[#015D38] text-white'
                            : 'bg-white text-[#015D38] border border-[#015D38] hover:bg-[#E8F3E1]'
                        }`}
                      >
                        {page}
                      </button>
                    ))
                  ) : (
                    <span className="px-4 py-2 text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </span>
                  )}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-[#015D38] border border-[#015D38] hover:bg-[#E8F3E1]'
                    }`}
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplayPage;