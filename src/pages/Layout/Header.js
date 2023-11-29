import React from "react";

export default function Header () {
    const MenuList = [
        {text : "Chat"},
        {text : "Gif"},
        {text : "Picture"},
        {text : "Video"},
        {text : "Music"},
        {text : "Users"},
    ]

    return (
        <div className="w-full h-full justify-center items-center fiexd felx-col bg-black ">
            <div className="w-full md:w-2/3 lg:w-1/2">
                <div className="text-white font-semibold text-[16px] items-center justify-between flex felx-col p-3">
                    {
                        MenuList.map((item, index) => {
                            return (
                                <div key={index}
                                onClick={() => console.log(item.text)}
                                className="cursor-pointer py-6">
                                    {item.text}    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}