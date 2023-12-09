import React from "react";
import { BiTimeFive } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { MdCurrencyRupee } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function Paid_received_chat({ amt, paid_rece, date, desc, isPending }) {
  let paid_clsname =
    "flex justify-end ml-[70%] bg-green-400 text-white border rounded-lg px-3 m-2";
  let rec_clsname =
    "flex justify-start mr-[70%] bg-[rgb(239,68,68)] text-white border rounded-lg px-3 m-2";
  if (isPending) {
    paid_clsname =
      "flex justify-end ml-[70%] bg-gray-400 text-white border rounded-lg px-3 m-2";
    rec_clsname =
      "flex justify-start mr-[70%] bg-gray-400 text-white border rounded-lg px-3 m-2";
  }
  return (
    <>
      {paid_rece == "paid" ? (
        <div className={paid_clsname}>
          <div className=" w-fit ">
            <div className="flex items-center justify-start ">
              <div className="text-3xl">
                <MdCurrencyRupee />
              </div>
              <div className="text-[3rem] font-[500] min-w-[200px] max-w-[270px] truncate">
                {amt}
              </div>
            </div>
            <div className="line-clamp-3 font-[500]">{desc}</div>
            <div className="flex items-center justify-between ">
              <div className="p-1">
                {isPending ? <BiTimeFive /> : <IoCheckmarkDoneCircle />}
              </div>
              Paid
              <div className="p-1">{date}</div>
              <div className="p-1">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={rec_clsname}>
          <div className=" w-fit ">
            <div className="flex items-center justify-start ">
              <div className="text-3xl">
                <MdCurrencyRupee />
              </div>
              <div className="text-[3rem] font-[500] min-w-[200px] max-w-[270px] truncate">
                {amt}
              </div>
            </div>
            <div className="line-clamp-3 font-[500]">{desc}</div>
            <div className="flex items-center justify-between ">
              <div className="p-1">
                {isPending ? <BiTimeFive /> : <IoCheckmarkDoneCircle />}
              </div>
              Received
              <div className="p-1">{date}</div>
              <div className="p-1">
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Paid_received_chat;

// {paid_rece === "paid" ? (
//     <div className="flex justify-end w-full p-2 m-2 ">
//       <div className="px-7 py-4 border rounded-[10px] text-white text-lg font-bold bg-green-400">
//         {amt}
//       </div>
//     </div>
//   ) : (
//     <div className="flex justify-start w-full p-2 m-2 ">
//       <div className="px-7 py-4 border rounded-[10px] text-white text-lg font-bold bg-[rgb(239,68,68)]">
//         {amt}
//       </div>
//     </div>
//   )}
