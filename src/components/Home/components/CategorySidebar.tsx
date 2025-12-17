// import { ChevronRight } from "lucide-react";

// export default function CategorySidebar({ categories }) {
//   return (
//     <div className="bg-green-800 text-white rounded-lg p-6">
//       <h2 className="text-xl font-bold mb-4">All Categories</h2>
//       <ul className="space-y-3">
//         {categories.map((cat) => (
//           <li
//             key={cat}
//             className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded transition cursor-pointer"
//           >
//             <ChevronRight className="w-5 h-5 text-green-300" />
//             <span>{cat}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import { ChevronRight } from "lucide-react";

interface CategorySidebarProps {
  categories: string[];
}

export default function CategorySidebar({ categories }: CategorySidebarProps) {
  return (
    <div className="bg-green-800 text-white rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <ul className="space-y-3">
        {categories.map((cat) => (
          <li
            key={cat}
            className="flex items-center gap-3 hover:bg-green-700 px-3 py-2 rounded transition cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-green-300" />
            <span>{cat}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
