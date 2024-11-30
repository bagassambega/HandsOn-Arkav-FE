import React, { useState } from 'react';

interface AccordionProps {
    title: string;
    description: string;
    titleClassName?: string;
    descriptionClassName?: string;
    className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description, className, titleClassName, descriptionClassName }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={className + " border-b border-gray-300 last:border-b-0"}>
            <button
                className={titleClassName + " flex justify-between items-center w-full py-4 px-6 focus:outline-none bg-black text-white"}
                onClick={toggleAccordion}>
                <h3 className="text-lg font-medium">{title}</h3>
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
            </button>
            {isOpen && (
                <div className={descriptionClassName + " px-6 py-4 bg-white text-black"}>
                    <p>{description}</p>
                </div>
            )}
        </div>
    );
};

export default Accordion;