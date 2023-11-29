import React from "react";

export default function UserMenu() {
  const UserMenu = [
    {
      text: "Online",
      data: [],
    },
    {
      text: "Registered",
      data: [],
    },
    {
      text: "Friend",
      data: [],
    },
  ];
  return (
    <div className="w-full h-[calc(100%-96px)] flex flex-col gap-2">
      <div className="w-full flex flex-row items-center justify-start text-white font-semibold gap-2">
        {UserMenu.map((item, index) => {
          return (
            <div key={index} className="cursor-pointer">{item.text} ({item.data.length})</div>
          )
        })}
      </div>
    </div>
  )
}