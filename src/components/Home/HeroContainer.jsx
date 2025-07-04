export default function HeroContainer() {
  return (
    <div className="flex justify-center mt-10">
      <div className="text-center p-10">
        <h1 className="text-5xl text-[#00094c] font-medium mb-4">Premium Glass Solutions Tailored<br/> for Australian Homes</h1>
        <p className="text-xl mb-6 text-[#575f75]">Elevating Your Homes with Stylish & Durable Glass Installations</p>
        <button className="bg-[#154bff] text-white px-4 py-2 rounded-3xl hover:bg-[#232e6e] hover:text-[#e1e3ea] transition duration-300 ease-in-out">
            Get Quote -{">"}
        </button>
      </div>
    </div>
  );
}