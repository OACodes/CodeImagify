import { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'
const Theme = ({ updateTheme }) => {
    // const monacoThemes = ['vs', 'vs-dark', 'hc-black', 'hc-light'];
    const [selectedTheme, setSelectedTheme] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const themes = { 'vs': 'Light', 'vs-dark': 'Dark' };

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value) => {
        setSelectedTheme(value);
        updateTheme(value);
        setIsOpen(false);
    };

    const entries = Object.entries(themes);

    return (
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
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <motion.div
                        className="absolute mt-12 w-fit rounded-md bg-white shadow-lg focus:outline-none z-50"
                        role="listbox"
                        initial={{ opacity: 0, translateY: -10 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        exit={{ opacity: 0, translateY: -10 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        {entries.map(([value, label], index) => {
                            const isFirst = index === 0;
                            const isLast = index === entries.length - 1;
                            const roundedClass = isFirst ? 'rounded-t-md' : isLast ? 'rounded-b-md' : '';
                            return (
                                <button
                                    key={value}
                                    type="button"
                                    className={`flex items-center justify-between flex-row text-sm hover:bg-gray-100 h-10 px-4 py-2 w-full ${isFirst ? 'border-b border-[#e4e4e7]' : isLast ? '' : 'border-b border-[#e4e4e7]'} ${roundedClass}`}
                                    onClick={() => handleOptionClick(value)}
                                    role="option"
                                    aria-selected={selectedTheme === value}
                                >
                                    <span className="ml-2 text-[15px]">{label}</span>
                                </button>
                            );
                        })}
                    </motion.div>
                </>
            )}
        </div>
    );
}

export default Theme
