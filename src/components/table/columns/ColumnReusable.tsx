import { PartialProduct } from '@/types/table.types';
import { ColumnDef } from '@tanstack/react-table';
import { FaEdit, FaTrash } from 'react-icons/fa';

const formatCurrency = (value: number) => `$${value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

// Stock bar (mobile-friendly)
const StockBar = ({ value }: { value: number }) => {
  const pct = Math.min(100, Math.max(0, value));
  let bg = 'bg-green-500';
  if (pct < 30) bg = 'bg-red-500';
  else if (pct < 70) bg = 'bg-yellow-500';

  return (
    <div className="w-full max-w-[120px]">
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`h-2 rounded-full ${bg}`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-xs text-gray-500 mt-1 block">{value}%</span>
    </div>
  );
};

// Reusable Product cell (image + name + SKU)
const ProductCell = ({ product }: { product: PartialProduct }) => (
  <div className="flex items-center gap-3 min-w-[180px]">
    {product.mainImageUrl ? (
      <img
        src={product.mainImageUrl}
        alt={product.name}
        className="w-10 h-10 rounded object-cover"
      />
    ) : (
      <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-500">
        ?
      </div>
    )}
    <div>
      <div className="font-medium text-sm">{product.productName}</div>
      <div className="text-xs text-gray-500">SKU: {product.productSKU}</div>
    </div>
  </div>
);

// Define action handlers as optional props (you’ll pass them from the Table component)
interface ProductColumnProps {
  onEdit?: (product: PartialProduct) => void;
  onDelete?: (product: PartialProduct) => void;
}

export const getProductColumns = ({
  onEdit,
  onDelete,
}: ProductColumnProps): ColumnDef<PartialProduct>[] => [
  {
    header: 'Product',
    accessorKey: 'productName', // ⚠️ removed leading space
    cell: ({ row }) => <ProductCell product={row.original} />,
  },
  {
    header: 'Price',
    accessorKey: 'pricePerUnit',
    cell: ({ getValue }) => formatCurrency(getValue<number>()),
  },
  {
    header: 'Stock',
    accessorKey: 'stock',
    cell: ({ getValue }) => <StockBar value={getValue<number>()} />,
  },
   // Edit column
  {
    header: 'Edit',
    id: 'edit',
    cell: ({ row }) => (
      <button
        onClick={() => onEdit?.(row.original)}
        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors outline-none"
        aria-label="Edit product"
      >
        <FaEdit className="text-sm" />
      </button>
    ),
  },
  // Delete column
  {
    header: 'Delete',
    id: 'delete',
    cell: ({ row }) => (
      <button
        onClick={() => onDelete?.(row.original)}
        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors outline-none"
        aria-label="Delete product"
      >
        <FaTrash className="text-sm" />
      </button>
    ),
  },

];