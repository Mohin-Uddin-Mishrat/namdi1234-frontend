// components/CategorySidebar.tsx
import { useGetCategoriesQuery } from '@/store/Api/ProductApi.ts/ProductApi';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';



export default function CategorySidebar() {
  const { data: categories = [], isLoading, error } = useGetCategoriesQuery();

  if (isLoading) {
    return (
      <div className="bg-green-800 text-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">All Categories</h2>
        <p>Loading categories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-green-800 text-white rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">All Categories</h2>
        <p className="text-red-300">Failed to load categories.</p>
      </div>
    );
  }

  return (
    <div className="bg-green-800 text-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li
            key={cat._id}
            className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded transition cursor-pointer"
          >
            <Link
              to={`/products/${encodeURIComponent(cat.categoryName)}`}
              className="flex items-center w-full"
            >
              <ChevronRight className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="truncate">{cat.categoryName}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}