
import { useState } from 'react';
import { VendorOrder } from '@/types/order.types';
import { useGetMyOrdersQuery } from '@/store/Api/ProductApi.ts/OrdersApi';
import ReusableTable from '@/components/table/TableReusable';
import { getOrderColumns } from '@/components/table/columns/orderColumns';

const OrderTable = () => {
  const [filters, setFilters] = useState({
    status: '',
    paymentStatus: '',
  });

  const { data, isLoading, isError } = useGetMyOrdersQuery(filters);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  if (isLoading) return <div>Loading orders...</div>;
  if (isError) return <div>Failed to load orders.</div>;

  const orders = data?.data || [];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Your Orders</h2>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All Statuses</option>
            <option value="PENDING">PENDING</option>
            <option value="PROCESSING">PROCESSING</option>
            <option value="SHIPPED">SHIPPED</option>
            <option value="DELIVERED">DELIVERED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Payment Status</label>
          <select
            value={filters.paymentStatus}
            onChange={(e) => handleFilterChange('paymentStatus', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">All Payments</option>
            <option value="PENDING">PENDING</option>
            <option value="PAID">PAID</option>
            <option value="FAILED">FAILED</option>
            <option value="REFUNDED">REFUNDED</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <ReusableTable<VendorOrder>
        data={orders}
        columns={getOrderColumns()}
        showFilter={false} // 👈 Disable global search since we're using dropdown filters
        pageSize={8}
      />
    </div>
  );
};

export default OrderTable;