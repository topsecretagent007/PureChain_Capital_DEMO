import React from "react";
import ChatPage from "./ChatPage";
import Donate from "../components/donate";
import UserMenu from "../components/userMenu";

export default function Home() {
    return (
        <div className="w-full min-h-[calc(100vh-96px)] bg-black">
            <div className="w-full h-full flex flex-row">
                <div className="w-1/4">
                    <Donate />
                </div>
                <div className="w-1/2 min-h-[calc(100vh-96px)]">
                    <ChatPage />
                </div>
                <div className="w-1/4">
                    <UserMenu />
                </div>
            </div>
        </div>
    )
}