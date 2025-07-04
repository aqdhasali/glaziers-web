import React, { useState } from 'react';

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null); // State to manage which accordion item is open

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "You can return items within 30 days of purchase for a full refund, provided they are in their original condition with all tags attached."
        },
        {
            question: "How do I track my order?",
            answer: "Once your order has shipped, you will receive an email with a tracking number and a link to track its delivery status. You can also log into your account to view your order history and tracking information."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination. Please see our shipping policy for more details."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and other local payment options as available during checkout."
        },
        {
            question: "How can I contact customer support?",
            answer: "You can reach our customer support team via email at support@example.com, through our live chat feature on the website, or by calling us at +1 (123) 456-7890 during business hours."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index); 
    };

    return (
        <div className="flex flex-col gap-10 items-center p-10">
            <div className="flex flex-col gap-2 items-center text-center">
                <h2 className="text-[#50a2ff] font-medium text-lg">FAQ</h2>
                <h2 className="font-medium text-4xl sm:text-5xl">Have Questions? We Have Answers</h2>
                <h2 className="text-gray-400 text-xl break-words max-w-2xl mt-2">
                    Here are some commonly asked questions. If you can't find the answer you're looking for, feel free to reach out to us directly. We're here to help!
                </h2>
            </div>

            <div className="w-full max-w-3xl"> 
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-4 bg-[#ccd7ff] rounded-lg shadow-md overflow-hidden border border-gray-200">
                        <button
                            className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-gray-800 focus:outline-none focus:bg-gray-50 transition-all duration-300"
                            onClick={() => toggleAccordion(index)}
                            aria-expanded={activeIndex === index}
                            aria-controls={`faq-content-${index}`}
                            id={`faq-header-${index}`}
                        >
                            <span>{faq.question}</span>
                            <svg
                                className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-[#50a2ff]' : 'rotate-0 text-gray-500'}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        {activeIndex === index && (
                            <div
                                id={`faq-content-${index}`}
                                role="region"
                                aria-labelledby={`faq-header-${index}`}
                                className="p-5 pt-0 text-gray-600 border-t border-gray-100 animate-fadeIn"
                            >
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}