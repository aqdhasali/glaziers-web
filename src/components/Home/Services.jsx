import cardBg from '../../assets/images/card-bg.jpeg';

export default function Services() {
  return (
    <div className="p-4 sm:p-6 md:p-10">
      <div
        style={{
          backgroundImage: `url(${cardBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="flex justify-center items-center flex-col gap-5 min-h-[600px] bg-gradient-to-r from-slate-800 to-indigo-900 rounded-[48px]"
      >
        <h1 className="text-[#50a2ff] font-medium text-base sm:text-lg">Services</h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center text-white mb-6 sm:mb-10 px-4">
          We Provide All Glass Solutions For Every <br className="hidden sm:block" />
          Custom Space
        </h1>

        {/* First row of buttons */}
        <div className="flex flex-wrap justify-center gap-2 px-4 text-sm sm:text-base">
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Shower Screens
          </button>
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Custom Mirrors
          </button>
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Mirror Wardrobes
          </button>
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Glass Splashbacks
          </button>
        </div>

        {/* Second row of buttons */}
        <div className="flex flex-wrap justify-center gap-2 px-4 text-sm sm:text-base mb-6 sm:mb-10">
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Glass Tabletops
          </button>
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Glass Windows
          </button>
          <button className="bg-[#0e1b54]/50 px-4 py-2 rounded-4xl text-white border border-grey-50 hover:bg-[#020618] transition duration-300 ease-in-out">
            Glass Cubicles
          </button>
        </div>

        {/* CTA button */}
        <button className="bg-[#154bff] text-white px-6 py-2 rounded-3xl hover:bg-[#232e6e] hover:text-[#e1e3ea] transition duration-300 ease-in-out">
          Start a Project
        </button>
      </div>
    </div>
  );
}
