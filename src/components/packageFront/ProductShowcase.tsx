import React from 'react';
import HotProductCard from './HotProductCard';

const ProductShowcase: React.FC = () => {
  const products = [
    {
      name: "חטיף אנרגיה",
      currentPrice: "₪12.90",
      originalPrice: "₪16.90",
      imageSrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/30ba1bd3a37af9a71b2608aa281dbd0ad0e72b2e22080a4e440665836da42c4f?placeholderIfAbsent=true",
      imageOverlaySrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/acc19995-6765-4519-9c69-1aad6e7eba5b?placeholderIfAbsent=true"
    },
    {
      name: "ביסלי",
      currentPrice: "₪4.90",
      originalPrice: "₪6.90",
      imageSrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/da738335c5bc217e6f2ec16bb7fbeba705301e1e6952eef4a0db471376004304?placeholderIfAbsent=true",
      imageOverlaySrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/803610a0-a1d1-4e1c-8864-bfe64ecbbb9b?placeholderIfAbsent=true"
    },
    {
      name: "עוגת שוקולד",
      currentPrice: "₪12.90",
      originalPrice: "₪19.90",
      imageSrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/71f7734e6b4e628b7d11ef8040c114e6058970e4ca6a913ef91b6d75ac8fbf5e?placeholderIfAbsent=true",
      imageOverlaySrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/24dbd147-14a8-4506-b15d-ae4b92534a5f?placeholderIfAbsent=true"
    },
    {
      name: "קורנפלקס",
      currentPrice: "₪34.90",
      originalPrice: "₪49.90",
      imageSrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/5a8e8a02bcc7722756c6ae22c1d1a1a46db86aca2bf3c9a8f30a60eef0715b56?placeholderIfAbsent=true",
      imageOverlaySrcSet: "https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/3bd4fc55ef394bd184dc9786c01c1445/d840bdbf-6595-4bbd-98f3-9d2a95d082df?placeholderIfAbsent=true"
    }
  ];

  return (
    <section className="flex flex-col items-center max-w-7xl mx-auto px-4 bg-[#f4f5f5]" dir="rtl">
      <header>
        <h2 className="text-[rgba(5,23,44,1)] text-[28px] font-semibold leading-none text-center z-10 mt-[-7px]">
          אל תפספסו!
        </h2>
        <p className="text-[rgba(38,70,83,1)] text-base font-normal leading-[22px] text-center mt-3.5 max-md:max-w-full">
          חטיפים מתוקים, פירות טריים, מאפים מפנקים ועוד עשרות מוצרים במחירים
          מפתיעים.
          <br />
          רק לשבוע הקרוב – אל תפספסו!
        </p>
      </header>

      <div className="w-full mt-[41px] max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          {products.map((product, index) => (
            <div key={index} className="w-3/12 max-md:w-full max-md:ml-0">
              <HotProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;