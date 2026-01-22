import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const BackgroundType = ({ updateBackgroundType }) => {
    const [selectedType, setSelectedType] = useState('Solid');
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleClick = (value) => {
        setSelectedType(value);
        updateBackgroundType(selectedType);
        setIsOpen(false);
    }


    return (
        <div className={'relative flex flex-col w-75'}>
            <button
                type="button"
                className={`inline-flex items-center justify-center rounded-md text-sm border border-[#e4e4e7] h-10 px-4 py-2 w-30 mr-5 mb-1`}
                onClick={toggleDropdown}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
            >
                <p className='mr-2 font-semibold'>Background Type</p>
                <FontAwesomeIcon className={''} icon={faChevronDown} />
            </button>
            {isOpen && (
                <div>
                    <button
                        key="solid"
                        type="button"
                        className="flex items-center justify-between flex-row text-sm border-b border-[#e4e4e7] hover:bg-gray-100 h-10 px-4 py-2 w-full last:border-b-0 border-none"
                        onClick={() => handleClick('Solid')}
                        role="option"
                        aria-selected={selectedType === 'Solid'}
                    >
                        <span className="ml-2 text-[15px]">Solid</span>
                    </button>
                    <button
                        key="gradient"
                        type="button"
                        className="flex items-center justify-between flex-row text-sm border-b border-[#e4e4e7] hover:bg-gray-100 h-10 px-4 py-2 w-full last:border-b-0 border-none"
                        onClick={() => handleClick('Gradient')}
                        role="option"
                        aria-selected={selectedType === 'Gradient'}
                    >
                        <span className="ml-2 text-[15px]">Gradient</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default BackgroundType