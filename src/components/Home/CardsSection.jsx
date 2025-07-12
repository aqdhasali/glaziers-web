import { GiStoneCrafting } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { CiBag1 } from "react-icons/ci";


export default function CardsSection() {
    const contentArray = [
        {
            header: "Expert Craftsmanship",
            icon: <GiStoneCrafting size={30} />,
            description: "With over 20 years of experience, our skilled team ensures every solution is crafted to perfection. "
        },
        {
            header: "Custom Designs",
            icon: <MdOutlineDesignServices  size={30} />,
            description: "We provide fully tailored glass solutions to match your unique style, requirements."
        },
        {
            header: "Premium-Grade Materials",
            icon: <CiBag1 size={30} />,
            description: "We use only the highest-quality glass and fittings, ensuring that your installations are long-lasting."
        },
        {
            header: "Seamless Installation",
            icon: <GiStoneCrafting size={30} />,
            description: "Our professionals handle every installation with precision and care,  ensuring a flawless finish."
        },
        {
            header: "Australian-Made Excellence",
            icon: <MdOutlineDesignServices  size={30} />,
            description: "Proudly supporting local industries, our products are crafted and sourced in Australia,"
        },
        {
            header: "Comprehensive Warranty",
            icon: <GiStoneCrafting size={30} />,
            description: "Enjoy peace of mind with our extensive warranty coverage on all products and services"
        }
        ];

    return(
        <>
            <div className="grid grid-cols-3 grid-rows-2 gap-6 p-6">
            {contentArray.map((i) => (
                <div
                key={i}
                className="bg-[#131839] h-64 border border-[#0e122e] rounded-xl shadow-md flex flex-col gap-5 items-center justify-center p-6
             transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                    <div className="text-gray-300">
                        {i.icon}
                    </div>
                    <h3 className="text-lg text-white font-semibold mb-2">{i.header}</h3>
                    <p className="text-gray-500 text-center">{i.description}</p>
                </div>
            ))}
            </div>
        </>
    )
}