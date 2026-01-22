import { useEffect, useState, useRef } from "react";
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

    const gradients = {
        'linear-gradient(135deg, #020024, #090979, #00d4ff)': 'Midnight Blue',
        'linear-gradient(135deg, #360033, #0b8793)': 'Purple Bliss',
        'linear-gradient(135deg, #ff7e5f, #feb47b)': 'Sunset Glow',
        'linear-gradient(135deg, #654ea3, #eaafc8)': 'Royal Violet',
        'linear-gradient(135deg, #2193b0, #6dd5ed)': 'Ocean Wave',
        'linear-gradient(135deg, #ed4264, #ffedbc)': 'Peach Dream',
        'linear-gradient(135deg, #ff00cc, #333399)': 'Cosmic Fusion',
        'linear-gradient(135deg, #11998e, #38ef7d)': 'Emerald Flow',
        'linear-gradient(135deg, #141e30, #243b55)': 'Night Sky',
        'linear-gradient(135deg, #f857a6, #ff5858)': 'Flamingo',
        'linear-gradient(135deg, #bdc3c7, #2c3e50)': 'Frosted Glass',
        'linear-gradient(135deg, #00c6ff, #0072ff)': 'Arctic Breeze',
        'linear-gradient(135deg, #d9a7c7, #fffcdc)': 'Soft Lavender',
        'linear-gradient(135deg, #f953c6, #b91d73)': 'Neon Sunset',
        'linear-gradient(135deg, #232526, #414345)': 'Dark Matter',
        'linear-gradient(135deg, #f12711, #f5af19)': 'Tropical Punch',
        'linear-gradient(135deg, #74ebd5, #9face6)': 'Ice Blue',
        'linear-gradient(135deg, #000000, #434343)': 'Carbon Steel',
        'linear-gradient(135deg, #b76e79, #ffd1dc)': 'Rose Gold',
        'linear-gradient(135deg, #396afc, #2948ff)': 'Cyber Blue'
    };

    // const [dropDown, setDropDown] = useState(backgrounds);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        // if (BackgroundType === 'Solid') {
        //     setDropDown(prev => backgrounds ?? prev);
        // }
        // else {
        //     setDropDown(prev => gradients ?? prev);
        // }
    }

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
            {isOpen && (BackgroundType === 'Solid' ? (
                <div className="absolute mt-12 w-50 rounded-md bg-transparent shadow-lg focus:outline-none overflow-y-auto max-h-60"
                    role="listbox">
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
            ) : (
                <div className="absolute mt-12 w-50 rounded-md bg-transparent shadow-lg focus:outline-none overflow-y-auto max-h-60"
                    role="listbox">
                    {Object.entries(gradients).map(([value, label]) => (
                        <button
                            key={value}
                            type="button"
                            className="flex items-center justify-between flex-row text-xs border-b border-none hover:bg-gray-100 h-10 px-4 py-2 w-full last:border-b-0" style={{ border: value }}
                            onClick={() => handleOptionClick(value)}
                            role="option"
                            aria-selected={selectedBackground === value}
                        >
                            <span className="ml-2 text-[15px]">{label}</span>
                            <div className={`self-end items-center justify-center rounded-sm text-sm w-5 h-4 ml-2`} style={{ background: value, border: value === '#FFFFFF' ? '1px solid #e4e4e7' : 'none' }}></div>
                        </button>
                    ))}
                </div>
            )
            )}
        </div>
    );
}

export default Background