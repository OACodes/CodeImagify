import { useState } from 'react'


const FileName = ({ updateFileName }) => {

    const [active, setActive] = useState(false);

    return (
        <div className="flex items-center justify-center w-50% max-w-80 px-6">
            <input
                type="text"
                onFocus={() => setActive(true)}
                onChange={(e) => updateFileName(e.target.value)}
                placeholder='File Name Here...'
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-200 hover:border-gray-300 placeholder:text-[16px] focus:placeholder:text-[12px] 
                placeholder:transition-all placeholder:duration-300 focus:placeholder:text-grey-500 focus:placeholder:mb-1"
            />
            <label
                className={`absolute left-4 transition-all duration-200 pointer-events-none text-foreground text-gray-400 ${active ? 'top-1.5 text-xs font-medium text-gray-600'
                    : 'top-3.5 text-base text-gray-400'
                    }`}
            >
                'File Name (Max: 20 characters)'
            </label>
        </div>
    );
}


export default FileName