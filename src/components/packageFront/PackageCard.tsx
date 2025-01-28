import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { PackageItem } from './PackageData';

interface PackageCardProps {
  package: PackageItem;
}

const PackageCard: React.FC<PackageCardProps> = ({ package: packageItem }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-4 md:p-10 gap-4 md:gap-8 w-full md:w-[69rem]">
      {/* Image Section */}
      <div className="w-full md:w-[17.438rem] h-[12rem] md:h-[17.438rem] bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={packageItem.image}
          alt={packageItem.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between w-full md:w-[44.688rem]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
          <div className="flex items-center gap-4">
            <span className="text-[#FC4B4E] text-xl md:text-[2.25rem] font-semibold" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              ₪{packageItem.price.toFixed(2)}
            </span>
            <span className="text-[#778080] text-lg md:text-[1.375rem] line-through" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
              ₪{packageItem.originalPrice.toFixed(2)}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[#05172C] text-xl md:text-[1.5rem] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
              {packageItem.title}
            </span>
            <div className="w-full h-[0.188rem] bg-[#00BAFF]"></div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[0.063rem] bg-[#D2D2D2] my-4"></div>

        {/* Description */}
        <p className="text-[#05172C] text-base md:text-[1.25rem] whitespace-pre-line" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
          {packageItem.description}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button className="flex items-center justify-center w-12 h-12 bg-white shadow-md rounded-full">
            <FontAwesomeIcon icon={faHeart} className="text-[#05172C] text-lg" />
          </button>
          <button className="flex items-center justify-center px-4 md:px-8 py-3 border border-[#778080] rounded-full text-[#778080] text-base md:text-[1.25rem] font-semibold" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
            לפרוט המארז
          </button>
          <button className="flex items-center justify-center px-4 md:px-8 py-3 bg-[#00BAFF] text-white rounded-full text-base md:text-[1.25rem] font-semibold shadow-md" style={{ fontFamily: 'Ploni DL 1.1 AAA' }}>
            שלח לעגלה
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;