// BlogTeasers.tsx
import blog2 from "@/assets/blog2.jpg"
import blog1 from "@/assets/blog1.jpg"
import React from 'react';

// --- 1. Data Structure ---
interface Article {
  id: number;
  imageUrl: string;
  tag: string;
  title: string;
  date: string;
  comments: number;
  link: string;
}

const articles: Article[] = [
  {
    id: 1,
    // Replace with your actual image URL or import (e.g., import image1 from './assets/img1.jpg')
    imageUrl: blog2,
    tag: 'COST SAVINGS',
    title: 'Understanding the Benefits of Solar Energy for Nigerian Households',
    date: 'October 14, 2025',
    comments: 0,
    link: '#',
  },
  {
    id: 2,
    // Replace with your actual image URL or import
    imageUrl: blog1,
    tag: 'COMMUNITY IMPACT',
    title: 'How Solar Energy is Revolutionizing Off-Grid Communities in Africa',
    date: 'October 14, 2025',
    comments: 0,
    link: '#',
  },
  // Add more articles as needed
];

// --- 2. Sub-Component: Article Card ---
const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image Container with Tag Overlay */}
      <div className="relative h-64 sm:h-80 w-full">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        {/* Tag Overlay */}
        <div className="absolute top-4 right-4 bg-gray-900/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
          {article.tag}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold leading-snug text-gray-900 mb-4">
          {article.title}
        </h3>

        {/* Read More Link */}
        <a 
          href={article.link} 
          className="inline-block text-green-700 font-semibold uppercase text-sm tracking-widest transition duration-150 hover:text-green-500"
        >
          READ MORE »
        </a>
        
        {/* Metadata (Date & Comments) */}
        <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.comments} Comments</span>
        </div>
      </div>
    </div>
  );
};

// --- 3. Main Component: Blog Teaser Section ---
const BlogTeasersSection: React.FC = () => {
  return (
    // Section background color matching the light green from the image
    <section className="bg-green-50/50 py-16 sm:py-24">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        {/* Grid for two columns (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTeasersSection;