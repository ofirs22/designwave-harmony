import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { name: 'דובדבן טרי', price: 13.90, originalPrice: 16.90, isSale:true, image: '/assets/cherry.png' },
  { name: 'אבוקדו אורגני', price: 12.90, originalPrice: 16.90, isSale:true, image: '/assets/avocado.png' },
  { name: 'קיווי זהב', price: 13.90, originalPrice: 16.90, isSale:true, image: '/assets/kiwi.png' },
  { name: 'מארז ירקות עונתי', price: 2.90, originalPrice: null, isSale:false, image: '/assets/box.png' },
  { name: 'בצל', price: 13.90, originalPrice: 16.90, isSale:true, image: '/assets/onion.png' },
  { name: ' אבטיח ללא גרעינים', price: 2.90, originalPrice: null, isSale:false, image: '/assets/watermellon.png' },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <h2 
        className="text-2xl font-bold text-[#05172C] mb-8 text-center" 
        style={{ fontFamily: 'Ploni ML v2 AAA' }}
      >
       מבצעים חמים
      </h2>
      <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-[1200px] px-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              isSale={product.isSale}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
