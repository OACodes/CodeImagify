import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const Language = ({ updateLanguage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const languages = { 'javascript': 'JavaScript', 'typescript': 'TypeScript', 'python': 'Python', 'java': 'Java', 'cpp': 'C++', 'csharp': 'C#', 'ruby': 'Ruby', 'html': 'HTML', 'css': 'CSS', 'go': 'Go', 'rust': 'Rust', 'php': 'PHP', 'sql': 'SQL', 'json': 'JSON' }

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (value) => {
        setSelectedLanguage(value);

        updateLanguage(value);
        setIsOpen(false);
    };

    const entries = Object.entries(languages);

    return (
        <div className={'relative flex flex-col w-55'}>
            <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md text-sm border ${selectedLanguage ? 'border-[#2196F3]' : 'border-[#e4e4e7]'} h-10 px-4 py-2 w-30 mr-5 mb-1 transition-all duration-200 ease-in-out`}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <p className='mr-2 font-semibold'>Language</p>
                <FontAwesomeIcon className={''} icon={faChevronDown} />
            </button>
            {isOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
                    <motion.div
                        className="absolute mt-12 w-50 rounded-md bg-white shadow-lg focus:outline-none overflow-y-auto max-h-48 z-50"
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
                                    aria-selected={selectedLanguage === value}
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

export default Language
