// app/vendor/orders/[orderId]/page.tsx
"use client";

import { useGetOrderDetailsQuery } from "@/store/Api/ProductApi.ts/OrdersApi";
import { format } from "date-fns";
import {
  FaCheckCircle,
  FaClock,
  FaTruck,
  FaBox,
  FaCreditCard,
  FaEnvelope,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const { data, isLoading, isError } = useGetOrderDetailsQuery(
    orderId as string
  );

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow h-20"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="p-6 text-red-700">
        Failed to load order details. Please try again.
      </div>
    );
  }

  const order = data.data;

  // Format date helper
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return format(date, "dd MMM yyyy, h:mm a");
  };

  // Status timeline
  const getStatusTimeline = () => {
    const statuses = [
      {
        label: "Order placed",
        status: "PENDING",
        icon: FaCheckCircle,
        color: "text-green-600",
      },
      {
        label: "Preparing for shipment",
        status: "PROCESSING",
        icon: FaClock,
        color: "text-yellow-600",
      },
      {
        label: "Out of delivery",
        status: "SHIPPED",
        icon: FaTruck,
        color: "text-blue-600",
      },
      {
        label: "Delivered",
        status: "DELIVERED",
        icon: FaBox,
        color: "text-purple-600",
      },
    ];

    return statuses.map((item, i) => {
      const isActive = order.status === item.status;
      const isCompleted = order.statusHistory.some(
        (h) => h.status === item.status
      );
      const Icon = item.icon;

      return (
        <div
          key={i}
          className={`flex items-center ${
            i < statuses.length - 1 ? "mb-4" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isActive
                ? "bg-blue-100 border-2 border-blue-500"
                : isCompleted
                ? "bg-green-100 border-2 border-green-500"
                : "bg-gray-100 border-2 border-gray-300"
            }`}
          >
            <Icon
              className={`${
                isActive
                  ? "text-blue-600"
                  : isCompleted
                  ? "text-green-600"
                  : "text-gray-400"
              } w-4 h-4`}
            />
          </div>
          <div className="ml-3">
            <div
              className={`font-medium ${
                isActive
                  ? "text-blue-700"
                  : isCompleted
                  ? "text-green-700"
                  : "text-gray-700"
              }`}
            >
              {item.label}
            </div>
            {order.statusHistory.find((h) => h.status === item.status) && (
              <div className="text-xs text-gray-500 mt-1">
                {formatDate(
                  order.statusHistory.find((h) => h.status === item.status)
                    ?.timestamp || ""
                )}
              </div>
            )}
          </div>
        </div>
      );
    });
  };

  // Calculate total products
  const totalProducts = order.products.reduce((sum, p) => sum + p.quantity, 0);

  // Format currency
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 2,
    }).format(value);

  return (
    <div className=" mx-w-[100%] ">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold">Order Details</h1>
          <p className="text-sm text-gray-600 mt-1">
            Last order id:{" "}
            <span className="font-mono">{order.orderNumber}</span>
          </p>
        </div>
        <button className="text-red-600 hover:text-red-800 font-medium text-sm flex items-center">
          <span>Cancel order</span>
          <FaEnvelope className="ml-1 w-4 h-4" />
        </button>
      </div>

      {/* Recent Order Status */}
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Recent order status:</span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                order.status === "PENDING"
                  ? "bg-yellow-100 text-yellow-800"
                  : order.status === "PROCESSING"
                  ? "bg-blue-100 text-blue-800"
                  : order.status === "SHIPPED"
                  ? "bg-indigo-100 text-indigo-800"
                  : order.status === "DELIVERED"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {order.status}
            </span>
          </div>
          <div className="text-sm text-gray-600">
            Estimate delivery time:{" "}
            {order.estimatedDeliveryDate
              ? format(new Date(order.estimatedDeliveryDate), "dd MMM yyyy")
              : "Not set"}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Total amount</div>
            <div className="text-xl font-bold">
              {formatCurrency(order.grandTotal)}
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Total product</div>
            <div className="text-xl font-bold">{totalProducts}</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-sm text-gray-500">Shipping method</div>
            <div className="text-xl font-bold text-yellow-600">
              Priority shipping
            </div>
          </div>
        </div>
      </div>

      {/* Order Status Timeline */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Order status</h2>
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          {getStatusTimeline()}
        </div>
      </div>

      {/* Shipping & Payment Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Shipping Information */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Shipping information</h3>
            <FaEnvelope className="text-blue-600 cursor-pointer" />
          </div>
          <div className="mb-4">
            <div className="font-medium">Delivery Address</div>
            <div className="text-sm text-gray-600 mt-1">
              {order.shippingAddress.fullName}
              <br />
              {order.shippingAddress.addressSpecific},{" "}
              {order.shippingAddress.city}, {order.shippingAddress.state},{" "}
              {order.shippingAddress.country} {order.shippingAddress.zipCode}
            </div>
          </div>
          <div>
            <div className="font-medium">Shipping Details</div>
            <div className="text-sm text-gray-600 mt-1">
              Carrier: DHL Express
              <br />
              Tracking number: #{order.trackingNumber || "N/A"}
            </div>
          </div>
        </div>

        {/* Payment Information */}
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Payment information</h3>
            <FaCreditCard className="text-blue-600 cursor-pointer" />
          </div>
          <div className="mb-4">
            <div className="flex items-center">
              <FaCreditCard className="text-blue-600 mr-2" />
              <span className="text-sm">
                **** **** **** {order.transactionId.slice(-4)}
              </span>
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Payment Date:{" "}
              {order.paymentHistory.length > 0
                ? formatDate(order.paymentHistory[0].timestamp)
                : "Not paid"}
            </div>
          </div>
          <div>
            <div className="font-medium">Transaction ID</div>
            <div className="text-sm text-gray-600 mt-1">
              #{order.transactionId}
            </div>
          </div>
          <div className="mt-4">
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                order.paymentStatus === "PAID"
                  ? "bg-green-100 text-green-800"
                  : order.paymentStatus === "PENDING"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {order.paymentStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Need Help? */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Need help?</h3>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
          Send message
        </button>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
