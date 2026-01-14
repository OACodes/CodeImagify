import { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Theme = ({ updateTheme }) => {
    // const monacoThemes = ['vs', 'vs-dark', 'hc-black', 'hc-light'];
    const [selectedTheme, setSelectedTheme] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const themes = {'vs': 'Light', 'vs-dark':'Dark'};

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value) => {
        setSelectedTheme(value);
        updateTheme(selectedTheme);
        setIsOpen(false);
    };

    return(
        <div className={'relative flex flex-col w-55'}>
            <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md text-sm border ${selectedTheme ? 'border-[#2196F3]' : 'border-[#e4e4e7]'} h-10 px-4 py-2 w-30 mr-5 mb-1`}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <p className='mr-2 font-semibold'>Theme</p>
                <FontAwesomeIcon className={''} icon={faChevronDown} />
            </button>
            {isOpen && (
                <div
                    className="absolute mt-12 w-fit rounded-md bg-transparent shadow-lg focus:outline-none"
                    role="listbox"
                >
                    {Object.entries(themes).map(([value, label]) => (
                        <button
                            key={value}
                            type="button"
                            className="flex items-center justify-between flex-row text-sm border-b border-[#e4e4e7] hover:bg-gray-100 h-10 px-4 py-2 w-full last:border-b-0 border-none"
                            onClick={() => handleOptionClick(value)}
                            role="option"
                            aria-selected={selectedTheme === value}
                        >
                            <span className="ml-2 text-[15px]">{label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Theme