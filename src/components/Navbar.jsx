import React, {useEffect, useRef, useState} from 'react'
import logo from '../imgs/logo.png'
import {Link, Outlet} from "react-router-dom";
import {CiSearch} from "react-icons/ci";
import UserAuthForm from "./UserAuthFormModel.jsx";

function Navbar() {
    const [inputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);

    const hideInput = () => {
        setInputVisible(false);
    };

    // 监听点击事件
    useEffect(() => {
        const handleClick = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                hideInput();
            }
        };

        // 如果输入框可见，则添加点击监听事件
        if (inputVisible) {
            document.addEventListener('click', handleClick, true);
        }

        return () => {
            // 清理函数，组件卸载时移除监听事件
            document.removeEventListener('click', handleClick, true);
        };
    }, [inputVisible]);
    return (
        <>
            <nav
                className='z-10  top-0 sticky flex  w-full px-7 py-5 h-20
            items-center border-b-2 border-grey justify-between'>
                <Link to={"/"}>
                    <div className={"flex flex-wrap items-center justify-center gap-3"}>
                        <img src={logo} className='flex-none w-10' alt={"logo"}/>
                        <span className={"font-bold text-2xl"}>群峰之巅</span>
                        <input
                            className={"md:block hidden w-56 h-12 pl-12 font-bold rounded-full border-2 border-grey bg-grey "}
                            placeholder={"搜索"}
                        />
                        <CiSearch size={24} className={"absolute hidden md:block light-1 pointer-events-none"}></CiSearch>
                    </div>
                </Link>
                <div className={"flex flex-wrap items-center justify-center  gap-2"}>
                    <button className="rounded-full w-12 h-12 md:hidden flex items-center justify-center
                hover:bg-grey " onClick={() => setInputVisible(!inputVisible)}>
                        <CiSearch size={30}/>
                    </button>
                    <UserAuthForm/>
                </div>

            </nav>
            {inputVisible && (
                <div ref={inputRef} className={"relative w-[90%] h-16  m-auto"}>
                    <input
                        className={"flex md:hidden w-full mt-6 p-4 pl-6  rounded-full border-2 border-grey  "}
                        placeholder={"搜索"}
                    />
                    <CiSearch size={30}
                              className={"absolute right-[15px] top-[50%] -translate-y-[50%] font-bold cursor-pointer md:hidden"}></CiSearch>
                </div>

            )}
            <Outlet/>
        </>
    )
}

export default Navbar