import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function CarouselThree() {
  const images = [
    'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh',
    'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nuwf73q0rlogkeoyqibm',
    'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nx8l8orqehscys0enlyc',
    'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/tcnvmt1hkls6st5xbhf1',
    'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/gekmvyrdz7nao0jxzknp',
    'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh',
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-5 justify-center items-center p-6">
      {/* Text Section */}
      <div className="flex flex-col p-2 w-full lg:w-1/2 gap-4">
        <h1 className="text-[#6689ff] font-medium text-lg">
          Our Niche?
        </h1>
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl">
          Premium Glass Solutions Tailored for Australian Homes
        </h1>
        <ul className="space-y-4 mt-2">
          {[
            "Custom Glass Installations ",
            " Energy-Efficient Double Glazing ",
            "Safety Glass & Compliance",
          ].map((text, idx) => (
            <li
              key={idx}
              className="flex items-center border border-blue-400 rounded-full px-4 py-2 w-fit"
            >
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-400 text-white mr-3">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-gray-600 font-medium">{text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Swiper Section */}
      <div className="bg-[#f0f1f4] rounded-2xl p-4 sm:p-6 w-full lg:max-w-2xl mx-auto">
        {/* Swiper 1 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          freeMode={true}
          className="mySwiper"
          style={{ padding: '20px 0' }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper 2 */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={3000}
          freeMode={true}
          className="mySwiper"
          style={{ padding: '20px 0' }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1536: { slidesPerView: 5 },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
