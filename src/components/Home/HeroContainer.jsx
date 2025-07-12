import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navbar from "../Navbar";

export default function HeroContainer() {
  const headingRef = useRef(null);
  const subTextRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(containerRef.current, {
      opacity: 0,
      duration: 0.5,
    })
      .from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      })
      .from(
        subTextRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/src/assets/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <div className="w-full z-20">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div
        ref={containerRef}
        className="relative z-10 flex-1 flex items-center justify-center text-center px-4 sm:px-6 md:px-10 py-10"
      >
        <div className="p-4 sm:p-6 md:p-8 max-w-[90vw] sm:max-w-[600px] lg:max-w-[800px]">
          <h1
            ref={headingRef}
            className="text-3xl sm:text-4xl md:text-5xl text-white font-medium mb-4 leading-snug"
          >
            Premium Glass Solutions Tailored
            for Australian Homes
          </h1>
          <p
            ref={subTextRef}
            className="text-base sm:text-lg md:text-xl mb-6 text-white/90"
          >
            Elevating Your Homes with Stylish & Durable Glass Installations
          </p>
          <button className="bg-[#232e6e] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-3xl hover:bg-[#154bff] hover:text-[#e1e3ea] transition duration-300 ease-in-out text-sm sm:text-base">
            Get Quote -{">"}
          </button>
        </div>
      </div>
    </div>
  );
}
