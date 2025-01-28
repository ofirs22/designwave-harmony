import React from 'react';

interface ProductCardProps {
  name: string;
  currentPrice: string;
  originalPrice: string;
  imageSrcSet: string;
  imageOverlaySrcSet: string;
}

const HotProductCard: React.FC<ProductCardProps> = ({
  name,
  currentPrice,
  originalPrice,
  imageSrcSet,
  imageOverlaySrcSet
}) => {
  return (
    <article className="flex w-full flex-col items-center">
      <div className="flex flex-col shadow-[0px_2px_4px_rgba(0,0,0,0.1)] self-stretch relative aspect-[0.887] w-full rounded-xl">
        <img
          loading="lazy"
          srcSet={imageSrcSet}
          className="absolute h-full w-full object-cover inset-0"
          alt={name}
        />
        <img
          loading="lazy"
          srcSet={imageOverlaySrcSet}
          className="aspect-[0.89] object-contain w-full rounded-xl"
          alt=""
          aria-hidden="true"
        />
      </div>
      <h3 className="text-[rgba(5,23,44,1)] text-2xl font-semibold leading-none text-center mt-[13px]">
        {name}
      </h3>
      <div className="flex items-stretch gap-[13px] text-[22px] font-bold whitespace-nowrap leading-[50px] mt-[5px]">
        <span className="text-[rgba(252,75,78,1)] text-right">
          {currentPrice}
        </span>
        <span className="text-[rgba(119,128,138,1)]">
          {originalPrice}
        </span>
      </div>
    </article>
  );
};

export default HotProductCard;