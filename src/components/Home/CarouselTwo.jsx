export default function CarouselTwo() {
    return (
        <div className="m-10 relative overflow-hidden">
            {/* Blue Gradient Background */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#3b82f6] via-[#2563eb] to-[#1e3a8a] rounded-3xl" />

            {/* Dotted Overlay */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:16px_16px] opacity-30 rounded-3xl" />

            {/* Foreground Content */}
            <div className="relative z-20 flex items-center flex-col gap-3 w-full rounded-3xl p-10 text-center">
                <h1 className="text-[#ccd7ff]">Why Choose Us</h1>
                <h1 className="text-4xl font-medium text-white">Our Winning Edge</h1>
                <h1 className="text-[#ccd7ff] max-w-xl">
                    Discover our unique strength and distinctive value we offer
                </h1>
            </div>
        </div>
    );
}
