import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { packageData } from './PackageData';

const PackageList: React.FC = () => {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  return (
    <div className="bg-[#f4f5f5] py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h3 
            className="text-[2rem] sm:text-[2.625rem] md:text-[3.5rem] leading-[1.2] font-bold text-[#05172C]"
            style={{ fontFamily: 'Ploni ML v2 AAA' }}
          >
            המארזים השווים שלנו
          </h3>
        </div>
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          {packageData.map((packageItem, index) => (
            <ProductCard 
              key={packageItem.id}
              {...packageItem}
              isReversed={index % 2 === 1}
              isOpen={openCardId === packageItem.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageList;