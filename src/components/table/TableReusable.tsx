import  {  useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { ReusableTableProps } from '@/types/table.types';

const ReusableTable = <T,>({
  data,
  columns,
  showFilter = false,
  filterPlaceholder = 'Search...',
  pageSize: defaultPageSize = 10,
}: ReusableTableProps<T>) => {
  const [globalFilter, setGlobalFilter] = useState('');
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: defaultPageSize,
  });

  const table = useReactTable({
    data: data ?? [],
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    autoResetPageIndex: false,
  });

  // Pagination info
  const totalRows = table.getFilteredRowModel()?.rows?.length ?? 0;
  const startRow = pagination.pageIndex * pagination.pageSize + 1;
  const endRow = Math.min(startRow + pagination.pageSize - 1, totalRows);

  return (
    <div className="w-full">
      {/* Filter */}
      {showFilter && (
        <div className="mb-4">
          <input
            type="text"
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder={filterPlaceholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      )}

      {/* Table Container (scrollable on mobile) */}
      <div className="overflow-x-auto border border-gray-200 rounded-lg">
        <table className="min-w-full bg-white text-sm">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {table.getPageCount() > 1 && (
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-sm text-gray-600">
            Showing <span className="font-medium">{startRow}</span> to{' '}
            <span className="font-medium">{endRow}</span> of{' '}
            <span className="font-medium">{totalRows}</span> results
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="p-2 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronLeft />
            </button>

            {/* Page buttons: only show first, last, and current ±1 to avoid overflow on mobile */}
            {(() => {
              const pageCount = table.getPageCount();
              const currentPage = table.getState().pagination.pageIndex;
              const delta = 1;
              const range = [];
              for (let i = Math.max(0, currentPage - delta); i <= Math.min(pageCount - 1, currentPage + delta); i++) {
                range.push(i);
              }
              if (range[0] !== 0) {
                range.unshift(0);
                if (range[1] !== 1) range.splice(1, 0, -1); // ellipsis placeholder
              }
              if (range[range.length - 1] !== pageCount - 1) {
                if (range[range.length - 1] !== pageCount - 2) range.push(-1);
                range.push(pageCount - 1);
              }

              return range.map((page, i) =>
                page === -1 ? (
                  <span key={i} className="px-3 py-1 text-gray-500">...</span>
                ) : (
                  <button
                    key={i}
                    onClick={() => table.setPageIndex(page)}
                    className={`px-3 py-1 rounded border ${
                      page === currentPage
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page + 1}
                  </button>
                )
              );
            })()}

            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="p-2 rounded border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
      )}

      {/* Empty state */}
      {table.getRowModel()?.rows?.length === 0 && (
        <div className="text-center py-8 text-gray-500">No data found</div>
      )}
    </div>
  );
};

export default ReusableTable;