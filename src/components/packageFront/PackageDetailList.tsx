import React, { useState } from 'react';
import PackageDetailCard from './PackageDetailCard';

interface PackageItem {
  id: string;
  title: string;
  price: number;
  originalPrice: number;
  description: string;
  image: string;
  items: Array<{
    title: string;
    price: number;
    originalPrice: number;
    image: string;
  }>;
}

interface PackageDetailListProps {
  packages: PackageItem[];
}

const PackageDetailList: React.FC<PackageDetailListProps> = ({ packages }) => {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});

  const handleToggle = (id: string) => {
    setOpenCardId(openCardId === id ? null : id);
  };

  const handleToggleHeart = (id: string) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col gap-[1.875rem]">
      {packages.map((pkg) => (
        <PackageDetailCard
          key={pkg.id}
          {...pkg}
          isOpen={openCardId === pkg.id}
          onToggle={handleToggle}
          toggleHeart={handleToggleHeart}
          isFavorite={favorites[pkg.id] || false}
        />
      ))}
    </div>
  );
};

export default PackageDetailList;