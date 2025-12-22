import { useParams } from 'react-router-dom';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useGetOneProductByIdQuery } from '@/store/Api/ProductApi.ts/ProductApi';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data: product, isLoading, error } = useGetOneProductByIdQuery(id!);
  const [reviews] = useState([
    {
      id: '1',
      user: 'Adeola O.',
      rating: 4.5,
      comment: 'Excellent brightness and low power consumption. Works perfectly with my solar setup.',
      date: '2025-12-05',
    },
    {
      id: '2',
      user: 'Chidi N.',
      rating: 5,
      comment: 'Fast delivery and product works as described. Very satisfied!',
      date: '2025-11-28',
    },
  ]);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error || !product?.data) return <div className="min-h-screen flex items-center justify-center text-red-600">Product not found</div>;

  const p = product.data;

  // Format NGN price
  const formatNGN = (amount: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);

  // Render stars
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) stars.push(<FaStar key={`full-${i}`} className="text-yellow-500" />);
    if (hasHalf) stars.push(<FaStarHalfAlt key="half" className="text-yellow-500" />);
    while (stars.length < 5) stars.push(<FaRegStar key={`empty-${stars.length}`} className="text-yellow-500" />);

    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 font-sans">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-4">
          Home / {p.productCategory?.name || 'Products'} / {p.productName}
        </div>

        {/* Main Product Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={p.mainImageUrl?.trim()}
              alt={p.productName}
              className="max-w-full h-auto rounded-lg shadow-md border border-gray-100"
              onError={(e) => (e.currentTarget.src = '/placeholder-image.webp')}
            />
          </div>

          {/* Details */}
          <div className="md:w-1/2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{p.productName}</h1>
            <p className="text-sm text-gray-600 mb-4">SKU: {p.productSKU}</p>

            {/* Pricing */}
            <div className="flex items-center gap-3 mb-4">
              {p.specialPrice && p.specialPrice < p.pricePerUnit ? (
                <>
                  <span className="text-2xl font-bold text-green-600">{formatNGN(p.specialPrice)}</span>
                  <span className="text-lg text-gray-400 line-through">{formatNGN(p.pricePerUnit)}</span>
                  <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">Sale</span>
                </>
              ) : (
                <span className="text-2xl font-bold">{formatNGN(p.pricePerUnit)}</span>
              )}
            </div>

            {/* Stock & Delivery */}
            <div className="mb-4">
              <span className={`px-2 py-1 rounded text-sm ${
                p.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {p.stock > 0 ? `In Stock (${p.stock} units)` : 'Out of Stock'}
              </span>
              <p className="text-sm text-gray-600 mt-1">Free delivery across Nigeria on orders over ₦5,000</p>
            </div>

            {/* Add to Cart / Buy Buttons */}
            <div className="flex gap-3 mb-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition"
                disabled={p.stock === 0}
              >
                Add to Cart
              </button>
              <button
                className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md font-medium transition"
                disabled={p.stock === 0}
              >
                Buy Now
              </button>
            </div>

            {/* Product Specs */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Product Details</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li><span className="font-medium">Category:</span> {p.productCategory?.name || '—'}</li>
                <li><span className="font-medium">Brand:</span> {p.companyName}</li>
                <li><span className="font-medium">Size:</span> {p.availableSize || 'One Size'}</li>
                <li><span className="font-medium">Weight:</span> {p.weight > 0 ? `${p.weight} kg` : '—'}</li>
                <li><span className="font-medium">Dimensions:</span> {p.length > 0 ? `${p.length} m` : '—'}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-4">Product Description</h2>
          <div className="prose max-w-none text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: p.productDescription?.replace(/\r\n/g, '<br />') || '' }} />
        </div>

        {/* Reviews Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Customer Reviews</h2>
            <button className="text-blue-600 font-medium hover:underline">Write a Review</button>
          </div>

          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{review.user}</h3>
                    <span className="text-sm text-gray-500">{format(new Date(review.date), 'dd MMM yyyy')}</span>
                  </div>
                  {renderStars(review.rating)}
                  <p className="mt-2 text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          {/* Add Review Form (mock) */}
          <div className="mt-8 p-6 border border-gray-200 rounded-lg bg-gray-50">
            <h3 className="font-bold mb-4">Write a Review</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Rating</label>
                <div className="flex">{renderStars(4)}</div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Review</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-blue-500 focus:outline-none"
                  rows={4}
                  placeholder="Share your experience..."
                ></textarea>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;