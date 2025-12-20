import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Language = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => {
        setOpen(!open);
    }
    return(
        <div className={'flex flex-col w-fit'}>
            <button type="button" onClick={toggle} className={"inline-flex items-center justify-center rounded-md text-sm border border-[#e4e4e7] h-10 px-4 py-2 w-30 mb-1"}>
                <span className='mr-2'>Language</span>
                <FontAwesomeIcon className={''} icon={faChevronDown} />
            </button>
        </div>
    );
}

export default Language