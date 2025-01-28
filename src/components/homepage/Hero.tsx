import React from 'react';
import PriceBadge from '../PriceBadge';
import Carousel from './Carousel';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section 
      className="relative w-full overflow-hidden bg-white"
      style={{ overflowX: 'hidden' }}
      dir="rtl"
    >
      {/* Rest of the component remains exactly the same */}
      <div className="relative">
        {/* Background Image - Hidden on Mobile */}
        <div 
          className="hidden md:block absolute w-full lg:w-[calc(50%+250px)] lg:-translate-x-[12.5rem] inset-y-0 left-0 h-[calc(100%-100px)] md:h-[calc(100%-200px)]"
          style={{
            backgroundImage: "url('/assets/cover-mask.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backgroundBlendMode: 'multiply',
          }}
        />

        <div className="container mx-auto px-4 pt-16 pb-24 relative z-10">
          <div className="flex flex-wrap-reverse lg:flex-wrap items-center justify-between">
            {/* Right Section */}
            <div className="w-full lg:w-[calc(50%-250px)] mb-12 lg:mb-0 text-right order-2 lg:order-1">
              <span className="text-xl md:text-2xl text-[#05172C]" style={{ fontFamily: 'Ploni ML v2 AAA' }}>
                חוסכים מאות שקלים
              </span>
              <h1 
                className="text-3xl md:text-5xl leading-tight mt-6 mb-6 md:mt-8 md:mb-8 text-[#05172C]" 
                style={{ fontFamily: 'Ploni ML v2 AAA' }}
              >
                בכל קנייה!
              </h1>
              <p className="text-lg md:text-2xl text-[#264653] mb-6 md:mb-8">
                הצטרפו למהפכת הקניות של סמארט-בסקט והוסיפו כסף מכל קניה שלכם!
              </p>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5 justify-start">
                <button 
                  className="px-8 py-3 bg-[#00BAFF] text-white rounded-full font-semibold"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  למבצעים
                </button>
                <button 
                  className="px-8 py-3 border border-[#05172C] text-[#05172C] rounded-full"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  לכל המוצרים
                </button>
              </div>
            </div>
            
            {/* Left Section */}
            <div className="w-full lg:w-[calc(50%+250px)] relative order-1 lg:order-2">
              <div className="relative w-full lg:-translate-x-[12.5rem] lg:-translate-y-[3.125rem]">
                <img
                  src="/assets/homepage-hero.png"
                  alt="מצרכים טריים"
                  className="w-full h-auto max-h-[37.5rem] object-contain rounded-3xl"
                />
                <div className="absolute -bottom-10 lg:-bottom-20 left-1/2 lg:left-[12.5rem] transform -translate-x-1/2 lg:-translate-x-8">
                  <PriceBadge
                    title="שמן קנולה"
                    price={6.90}
                    originalPrice={9.90}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Section */}
          <div className="relative z-10 mt-[-80px] md:mt-[-130px]">
            <h2 
              className="text-3xl md:text-4xl font-semibold text-[#05172C] mb-8 md:mb-10 text-center"
              style={{ fontFamily: 'Ploni ML v2 AAA' }}
            >
              המארזים הפופולרים
            </h2>
            <div className="mt-[-10px] md:mt-[-20px]">
              <Carousel />
              <div className="flex justify-center mt-12 md:mt-20">
                <button
                  className="w-[206px] h-[53px] rounded-full bg-[#00BAFF] text-white"
                  style={{ fontFamily: 'Ploni ML v2 AAA' }}
                >
                  לעוד מארזים
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
