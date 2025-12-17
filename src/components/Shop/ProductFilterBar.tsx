import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const categories = ['All Products', 'Inverters', 'Batteries', 'Solar Panels', 'CCTV Cameras', 'Accessories'];
const options1 = ['None', 'Brand X', 'Brand Y', 'Brand Z'];
const options2 = ['None', 'Model 1', 'Model 2', 'Model 3'];

const MIN_PRICE = 2145;
const MAX_PRICE = 3630000;

interface SelectDropdownProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
    className?: string;
}

const SelectDropdown: React.FC<SelectDropdownProps> = ({ label, value, options, onChange, className = '' }) => (
    <div className={`relative ${className}`}>
        <label htmlFor={label} className="sr-only">{label}</label>
        <select
            id={label}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="block appearance-none w-full bg-green-50/70 border border-green-200 text-green-800 py-3.5 pl-3 pr-8 rounded-lg leading-tight focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition duration-150 shadow-inner text-sm"
        >
            {options.map((option) => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-700">
            <ChevronDown className="w-4 h-4" />
        </div>
    </div>
);

const ProductFilterBar: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);
    const [selectedOption1, setSelectedOption1] = useState(options1[0]);
    const [selectedOption2, setSelectedOption2] = useState(options2[0]);
    const [minDisplayedPrice, setMinDisplayedPrice] = useState(MIN_PRICE);
    const [maxDisplayedPrice, setMaxDisplayedPrice] = useState(MAX_PRICE);
    console.log(setMinDisplayedPrice);
    console.log(setMaxDisplayedPrice);
    const handleFilter = () => {
        console.log('Filtering with:', {
            category: selectedCategory,
            option1: selectedOption1,
            option2: selectedOption2,
        });
    };

    const formatCurrency = (amount: number) => `₦${amount.toLocaleString('en-US')}`;

    return (
        <div className="p-4 sm:p-6  rounded-xl border border-gray-100 font-inter w-full mx-auto">
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center  lg:space-x-4">

                {/* Dropdown Filters */}
                <SelectDropdown
                    label="Category Filter"
                    value={selectedCategory}
                    options={categories}
                    onChange={setSelectedCategory}
                    className="lg:w-96 flex-shrink-0"
                />
                <SelectDropdown
                    label="Option 1 Filter"
                    value={selectedOption1}
                    options={options1}
                    onChange={setSelectedOption1}
                    className="lg:w-56 flex-shrink-0"
                />
                <SelectDropdown
                    label="Option 2 Filter"
                    value={selectedOption2}
                    options={options2}
                    onChange={setSelectedOption2}
                    className="lg:w-72 flex-shrink-0"
                />

                {/* Price Range and Filter Button */}
                <div className="flex flex-col flex-grow items-start justify-start space-y-3 pt-3 lg:pt-0 min-w-[200px]">
                    {/* Slider Visualization */}
                    <div className="relative flex-shrink-0 h-2 bg-green-200 rounded-full w-full">
                        <div
                            className="absolute h-full bg-green-600 rounded-full"
                            style={{ left: '0%', width: '100%' }}
                            aria-label="Price range slider indicator"
                        ></div>
                        <div
                            className="absolute -top-1.5 -ml-1 h-5 w-5 bg-green-800 rounded-full shadow-lg"
                            style={{ left: '0%' }}
                        ></div>
                        <div
                            className="absolute -top-1.5 -ml-1 h-5 w-5 bg-green-800 rounded-full shadow-lg"
                            style={{ right: '0%' }}
                        ></div>
                    </div>

                    {/* Filter Button and Price */}
                    <div className="flex items-center space-x-4 w-full flex-wrap sm:flex-nowrap">
                        <button
                            onClick={handleFilter}
                            className="flex items-center justify-center py-2 px-4 bg-green-300 hover:bg-green-400 text-green-800 font-semibold rounded-lg shadow-sm transition duration-150 border border-green-400 focus:outline-none focus:ring-4 focus:ring-green-300 active:scale-95 transform min-w-[80px]"
                        >
                            Filter
                        </button>
                        <span className="text-gray-700 text-sm font-semibold whitespace-nowrap">
                            Price: {formatCurrency(minDisplayedPrice)} – {formatCurrency(maxDisplayedPrice)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductFilterBar;
