import { useGetMyStatsQuery } from "@/store/Api/ProductApi.ts/OrdersApi";


const StatCards = () => {
  const { data, isLoading, isError } = useGetMyStatsQuery(undefined);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-1/3 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
        Failed to load stats.
      </div>
    );
  }

  const stats = data?.data || {
    totalOrders: 0,
    pending: 0,
    confirmed: 0,
    preparingForShipment: 0,
    outForDelivery: 0,
    delivered: 0,
    cancelled: 0,
    totalRevenue: 0,
    averageOrderValue: 0,
  };

  // Format currency
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 2,
    }).format(value);

  // Define card configs
  const cards = [
    {
      title: 'Total Orders',
      value: stats.totalOrders,
      subtitle: 'This month',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Pending Order',
      value: stats.pending,
      subtitle: 'Quick delivery',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Complete Order',
      value: stats.delivered + stats.confirmed + stats.preparingForShipment + stats.outForDelivery,
      subtitle: 'Quick delivery',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Cancelled Order',
      value: stats.cancelled,
      subtitle: 'This month',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className={`p-4 rounded-lg shadow ${card.bgColor} border border-blue-200`}
        >
          <h3 className={`text-sm font-medium ${card.color}`}>{card.title}</h3>
          <p className="text-2xl font-bold mt-1">{card.value}</p>
          <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default StatCards;