import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Language = ({ updateLanguage }) => {
    const [selectedLanguage, setSelectedLanguage] = useState(''); // Initialize with an empty string or a default language
    const languages = {javascript: 'JavaScript', html: 'HTML', css: 'CSS', typescript: 'TypeScript', java: 'Java'}
    return(
        <div className={'flex flex-col w-fit'}>
            <select value={selectedLanguage} onChange={(e) => { setSelectedLanguage(e.target.value); updateLanguage(e.target.value); }} className={`inline-flex items-center justify-center rounded-md text-sm border ${selectedLanguage ? 'border-[#2196F3]' : 'border-[#e4e4e7]'} h-10 px-4 py-2 w-30 mr-5 mb-1 `}>
                <option value="" disabled selected hidden>
                    <span className='mr-2'>Language</span>
                    <FontAwesomeIcon className={''} icon={faChevronDown} />
                </option>
                {Object.entries(languages).map(([value, label]) => {
                    return (
                        <option className={'flex items-center justify-between flex-row rounded-t-[0px] rounded-b-[0px] text-sm border border-[#e4e4e7] border-b-0 hover:border-[#2196F3] h-10 px-4 py-2 w-35 mt-0'} key={value} value={value}>{label}</option>
                    );
                })}
            </select>
        </div>
    );
}

export default Language