export default function Testimonial() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left: Fixed Header Section */}
      <div className="w-full lg:w-1/2 bg-[#f8f7f9] flex flex-col gap-10 items-center p-6 sm:p-10 sticky top-0 h-auto lg:h-screen z-10">
        <div className="bg-[#6689ff] w-36 flex items-center justify-center h-9 rounded-2xl border mb-5">
          <h2 className="font-medium text-white">Testimonials</h2>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center">
          Hear What Our Clients Say About us.
        </h2>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex flex-col items-center">
            <h2 className="text-[#ccd7ff] text-3xl sm:text-4xl font-bold">100%</h2>
            <h2 className="text-gray-400 font-medium text-lg sm:text-xl">
              Satisfaction Rate
            </h2>
          </div>
          <span className="text-4xl sm:text-5xl">|</span>
          <div className="flex flex-col items-center">
            <h2 className="text-[#ccd7ff] text-3xl sm:text-4xl font-bold">25+</h2>
            <h2 className="text-gray-400 font-medium text-lg sm:text-xl">
              Completed Projects
            </h2>
          </div>
        </div>
      </div>

      {/* Right: Scrollable Cards Section */}
      <div className="w-full lg:w-2/3 px-4 py-8 sm:px-8 flex flex-col gap-6 items-center overflow-y-auto">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex flex-col w-full max-w-xl border bg-[#ccd7ff] rounded-lg"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 justify-between p-5 items-center w-full">
              <img
                src="https://i.ibb.co/5c1x3bH/quote.png"
                alt="quote"
                className="w-10 h-10"
              />
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h2 className="font-semibold">John Smith</h2>
                <h2 className="text-gray-400">CEO, Apex</h2>
              </div>
              <img
                src="https://i.ibb.co/5c1x3bH/quote.png"
                alt="quote"
                className="w-10 h-10"
              />
            </div>
            <div>
              <p className="m-5 text-gray-600 text-center sm:text-left">
                "The team at Glaziers Australia did an incredible job with my
                shower screen. The design is modern and elegant, and the
                installation was seamless. My bathroom feels like a spa now!"
              </p>
            </div>
            <div className="flex gap-2 m-4 bg-[#00041f] rounded-lg p-5">
              <p className="text-white text-sm sm:text-base">
                <strong>What We Did</strong>
                <br />
                Installed a frameless glass shower screen, designed to create an
                open, luxurious feel.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
