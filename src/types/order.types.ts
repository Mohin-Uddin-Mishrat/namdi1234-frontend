// types/order.types.ts
export interface ProductInOrder {
  productId: {
    _id: string;
    productName: string;
    pricePerUnit: number;
    specialPrice?: number | null;
    mainImageUrl: string;
    userId: string;
  };
  quantity: number;
  price: number;
  total: number;
}

export interface ShippingAddress {
  fullName: string;
  mobileNumber: string;
  country: string;
  addressSpecific: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface OrderStatusHistory {
  status: string;
  timestamp: string;
  note: string;
}

export interface VendorOrder {
  _id: string;
  userId: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
  orderNumber: string;
  shippingAddress: ShippingAddress;
  products: ProductInOrder[];
  totalPrice: number;
  shippingFee: number;
  discount: number;
  tax: number;
  grandTotal: number;
  promoCode: string | null;
  estimatedDeliveryDate: string | null;
  actualDeliveryDate: string | null;
  status: 'PENDING' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  paymentStatus: 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
  paymentMethodUsed: string;
  transactionId: string;
  orderNotes: string;
  trackingNumber: string | null;
  statusHistory: OrderStatusHistory[];
  createdAt: string;
  updatedAt: string;
  vendorTotal: number;
}