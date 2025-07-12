import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const dummyImages = [
  'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh',
  'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nuwf73q0rlogkeoyqibm',
  'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nx8l8orqehscys0enlyc',
  'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/tcnvmt1hkls6st5xbhf1',
  'https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/gekmvyrdz7nao0jxzknp',
];

export default function CarouselOne() {
    return(
        <>
            <div className="flex mt-10 justify-center items-center">
                <h1 className="text-l text-center mb-6 text-[#575f75]">We use industry standard tools and technologies</h1>
            </div>
            
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3} 
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
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                    1536: { slidesPerView: 5 },
                }}
            >
                    {dummyImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={src}
                                alt={`Slide ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '16px',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
                                }} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </>

    )
}