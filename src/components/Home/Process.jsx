import ConsulImg from '../../assets/images/consultation.jpeg';
import DesignImg from '../../assets/images/design.jpeg';
import InstallImg from '../../assets/images/installing.jpeg';
import MaintainImg from '../../assets/images/maintainence.jpeg';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const cardData = [
  {
    img: ConsulImg,
    title: 'Phase 01 - Consultation',
    desc: 'Share your ideas, and our experts will guide you with tailored recommendations.',
    shadow: 'bg-red-500/40'
  },
  {
    img: DesignImg,
    title: 'Phase 02 - Design & Revisions',
    desc: 'Share your ideas, and our experts will guide you with tailored recommendations.',
    shadow: 'bg-blue-500/40'
  },
  {
    img: InstallImg,
    title: 'Phase 03 - Seamless Installation',
    desc: 'Our skilled team ensures a flawless setup with minimal disruption to your space.',
    shadow: 'bg-purple-500/40'
  },
  {
    img: MaintainImg,
    title: 'Phase 04 - Maintenance & Support',
    desc: 'We provide expert advice and ongoing support to keep your glass installations looking best.',
    shadow: 'bg-green-500/40'
  }
];


export default function Process(){
    return(
        <>
            <div className="flex flex-col items-center justify-center p-10 gap-2">
                <h1 className="text-[#50a2ff] font-medium">Process</h1>
                <h1 className="text-4xl font-medium text-center text-blackt">Our Streamlined Process for Success.</h1>
                <h1 className="text-md font-medium mb-10 text-gray-600">Average landing page completion time is 1 - 2 weeks.</h1>

                <div className="w-full max-w-5xl mx-auto py-10">
                    <Swiper
                        modules={[Autoplay]}
                        slidesPerView={1}
                        spaceBetween={24}
                        loop={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        speed={900}
                        breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                        1280: { slidesPerView: 3 },
                        1536: { slidesPerView: 4 },
                        }}
                        className="mySwiper"
                    >
                        {cardData.map((card, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                            className="relative flex flex-col justify-end h-[200px] w-[300px] rounded-2xl overflow-hidden shadow-lg"
                            style={{
                                backgroundImage: `url(${card.img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                            >
                            <div className={`absolute inset-0 ${card.shadow} pointer-events-none`} />
                            <div className="relative z-10 p-5 text-white">
                                <h1 className="text-l font-bold">{card.title}</h1>
                                <p className="text-sm mt-2">{card.desc}</p>
                            </div>
                            </div>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

        </>
    )
}