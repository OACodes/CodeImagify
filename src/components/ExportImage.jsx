import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ExportImage = ({updateExportImg}) => {
    return (
        <button className="flex items-center justify-center w-[200px] h-[50px] bg-blue-500 rounded-t-[25px] rounded-b-[25px] text-[18px] font-bold text-[#fafafa] transition-all duration-200 ease-in-out hover:bg-blue-600 hover:translate-x-[0px] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-blue-300 active:translate-none active:border-none active:outline-none active:shadow-none active:scale-95" onClick={() => updateExportImg(true)}>
            Export Image
            <FontAwesomeIcon icon={faChevronRight} className="mt-1 ml-2.5" />
        </button>
    );
}

export default ExportImage