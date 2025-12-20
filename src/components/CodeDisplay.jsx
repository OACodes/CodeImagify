import { useState } from "react";
import Options from "./Options";

const CodeDisplay = ({ getBackground }) => {
    console.log({ getBackground })
    return (
        <div className={`w-[40rem] h-[400px] m-10 mx-10 mt-20`} style={{ backgroundColor: getBackground }}>
            {/* Display the options here, in Options */}
        </div>
        
    );
}

export default CodeDisplay