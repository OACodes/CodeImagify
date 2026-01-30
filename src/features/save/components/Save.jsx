import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons'
import { motion } from 'framer-motion'

const Save = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleSaveClick = () => {
        setIsLiked(!isLiked);
        // TODO: Add save action (backend integration) when available
        console.log("Saving image to favorites...", !isLiked);
    };

    return(
        <motion.button 
            onClick={handleSaveClick}
            className="flex items-center justify-center w-[120px] h-[50px] ml-5 bg-[#5C5C99] text-[18px] font-bold text-[#fafafa] text-center transition-all duration-200 ease-in-out hover:bg-[#292966] hover:translate-z-[1px] hover:translate-y-[-2px] hover:shadow-lg hover:shadow-purple-300 active:translate-none active:border-none active:outline-none active:shadow-non active:scale-95"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.div
                animate={{ scale: isLiked ? 1.2 : 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
                <FontAwesomeIcon 
                    icon={isLiked ? faHeartSolid : faHeartOutline} 
                    className="mr-2"
                    style={{ color: isLiked ? "#ff4458" : "#fafafa" }}
                />
            </motion.div>
            Save
            {/* <FontAwesomeIcon icon={faChevronRight} className="mt-1 ml-2.5" /> */}
        </motion.button>
    );
}

export default Save
