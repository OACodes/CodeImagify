import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Background = ({ updateBackground, BackgroundType }) => {
    //  ADD dropdown state here
    const [selectedBackground, setSelectedBackground] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const backgrounds = {
        '#2196F3': 'Blue',
        '#FF0000': 'Red',
        '#A855F7': 'Purple',
        '#FFFFFF': 'White',
        '#1e1e1e': 'Black'
    };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value) => {
        setSelectedBackground(value);
        updateBackground(value);
        setIsOpen(false);
    };

    return (
        <div className={'relative flex flex-col w-55'}>
            <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md text-sm border ${selectedBackground ? 'border-[#2196F3]' : 'border-[#e4e4e7]'} h-10 px-4 py-2 w-30 mr-5 mb-1`}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <p className='mr-2 font-semibold'>Background</p>
                <FontAwesomeIcon className={''} icon={faChevronDown} />
            </button>
            {isOpen && (
                <div
                    className="absolute mt-12 w-50 rounded-md bg-transparent shadow-lg focus:outline-none overflow-y-auto max-h-60"
                    role="listbox"
                >
                    {Object.entries(backgrounds).map(([value, label]) => (
                        <button
                            key={value}
                            type="button"
                            className="flex items-center justify-between flex-row text-sm border-b border-[#e4e4e7] hover:bg-gray-100 h-10 px-4 py-2 w-full last:border-b-0" style={{ border: value }}
                            onClick={() => handleOptionClick(value)}
                            role="option"
                            aria-selected={selectedBackground === value}
                        >
                            <span className="ml-2 text-[15px]">{label}</span>
                            <div className={`self-end items-center justify-center rounded-sm text-sm w-5 h-5 ml-2`} style={{ backgroundColor: value, border: value === '#FFFFFF' ? '1px solid #e4e4e7' : 'none' }}></div>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Background