import logo from "../assets/images/white-logo.png";
export default function Footer() {
    return(
        <footer className="flex flex-col gap-10 items-center p-10 bg-[#000210] text-white">
            <div className="flex flex-col gap-5 items-center text-center">
                <img src={logo} alt="Logo" />

                <p className="text-gray-400 breakwords text-center w-92 font-medium">Transforming spaces with premium glass solutions. Proudly serving Australian homes and businesses with expert craftsmanship, custom designs, and reliable service.</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-gray-400 text-sm">
                <span>Home</span>
                <span>Works</span>
                <span>About</span>
                <span>Page</span>
                <span>Contact</span>
                <span>Coming Soon</span>
            </div>

            <div className="mt-5 flex items-center justify-center w-full max-w-3xl p-5 rounded-lg shadow-md">
                <h2 className="text-gray-400 font-medium">@WebWave 2024 All Rights Reserved</h2>
            </div>

        </footer>
    )
}