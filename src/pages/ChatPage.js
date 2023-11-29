import React from "react";

export default function ChatPage() {
    const ButtonList = [
        { text: "Chat" },
        { text: "Delete" }
    ]

    return (
        <div className="w-full h-full p-4 flex flex-col gap-4 justify-between items-baseline">
            <div className="w-full justify-start gap-5 flex flex-row items-center py-5">
                {
                    ButtonList.map((item, index) => {
                        return (
                            <div key={index} className="border-[2px]  px-6 py-2 items-center flex flex-row border-white font-bold text-white text-[14px] cursor-pointer hover:bg-white/80 hover:text-black hover:border-black/40">
                                {item.text}
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-full h-full max-h-[calc(100vh-320px)] object-cover overflow-y-scroll text-white text-start">

            </div>
            <div className="w-full h-[80px] fiexd bottom flex flex-row">
                <textarea name="message" className="resize-none w-5/6 h-[80px] border-[1px] border-white px-4 outline-none py-[6px] bg-black text-white" >
                </textarea>
                <div className="w-1/5 h-[80px] border-r-[1px] border-t-[1px] border-b-[1px] border-r-white border-t-white border-b-white flex flex-row justify-center items-center bg-black text-white cursor-pointer hover:text-black hover:bg-white/80">
                    Send
                </div>
            </div>
        </div>
    )
}