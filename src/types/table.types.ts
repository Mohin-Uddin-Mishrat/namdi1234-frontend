import { ColumnDef } from "@tanstack/react-table";

export interface IProduct {
  availableSize: string;
  companyName: string;
  currency: string;
  gender: string;
  height: number;
  length: number;
  mainImageUrl: string;
  pricePerUnit: number;
  productCategory: string;
  productDescription: string;
  productName: string;
  productSKU: string;
  sideImageUrl: string;
  specialPrice: number;
  specialPriceEndingDate: string; // ISO string format
  specialPriceStartingDate: string; // ISO string format
  stock: number;
  userId: string;
  weight: number;
  width: number;
  _id: string;
}
export type PartialProduct = Partial<IProduct>;

export interface ReusableTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  showFilter?: boolean;
  filterPlaceholder?: string;
  pageSize?: number; // default: 10
}
