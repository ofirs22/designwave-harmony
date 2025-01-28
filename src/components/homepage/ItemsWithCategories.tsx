import React, { useState, useEffect } from 'react';
import CategoryProductCard from './CategoryProductCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';

interface Product {
  name: string;
  price: number;
  originalPrice: number | null;
  image: string;
  isSale: boolean;
}

interface Category {
  title: string;
  products: Product[];
}

const categories: Category[] = [
  {
    title: 'תבלינים',
    products: [
      { name: 'פלפל שחור', price: 34.90, originalPrice: 48.90, image: '/assets/pepper.png', isSale: true },
      { name: 'פפריקה מתוקה', price: 34.90, originalPrice: null, image: '/assets/paprika.png', isSale: false },
      { name: 'כורכום', price: 34.90, originalPrice: 48.90, image: '/assets/turmeric.png', isSale: true },
      { name: 'פסטה', price: 34.90, originalPrice: null, image: '/assets/pasta.png', isSale: false },
    ],
  },
  {
    title: 'דגנים ומאפים',
    products: [
      { name: 'עוגת שוקולד', price: 19.90, originalPrice: null, image: '/assets/chocolate-cake.png', isSale: false },
      { name: 'קורנפלקס', price: 34.90, originalPrice: 48.90, image: '/assets/cornflakes.png', isSale: true },
      { name: 'לחם לבן', price: 34.90, originalPrice: 48.90, image: '/assets/white-bread.png', isSale: true },
      { name: 'בגט', price: 34.90, originalPrice: null, image: '/assets/baguette.png', isSale: false },
    ],
  },
  {
    title: 'חטיפים ושימורים',
    products: [
      { name: 'ביסלי', price: 4.90, originalPrice: null, image: '/assets/bisli.png', isSale: false },
      { name: 'זיתים ירוקים', price: 34.90, originalPrice: 48.90, image: '/assets/green-olives.png', isSale: true },
      { name: 'חטיף אנרגיה', price: 34.90, originalPrice: null, image: '/assets/energy-bar.png', isSale: false },
      { name: 'קורנפלקס', price: 34.90, originalPrice: null, image: '/assets/cornflakes.png', isSale: false },
    ],
  },
];

const ItemsWithCategories: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the 'md' breakpoint in Tailwind
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const renderMobileView = (category: Category, index: number) => (
    <div key={index} className="w-full rounded-lg p-4 sm:p-6">
      <div className="text-right mb-6">
        <h3 
          className="text-xl sm:text-2xl font-semibold text-[#05172C] mb-2"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          {category.title}
        </h3>
        <div className="w-20 sm:w-[100px] h-[3px] bg-[#00BAFF]"></div>
      </div>
      
      <div className="relative">
        <Splide
          options={{
            type: 'slide',
            perPage: 1,
            perMove: 1,
            gap: '1rem',
            pagination: true,
            arrows: false, // Removed arrows
            drag: 'free',
            direction: 'rtl',
            rewind: true,
            autoplay: false,
            pauseOnHover: true,
            resetProgress: false,
            height: 'auto',
            width: '100%',
            trimSpace: true,
            focus: 'center',
            classes: {
              pagination: 'splide__pagination', // Simplified pagination classes
              page: 'splide__pagination__page !bg-[#B7BDC4]', // Base dot style
            },
          }}
        >
          {category.products.map((product, idx) => (
            <SplideSlide key={idx}>
              <div className="pb-8 px-2">
                <CategoryProductCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.image}
                  isSale={product.isSale}
                />
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );

  const renderDesktopView = (category: Category, index: number) => (
    <div key={index} className="w-full rounded-lg p-4 sm:p-6">
      <div className="text-right mb-6">
        <h3 
          className="text-xl sm:text-2xl md:text-[24px] font-semibold text-[#05172C] mb-2"
          style={{ fontFamily: 'Ploni ML v2 AAA' }}
        >
          {category.title}
        </h3>
        <div className="w-20 sm:w-[100px] h-[3px] bg-[#00BAFF]"></div>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {category.products.map((product, idx) => (
          <div key={idx}>
            <CategoryProductCard
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              isSale={product.isSale}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="bg-[#f4f5f5] py-8 sm:py-12 md:py-16" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            isMobile ? renderMobileView(category, index) : renderDesktopView(category, index)
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItemsWithCategories;
