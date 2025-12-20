import Background from "./Background";
import Language from "./Language";

const Options = ({ updateBackground, updateLanguage }) => {
    // Add on the component of each option
    // Utilize Parent-Child compoent relationship

    const findBg = () => {
        setBg()
    }

    return(
        <div className={'w-[360px] h-[480px] bg-[#fcfcfd] mt-20 border border-[#e3e3e3] rounded-sm'}>
            <Language updateLanguage={ updateLanguage }/>
            <Background updateBackground={ updateBackground }/>
        </div>
    );
}

export default Options