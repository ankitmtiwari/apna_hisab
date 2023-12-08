import React from "react";

function Chat_profle_tile({ name, img }) {
  return (
    <>
      <div className="border-2  flex items-center rounded-xl shadow-md m-2 p-2">
        <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
          <img src={img} className="w-[100%] h-[100%] object-cover" />
        </div>
        <div className="px-10 text-xl font-semibold">{name}</div>
      </div>
    </>
  );
}

export default Chat_profle_tile;
