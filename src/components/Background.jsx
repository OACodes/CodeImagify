import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Background = ({ updateBackground }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }


    return (
        <div className={'flex flex-col w-fit'}>
            <button type="button" onClick={toggle} className={"inline-flex items-center justify-center text-sm border border-[#e4e4e7] h-10 px-4 py-2 w-30 mrl-5 mb-0.5"}>
                <span className='mr-2'>Background</span>
                <FontAwesomeIcon className={''} icon={faChevronDown}/>
            </button>
            {
                open && <>
                    <button onClick={() => {updateBackground('#2196F3')}} className={"flex items-center justify-between flex-row rounded-t-md rounded-b-[0px] text-sm border border-[#e4e4e7] border-b-0 hover:border-[#2196F3] h-10 px-4 py-2 w-35 mt-0"}>
                        <div className={'ml-2 text-[15px]'}>
                            Blue
                        </div>
                        <div className={'self-end items-center justify-center rounded-sm text-sm w-5 h-5 bg-blue-500 ml-2'}>
                        </div>
                    </button>

                    <button onClick={() => {updateBackground('#FF0000')}}  className={"flex items-center justify-between flex-row rounded-[0px] text-sm border border-[#e4e4e7] border-b-0 border-t-0 hover:border-[#FF0000] h-10 px-4 py-2 w-35 mt-0"}>
                        <div className={'ml-2 text-[15px]'}>
                            Red
                        </div>
                        <div className={'self-end items-center justify-center rounded-sm text-sm bg-red-500 w-5 h-5 ml-2'}>
                        </div>
                    </button>

                    <button onClick={() => {updateBackground('#A855F7')}} className={"flex items-center justify-between flex-row rounded-[0px] text-sm border border-[#e4e4e7] border-b-0 border-t-0 h-10 px-4 py-2 w-35 mt-0"}>
                        <div className={'ml-2 text-[15px]'}>
                            Purple
                        </div>
                        <div className={'self-end items-center justify-center rounded-sm text-sm bg-purple-500 w-5 h-5 ml-2'}>
                        </div>
                    </button>

                    <button onClick={() => {updateBackground('#FFFFFF')}} className={"flex items-center justify-between flex-row rounded-[0px] text-sm border border-[#e4e4e7] border-b-0 border-t-0 hover:border-[#808080] h-10 px-4 py-2 w-35 mt-0"}>
                        <div className={'ml-2 text-[15px]'}>
                            White
                        </div>
                        <div className={'self-end items-center justify-center rounded-sm text-sm bg-[#FFFFFF] border-[#e4e4e7] w-5 h-5 ml-2'}>
                        </div>
                    </button>

                    <button onClick={() => {updateBackground('#1e1e1e')}} className={"flex items-center justify-between flex-row rounded-[0px] text-sm border border-[#e4e4e7] border-b-0 border-t-0 hover:border-[#1e1e1e] h-10 px-4 py-2 w-35 mt-0"}>
                        <div className={'ml-2 text-[15px]'}>
                            Black
                        </div>
                        <div className={'self-end items-center justify-center rounded-sm text-sm bg-[#1e1e1e] border-[#e4e4e7] w-5 h-5 ml-2'}>
                        </div>
                    </button>
                </>
            }
        </div>
    );
}

export default Background