import Image from "next/image";
import React from "react";

const Hisab_card = () => {
  const amt1 = -1565;
  var color = "rgb(74, 222, 128)";
  if (amt1 < 0) {
    color = "rgb(239,68,68)";
    // color = "rgb(248,113,113)";
  }

  return (
    <>
      <div className="m-6 bg-[#f9f5f5] p-6  flex gap-10">
        <div className="profile_card cursor-pointer p-2 bg-white w-[18rem] h-[24rem] rounded-3xl flex flex-col justify-around items-center shadow-lg transition-transform hover:scale-105 transform-gpu duration-300 ease-out will-change-transform hover:shadow-sm">
          <div
            style={{ borderColor: color }}
            className={`profile_img w-[12rem]  h-[12rem] border-[0.45rem] p-2  rounded-full  mx-auto`}
          >
            <img
              src={"/profile.jpg"}
              className="w-[100%] h-[100%] object-cover bg-contain rounded-full block"
            />
          </div>
          <div className="text-3xl font-bold font-sans">Ankit Tiwari</div>
          <div
            style={{ backgroundColor: color }}
            className={`text-[1.5rem] font-bold rounded-xl text-white px-[4.5rem] py-[0.45rem] whitespace-nowrap `}
          >
            {amt1}/-
          </div>
        </div>
        <div className="profile_card cursor-pointer p-2 bg-white w-[18rem] h-[24rem] rounded-3xl flex flex-col justify-around items-center shadow-lg transition-transform hover:scale-105 transform-gpu duration-300 ease-out will-change-transform hover:shadow-sm">
          <div
            style={{ borderColor: color }}
            className={`profile_img w-[12rem]  h-[12rem] border-[0.45rem] p-2  rounded-full  mx-auto`}
          >
            <img
              src={"/profile.jpg"}
              className="w-[100%] h-[100%] object-cover bg-contain rounded-full block"
            />
          </div>
          <div className="text-3xl font-bold font-sans">Ankit Tiwari</div>
          <div
            style={{ backgroundColor: color }}
            className={`text-[1.5rem] font-bold rounded-xl text-white px-[4.5rem] py-[0.45rem] whitespace-nowrap `}
          >
            {amt1}/-
          </div>
        </div>
        <div className="profile_card cursor-pointer p-2 bg-white w-[18rem] h-[24rem] rounded-3xl flex flex-col justify-around items-center shadow-lg transition-transform hover:scale-105 transform-gpu duration-300 ease-out will-change-transform hover:shadow-sm">
          <div
            style={{ borderColor: color }}
            className={`profile_img w-[12rem]  h-[12rem] border-[0.45rem] p-2  rounded-full  mx-auto`}
          >
            <img
              src={"/profile.jpg"}
              className="w-[100%] h-[100%] object-cover bg-contain rounded-full block"
            />
          </div>
          <div className="text-3xl font-bold font-sans">Ankit Tiwari</div>
          <div
            style={{ backgroundColor: color }}
            className={`text-[1.5rem] font-bold rounded-xl text-white px-[4.5rem] py-[0.45rem] whitespace-nowrap `}
          >
            {amt1}/-
          </div>
        </div>

      </div>
    </>
  );
};

export default Hisab_card;

/* <div className="flex h-[45%] mt-4 mx-5">
<div className="w-[18%] h-[45%] bg-[url('/profile2.png')] bg-cover bg-center rounded-xl">
  <div className="w-full h-full flex flex-col justify-center items-center backdrop-contrast-50 bg-blue-400/20 rounded-xl">
    <h1 className=" text-2xl font-semibold text-white text-center">
      Ankit Tiwari
    </h1>
    <div className="bg-white h-28 w-28 rounded-full border-2  mx-auto overflow-hidden my-6">
      <img
        src={"/profile2.png"}
        className="w-[100%] h-[100%] object-cover bg-cover"
      />
    </div>
    <div
      className={`${
        amt1 >= 0
          ? "bg-green-300 p-3 rounded-2xl m-2"
          : "bg-red-300 p-3 rounded-2xl m-2"
      }`}
    >
      <h1 className="text-2xl font-semibold text-white text-center">
        {amt1}/-
      </h1>
    </div>
  </div>
</div>
</div>
<div className="flex h-[45%] mt-4 mx-5">
<div className="w-[18%] h-[45%] bg-[url('/profile.jpg')] bg-cover bg-center rounded-xl">
  <div className="w-full h-full flex flex-col justify-center items-center backdrop-contrast-50 bg-blue-400/20 rounded-xl">
    <h1 className=" text-2xl font-semibold text-white text-center">
      Ankit Tiwari
    </h1>
    <div className="bg-white h-28 w-28 rounded-full border-2  mx-auto overflow-hidden my-6">
      <img
        src={"/profile.jpg"}
        className="w-[100%] h-[100%] object-cover bg-cover"
      />
    </div>
    <div
      className={`bg-${
        amt2 >= 0
          ? "green-300 p-3 rounded-2xl m-2"
          : "red-300 p-3 rounded-2xl m-2"
      } `}
    >
      <h1 className="text-2xl font-semibold text-white text-center">
        {amt2}/-
      </h1>
    </div>
  </div>
</div>
</div> */

/* <div className="profile_card_div relative h-[35%] w-[18%] rounded-xl mx-auto  flex flex-col justify-between bg-blend-overlay">
        <h1 className=" text-2xl font-semibold text-white text-center">
          Ankit Tiwari
        </h1>
        <div className="bg-white h-28 w-28 rounded-full border-2  mx-auto overflow-hidden my-6">
          <img
            src={"/profile.jpg"}
            className="w-[100%] h-[100%] object-cover bg-cover"
          />
        </div>
        <h1 className="text-2xl font-semibold text-white text-center">
          1000000/-
        </h1>
        {/* <div className="profile_img_div w-[100%] h-[100%] overflow-hidden p-2.5 rounded-xl">
          <div className="name_amt_div text-lg font-semibold text-white text-center">
            <h1>Ankit Tiwari</h1>
          </div>
          {/* <img src={"/profile.jpg"} className="profile_img" /> */
/* </div> */
/* </div>  */
