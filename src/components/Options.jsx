import Background from "./Background";
import Language from "./Language";
import Theme from "./Theme";
import BackgroundType from "./BackgroundType";
import { useState } from "react";
import FileName from "./FileName";
import ExportImage from "./ExportImage";

const Options = ({ updateBackground, updateLanguage, updateTheme, updateFileName }) => {
    // Jan 10 Todo:
    //  Create BackgroundType Dropdown
    //  use
    const [backgroundType, setBackgroundType] = useState('Solid');

    const updateBackgroundType = (value) => {
        setBackgroundType(prev => value ?? prev);
    }

    return (
        <>
            <div className={'flex flex-row w-[97%] h-[100px] bg-[#fcfcfd] mt-4 border border-[#e3e3e3] rounded-sm'}>
                <div className={'flex flex-row justify-between w-[90%] h-[10%] m-8 mr-14 ml-14'}>
                    <Language updateLanguage={updateLanguage} />
                    <BackgroundType updateBackgroundType={updateBackgroundType} />
                    <Background updateBackground={updateBackground} BackgroundType={backgroundType} />
                    <Theme updateTheme={updateTheme} />
                </div>
            </div>
            <div className={'flex flex-row w-[97%] items-center h-[100px] bg-[#fcfcfd] mt-4 border border-[e3e3e3] rounded-sm'}>
                <div className={'flex flex-row items-center w-[90%] h-[10%] mr-14 ml-10'}>

                    {/* Filename Input component */}
                    <FileName updateFileName={updateFileName} />
                    {/* Export Image button */}
                    <ExportImage />
                    {/* Save Button (only works when logged in ) */}

                </div>
            </div>
        </>
    );
}

export default Options