import Background from "./Background";
import Language from "./Language";
import Theme from "./Theme";

const Options = ({ updateBackground, updateLanguage, updateTheme }) => {
    // Add on the component of each option
    // Utilize Parent-Child compoent relationship

    return(
        <div className={'flex flex-col w-[360px] h-[480px] bg-[#fcfcfd] mt-20 border border-[#e3e3e3] rounded-sm'}>
            <div className={'flex flex-row w-[80%] h-[20%] m-10'}>
                <Language updateLanguage={ updateLanguage }/>
                <Background updateBackground={ updateBackground }/>
            </div>
            <div className={'flex flex-row w-[80%] h-[20%] m-10'}>
                <Theme updateTheme={ updateTheme }/>
            </div>
        </div>
    );
}

export default Options