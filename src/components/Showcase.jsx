import React, { useState } from "react";

const cards = [
  {
    size: "large",
    title: "SAP – SaaS Landing Page",
    desc: "A Light-themed SaaS template",
    images: [
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/gekmvyrdz7nao0jxzknp",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nx8l8orqehscys0enlyc",
    ],
  },
  {
    size: "large",
    title: "Waitlista — Landing Page",
    desc: "A dark-themed landing page template",
    images: [
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nuwf73q0rlogkeoyqibm",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/tcnvmt1hkls6st5xbhf1",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh",
    ],
  },
  {
    size: "medium",
    title: "Waitlisty — Landing Page",
    desc: "A Light-themed landing page template",
    images: [
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nuwf73q0rlogkeoyqibm",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/tcnvmt1hkls6st5xbhf1",
    ],
  },
  {
    size: "medium",
    title: "Pix – Portfolio Landing Page",
    desc: "A dark-themed portfolio template",
    images: [
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nx8l8orqehscys0enlyc",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/gekmvyrdz7nao0jxzknp",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nuwf73q0rlogkeoyqibm",
    ],
  },
  {
    size: "medium",
    title: "LandFree — Dark Landing Page",
    desc: "Dark Landing Page website template",
    images: [
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/tcnvmt1hkls6st5xbhf1",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/pr8um8nygwiuyemmvpeh",
      "https://res.cloudinary.com/dwfus9h95/image/upload/f_auto,q_auto/v1/Glaziers/nx8l8orqehscys0enlyc",
    ],
  },
];

export default function Showcase() {
  // Each card's background is controlled by its own index (default to 0)
  const [bgIndexes, setBgIndexes] = useState(Array(cards.length).fill(0));

  const handleThumbClick = (cardIdx, imgIdx) => {
    setBgIndexes((prev) =>
      prev.map((val, idx) => (idx === cardIdx ? imgIdx : val))
    );
  };

  return (
    <div className="p-10 flex flex-col items-center">
      <h1 className="text-[#50a2ff] font-medium">Our Work Showcase</h1>
      <h1 className="text-4xl font-medium text-center text-black mb-8">
        Our Most Recent Projects
      </h1>

      {/* First row: 2 large cards */}
      <div className="flex gap-8 w-full max-w-[1400px] mb-10">
        {cards.slice(0, 2).map((card, cardIdx) => (
          <div
            key={cardIdx}
            className="relative flex flex-col justify-end w-[48%] h-[340px] rounded-2xl shadow-lg overflow-hidden"
            style={{
              backgroundImage: `url(${card.images[bgIndexes[cardIdx]]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Overlay for darkening */}
            <div className="absolute inset-0 bg-[#10143a]/70 z-0" />
            {/* Thumbnails */}
            <div className="relative z-10 flex gap-2 px-6 pt-6">
              {card.images.map((img, imgIdx) => (
                <button
                  key={imgIdx}
                  className={`w-20 h-16 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    bgIndexes[cardIdx] === imgIdx
                      ? "border-blue-400 scale-105"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                  onClick={() => handleThumbClick(cardIdx, imgIdx)}
                  tabIndex={0}
                  aria-label={`Select image ${imgIdx + 1}`}
                >
                  <img
                    src={img}
                    alt=""
                    className="object-cover w-full h-full"
                    draggable={false}
                  />
                </button>
              ))}
            </div>
            {/* Card Content */}
            <div className="relative z-10 px-6 pb-6 pt-4">
              <h2 className="text-white font-semibold text-lg mb-1">
                {card.title}
              </h2>
              <p className="text-slate-300 text-sm mb-5">{card.desc}</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-xl font-medium transition">
                Open <span aria-hidden>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Second row: 3 medium cards */}
      <div className="flex gap-8 w-full max-w-[1400px]">
        {cards.slice(2).map((card, i) => {
          const cardIdx = i + 2;
          return (
            <div
              key={cardIdx}
              className="relative flex flex-col justify-end w-1/3 h-[320px] rounded-2xl shadow-lg overflow-hidden"
              style={{
                backgroundImage: `url(${card.images[bgIndexes[cardIdx]]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Overlay for darkening */}
              <div className="absolute inset-0 bg-[#10143a]/70 z-0" />
              {/* Thumbnails */}
              <div className="relative z-10 flex gap-2 px-4 pt-4">
                {card.images.map((img, imgIdx) => (
                  <button
                    key={imgIdx}
                    className={`w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                      bgIndexes[cardIdx] === imgIdx
                        ? "border-blue-400 scale-105"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }`}
                    onClick={() => handleThumbClick(cardIdx, imgIdx)}
                    tabIndex={0}
                    aria-label={`Select image ${imgIdx + 1}`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="object-cover w-full h-full"
                      draggable={false}
                    />
                  </button>
                ))}
              </div>
              {/* Card Content */}
              <div className="relative z-10 px-4 pb-5 pt-3">
                <h2 className="text-white font-semibold text-lg mb-1">
                  {card.title}
                </h2>
                <p className="text-slate-300 text-sm mb-5">{card.desc}</p>
                <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-xl font-medium transition">
                  Open <span aria-hidden>↗</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
