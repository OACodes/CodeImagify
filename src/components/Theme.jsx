import { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const Theme = ({ updateTheme }) => {
    const monacoThemes = ['vs', 'vs-dark', 'hc-black', 'hc-light'];

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }


    return(
        <div className={'flex flex-col w-fit'}>
            <button type="button" onClick={toggle} className={"inline-flex items-center justify-center text-sm border border-[#e4e4e7] h-10 px-4 py-2 w-30 mrl-5 mb-0.5"}>
                <span className='mr-2'>Theme</span>
                <FontAwesomeIcon className={''} icon={faChevronDown}/>
            </button>
            {
                open && <>
                <select className={"flex items-center justify-between flex-row rounded-t-md rounded-b-[0px] text-sm border border-[#e4e4e7] border-b-0 hover:border-[#2196F3] h-10 px-4 py-2 w-35 mt-0"}>
                    monacoThemes.map()
                    <option value='vs-light'>VS Basic</option>
                    <option value='vs-dark'>lkms</option>
                    <option></option>
                </select>
                </>
            }
        </div>
    );
}

export default Theme