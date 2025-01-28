import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  isReversed?: boolean;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  originalPrice,
  description,
  image,
  isReversed = false,
  isOpen,
  onToggle,
}) => {
  return (
    <div className={`flex ${isReversed ? 'flex-row-reverse' : 'flex-row'} bg-white shadow-lg rounded-lg p-10 gap-8`}>
      <div className="flex-shrink-0 bg-white shadow-md rounded-lg overflow-hidden" style={{ width: '17.438rem', height: '17.438rem' }}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-between" style={{ width: '44.688rem' }}>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-[#FC4B4E] text-[2.25rem] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              ₪{price.toFixed(2)}
            </span>
            <span className="text-[#778080] text-[1.375rem] line-through" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              ₪{originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[#05172C] text-[1.5rem] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              {title}
            </span>
            <div className="w-full h-[0.188rem] bg-[#00BAFF]"></div>
          </div>
        </div>

        <div className="w-full h-[0.063rem] bg-[#D2D2D2] my-4"></div>

        <p className="text-[#05172C] text-[1.25rem] whitespace-pre-line" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
          {description}
        </p>

        <div className="flex items-center gap-4 mt-4">
          <button className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-full">
            <FontAwesomeIcon icon={faHeart} className="text-[#05172C] text-lg" />
          </button>
          <button className="flex items-center justify-center px-8 py-3 border border-[#778080] rounded-full text-[#778080] text-[1.25rem] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
            לפרוט המארז
          </button>
          <button className="flex items-center justify-center px-8 py-3 bg-[#00BAFF] text-white rounded-full text-[1.25rem] font-semibold shadow-md" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
            שלח לעגלה
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;