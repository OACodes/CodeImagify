import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

const ExportImage = () => {
    return (
        <div className="flex items-center justify-center w-[200px] h-[50px] hover:border- bg-blue-500 rounded-t-[25px] rounded-b-[25px]">
            <button className="inline-flex w-[100%] bg-transparent text-[18px] font-bold text-black-500  items-center justify-center rounded-t-[25px] rounded-b-[25px] ml-2">
                Export Image
                <FontAwesomeIcon icon={faChevronRight} className="mt-1 ml-2" />
            </button>
        </div>
    );
}

export default ExportImage