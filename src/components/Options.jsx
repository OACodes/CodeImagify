import Background from "../features/appearance/components/Background";
import Language from "../features/language/components/Language";
import Theme from "../features/appearance/components/Theme";
import BackgroundType from "../features/appearance/components/BackgroundType";
import FileName from "../features/language/components/FileName";
import ExportImage from "../features/export/components/ExportImage";
import Save from "../features/save/components/Save";

const Options = ({ updateBackground, updateLanguage, updateTheme, updateFileName, updateExportImg, updateBackgroundType, backgroundType }) => {
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
            <div className="flex flex-row w-[100%]">
                <div className={'flex flex-row w-[97%] items-center justify-center h-[100px] bg-[#fcfcfd] border border-[e3e3e3] rounded-sm mt-0 mr-0 bg-transparent border-none'}>
                    <div className={'flex flex-row items-center w-[85%] h-[10%] gap-2 mr-0 ml-0'}>

                        {/* Filename Input component */}
                        <FileName updateFileName={updateFileName} />
                        {/* Export Image button */}
                        <ExportImage updateExportImg={updateExportImg}/>
                        {/* Save Button (only works when logged in ) */}
                        <Save />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Options