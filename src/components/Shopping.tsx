// import React from "react";
// import { BsCart3 } from "react-icons/bs";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

// interface ShoppingProps {
//   itemCount: number;
// }

// const Shopping: React.FC<ShoppingProps> = ({ itemCount }) => {
//   const badgeBg = "bg-[#FFCC00]";
//   const badgeTextColor = "text-black";
//   const containerBorder = "border-2 border-[#006600]";

//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <div
//           className={`relative rounded-xl ${containerBorder} flex items-center justify-center cursor-pointer`}
//           style={{ width: "50px", height: "40px" }}
//         >
//           <BsCart3 className="w-6 h-6 text-[#006600]" />
//           <div 
//             className={`absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full text-xs font-bold ${badgeBg} ${badgeTextColor}`}
//           >
//             {itemCount > 99 ? "99+" : itemCount}
//           </div>
//         </div>
//       </SheetTrigger>

//       <SheetContent side="right" className="w-[300px] sm:w-[350px] md:w-[400px]">
//         <SheetHeader className="border-b pb-4">
//           <SheetTitle className="text-lg font-semibold text-gray-800">🛒 Your Cart</SheetTitle>
//         </SheetHeader>

//         <div className="mt-6 space-y-4">
//           {itemCount === 0 ? (
//             <div className="flex flex-col items-center justify-center h-full pt-10">
//               <BsCart3 className="w-12 h-12 text-gray-400 mb-4" />
//               <p className="text-gray-500 text-center text-base font-medium">
//                 Your cart is currently empty.
//               </p>
//               <p className="text-gray-400 text-sm mt-1">Start adding some items!</p>
//             </div>
//           ) : (
//             <div>
//               <p className="text-lg font-semibold text-gray-800">
//                 You have <span className="text-blue-600">{itemCount}</span> item{itemCount !== 1 ? "s" : ""} in your cart.
//               </p>
//               <div className="mt-4 p-4 bg-gray-50 rounded-lg border">
//                 <p className="text-sm text-gray-600 italic">[Cart items list goes here]</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default Shopping;




import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from "@/components/ui/sheet";
import { IoTrashOutline } from "react-icons/io5";
// import b from "@/assets/b.jpg"
import aa from "@/assets/aa.jpg"
// --- CART ITEM TYPE ---
export interface SheetCartItemData {
  id: string;
  productName: string;
  currentPrice: number;
  originalPrice: number;
  quantity: number;
  imageSrc: string;
  productBrand: string;
}

// --- CART ITEM COMPONENT ---
interface SheetCartItemProps {
  item: SheetCartItemData;
  onQuantityChange?: (id: string, newQuantity: number) => void;
  onDelete?: (id: string) => void;
}

const SheetCartItem: React.FC<SheetCartItemProps> = ({ item, onQuantityChange, onDelete }) => {
  const handleDecrement = () => {
    if (item.quantity > 1 && onQuantityChange) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (onQuantityChange) {
      onQuantityChange(item.id, item.quantity + 1);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(item.id);
    }
  };

  return (
    <div className="flex items-start p-3 border-b bg-white hover:bg-gray-50 transition-colors">
      {/* Image */}
      <div className="w-16 h-16 mr-3 border rounded overflow-hidden flex-shrink-0 flex items-center justify-center bg-gray-100">
        <img src={aa} className="object-cover w-full h-full" />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 line-clamp-2">{item.productName}</p>
        <p className="text-xs text-gray-500 mt-0.5">{item.productBrand}</p>

        <div className="flex justify-between items-center mt-2">
          {/* Price */}
          <div>
            <span className="text-sm font-bold text-orange-500 mr-2">৳ {item.currentPrice.toLocaleString()}</span>
            <span className="text-xs text-gray-400 line-through">৳ {item.originalPrice.toLocaleString()}</span>
          </div>

          {/* Delete */}
          <IoTrashOutline
            onClick={handleDelete}
            className="w-4 h-4 text-gray-400 cursor-pointer hover:text-red-500 transition flex-shrink-0"
            title="Remove"
          />
        </div>

        {/* Quantity Controls */}
        <div className="mt-2 flex items-center space-x-2">
          <button
            onClick={handleDecrement}
            className="w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            -
          </button>
          <span className="text-sm">{item.quantity}</span>
          <button
            onClick={handleIncrement}
            className="w-6 h-6 flex items-center justify-center bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

// --- SHOPPING CART COMPONENT ---
interface ShoppingProps {
  itemCount: number;
  cartItems?: SheetCartItemData[];
  onQuantityChange?: (id: string, newQuantity: number) => void;
  onDelete?: (id: string) => void;
}

const Shopping: React.FC<ShoppingProps> = ({ itemCount, cartItems = [], onQuantityChange, onDelete }) => {
  const totalCost = cartItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="relative rounded-xl border-2 border-[#006600] flex items-center justify-center cursor-pointer w-12 h-12">
          <BsCart3 className="w-6 h-6 text-[#006600]" />
          {itemCount > 0 && (
            <div className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-yellow-400 text-black text-xs font-bold">
              {itemCount > 99 ? "99+" : itemCount}
            </div>
          )}
        </div>
      </SheetTrigger>

      <SheetContent side="right" className="w-[300px] sm:w-[350px] md:w-[400px] flex flex-col">
        <SheetHeader className="border-b pb-4 flex-shrink-0">
          <SheetTitle className="text-xl font-bold text-gray-800">🛒 Your Cart ({itemCount})</SheetTitle>
        </SheetHeader>

        <div className="mt-4 flex-1 overflow-y-auto space-y-2">
          {itemCount === 0 || cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full pt-10 text-center">
              <BsCart3 className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-500 text-base font-medium">Your cart is currently empty.</p>
              <p className="text-gray-400 text-sm mt-1">Start adding some items!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {cartItems.map((item) => (
                <SheetCartItem
                  key={item.id}
                  item={item}
                  onQuantityChange={onQuantityChange}
                  onDelete={onDelete}
                />
              ))}
            </div>
          )}
        </div>

        {itemCount > 0 && (
          <SheetFooter className="mt-4 pt-4 border-t border-gray-200 flex flex-col space-y-3 sm:space-x-0">
            <div className="flex justify-between items-center font-semibold text-lg">
              <span className="text-gray-700">Subtotal:</span>
              <span className="text-orange-500">৳ {totalCost.toLocaleString()}</span>
            </div>
            <button className="w-full bg-[#006600] text-white py-3 rounded-lg font-bold text-base hover:bg-[#004d33] transition-colors">
              Proceed to Checkout
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Shopping;
