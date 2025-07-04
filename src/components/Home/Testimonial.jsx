export default function Testimonial() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left: Fixed Header Section */}
      <div className="w-1/2 flex flex-col gap-10 items-center p-10 sticky top-0 h-screen">
        <div className="bg-[#6689ff] w-30 flex items-center justify-center h-9 rounded-2xl border mb-5">
          <h2 className="font-medium text-white">Testimonials</h2>
        </div>
        <h2 className="text-5xl font-medium text-center">
          Hear What Our Clients Say About us.
        </h2>
        <div className="flex gap-5 items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-[#ccd7ff] text-4xl font-bold">100%</h2>
            <h2 className="text-gray-400 font-medium text-xl">
              Satisfaction Rate
            </h2>
          </div>
          <span className="text-6xl">|</span>
          <div className="flex flex-col">
            <h2 className="text-[#ccd7ff] text-4xl font-bold">25+</h2>
            <h2 className="text-gray-400 font-medium text-xl">
              Completed Projects
            </h2>
          </div>
        </div>
      </div>

      {/* Right: Scrollable Cards Section */}
      <div className="w-1/3 m-5 flex flex-col gap-4 justify-center items-center overflow-y-auto">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="flex flex-col w-auto border bg-[#ccd7ff] h-auto rounded-lg items-center justify-center"
          >
            <div className="flex gap-2 justify-between p-5 items-center w-full ">
              <img
                src="https://i.ibb.co/5c1x3bH/quote.png"
                alt="quote"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex flex-col gap-2">
                <h2>John Smith</h2>
                <h2 className="text-gray-400">CEO, Apex</h2>
              </div>
              <img
                src="https://i.ibb.co/5c1x3bH/quote.png"
                alt="quote"
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div>
              <p className="m-5 text-gray-600">
                "The team at Glaziers Australia did an incredible job with my
                shower screen. The design is modern and elegant, and the
                installation was seamless. My bathroom feels like a spa now!"
              </p>
            </div>
            <div className="flex gap-2 m-4 bg-[#00041f] rounded-lg p-5">
              <p className="text-white">
                What We Did
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
