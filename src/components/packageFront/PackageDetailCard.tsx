import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

interface PackageItem {
  title: string;
  price: number;
  originalPrice: number;
  image: string;
}

interface PackageDetailCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  toggleHeart: (id: string) => void;
  items: PackageItem[];
  isFavorite: boolean;
}

const PackageDetailCard: React.FC<PackageDetailCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  description,
  image,
  isOpen,
  isFavorite,
  onToggle,
  toggleHeart,
  items
}) => {
  // Create a state object to track favorites for each item
  const [itemFavorites, setItemFavorites] = useState<{ [key: number]: boolean }>({});

  const toggleItemFavorite = (index: number) => {
    setItemFavorites(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div 
      className="w-[69rem] bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300"
      style={{ height: isOpen ? 'auto' : '22.438rem' }}
    >
      <div className="p-10 flex flex-col gap-[1.875rem]">
        {/* Main Content */}
        <div className="flex flex-col gap-[1.875rem]">
          {/* Header Section */}
          <div className="flex gap-[1.875rem]">
            {/* Left Content */}
            <div className="flex-1 bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
              <div className="flex items-start justify-between">
                {/* Price Section */}
                <div className="flex items-center gap-[1.625rem]">
                  <button 
                    className={`w-[3.313rem] h-[3.313rem] bg-[#00BAFF] rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${isFavorite ? 'bg-[#00BAFF]' : 'bg-white'}`}
                    onClick={() => toggleHeart(id)}
                  >
                    <FontAwesomeIcon 
                      icon={isFavorite ? solidHeart : regularHeart} 
                      className={`text-[0.835rem] ${isFavorite ? 'text-white' : 'text-[#00BAFF]'}`}
                    />
                  </button>
                  <button 
                    className="h-[3.25rem] px-[1.875rem] bg-[#00BAFF] text-white rounded-full flex items-center justify-center shadow-md"
                    style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                  >
                    <span className="text-[1.25rem] font-semibold">שלח לעגלה</span>
                  </button>
                  <div className="flex items-center gap-[1rem]">
                    <span 
                      className="text-[2.25rem] font-semibold text-[#FC4B4E]"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    >
                      ₪{price.toFixed(2)}
                    </span>
                    <span 
                      className="text-[1.375rem] text-[#778080] line-through"
                      style={{ fontFamily: 'Ploni ML v2 AAA' }}
                    >
                      ₪{originalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Title Section */}
                <div className="flex flex-col items-end">
                  <h2 
                    className="text-[1.5rem] font-semibold text-[#05172C]"
                    style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                  >
                    {title}
                  </h2>
                  <div className="w-full h-[0.188rem] bg-[#00BAFF]" />
                </div>
              </div>

              {/* Description */}
              <p 
                className="text-[1.25rem] text-[#05172C] mt-4"
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                {description}
              </p>
            </div>

            {/* Image Container */}
            <div className="w-[5.938rem] bg-white rounded-lg shadow-md p-6">
              <img
                src={image}
                alt=""
                className="w-[4.438rem] h-[5.25rem] object-cover"
              />
            </div>
          </div>
        </div>

        {/* Expandable Items Section */}
        {isOpen && (
          <div className="flex flex-col gap-[1.25rem]">
            <div className="w-full h-[0.063rem] bg-[#D2D2D2]" />
            
            {items.map((item, index) => (
              <div key={index} className="flex gap-[1.25rem] items-center">
                <div className="flex-1">
                  <div className="flex items-center gap-[1.625rem]">
                    <button 
                      className={`w-[3.313rem] h-[3.313rem] border border-[#778080] rounded-full flex items-center justify-center shadow-md transition-colors duration-300 ${itemFavorites[index] ? 'bg-[#00BAFF]' : 'bg-white'}`}
                      onClick={() => toggleItemFavorite(index)}
                    >
                      <FontAwesomeIcon 
                        icon={itemFavorites[index] ? solidHeart : regularHeart} 
                        className={`text-[0.835rem] ${itemFavorites[index] ? 'text-white' : 'text-[#00BAFF]'}`}
                      />
                    </button>
                    <button 
                      className="h-[3.25rem] px-[1.875rem] border border-[#778080] text-[#778080] rounded-full flex items-center justify-center"
                      style={{ fontFamily: 'Ploni DL 1.1 AAA' }}
                      onClick={() => onToggle(id)}
                    >
                      <span className="text-[1.25rem] font-semibold">לפירוט המארז</span>
                    </button>
                    <div className="flex items-center gap-[1.5rem]">
                      <span 
                        className="text-[1.375rem] font-semibold text-[#FC4B4E]"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        ₪{item.price.toFixed(2)}
                      </span>
                      <span 
                        className="text-[1.375rem] text-[#778080] line-through"
                        style={{ fontFamily: 'Ploni ML v2 AAA' }}
                      >
                        ₪{item.originalPrice.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-[4.144rem] h-[5rem] bg-[#F6F5F5]">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageDetailCard;
