// components/tables/orderColumns.tsx
import { ColumnDef } from '@tanstack/react-table';
import { VendorOrder } from '@/types/order.types';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

// Format currency (use NGN or USD based on your needs)
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
  }).format(value);
};

// Get first product name (or count if multiple)
const getProductDisplay = (products: VendorOrder['products']) => {
  if (products.length === 0) return 'No products';
  if (products.length === 1) return products[0].productId.productName;
  return `${products[0].productId.productName} +${products.length - 1}`;
};

// Status badge with color
const StatusBadge = ({ status }: { status: string }) => {
  const getColor = () => {
    switch (status) {
      case 'PENDING': return 'bg-purple-100 text-purple-800';
      case 'PROCESSING': return 'bg-blue-100 text-blue-800';
      case 'SHIPPED': return 'bg-indigo-100 text-indigo-800';
      case 'DELIVERED': return 'bg-green-100 text-green-800';
      case 'CANCELLED': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full ${getColor()}`}>
      {status}
    </span>
  );
};

export const getOrderColumns = (): ColumnDef<VendorOrder>[] => [
  {
    header: 'Order ID',
    accessorKey: 'orderNumber',
    cell: ({ getValue }) => <span className="font-mono">{getValue<string>()}</span>,
  },
  {
    header: 'Buyer',
    accessorKey: 'shippingAddress.fullName',
    cell: ({ row }) => row.original.shippingAddress.fullName,
  },
  {
    header: 'Product',
    accessorKey: 'products',
    cell: ({ getValue }) => {
      const products = getValue<VendorOrder['products']>();
      return <div className="text-sm">{getProductDisplay(products)}</div>;
    },
  },
  {
    header: 'Quantity',
    accessorKey: 'products',
    cell: ({ getValue }) => {
      const products = getValue<VendorOrder['products']>();
      const totalQty = products.reduce((sum, p) => sum + p.quantity, 0);
      return totalQty;
    },
  },
  {
    header: 'Date',
    accessorKey: 'createdAt',
    cell: ({ getValue }) => {
      const date = new Date(getValue<string>());
      return format(date, 'MM/dd/yy');
    },
  },
  {
    header: 'Status',
    accessorKey: 'status',
    cell: ({ getValue }) => <StatusBadge status={getValue<string>()} />,
  },
  {
    header: 'Amount',
    accessorKey: 'grandTotal',
    cell: ({ getValue }) => formatCurrency(getValue<number>()),
  },
 {
  header: 'Action',
  id: 'action',
  cell: ({ row }) => (
    <Link
      to={`/vendor-dashboard/orders/${row.original._id}`}
      className="text-blue-600 hover:underline text-sm"
    >
      View
    </Link>
  ),
},
];