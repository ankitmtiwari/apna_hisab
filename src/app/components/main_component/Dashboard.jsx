import React from "react";
import Chat_profle_tile from "../single_components/Chat_profle_tile";
import Paid_received_chat from "../single_components/Paid_received_chat";

const Dashboard = () => {
  return (
    <>
      <div className="h-[100vh] p-2">
        <div className="bg-white h-full flex justify-between border-4 p-2">
          <div className="w-[35%] border-r-2">
            <div className="bg-purple-800 h-[19%] p-16 text-2xl text-white font-semibold rounded-br-[45px]">
              Nav bar
            </div>
            <div className="all_profiles h-[79%] p-6 bg-white overflow-y-auto mt-2">
              <Chat_profle_tile name="Ankit Tiwari" img="/profile.jpg" />
              <Chat_profle_tile name="Ajay Tiwari" img="/profile2.png" />
              <Chat_profle_tile name="Aman Tiwari" img="/profile.jpg" />
              <Chat_profle_tile name="Anup Tiwari" img="/profile2.png" />
              <Chat_profle_tile name="Arsh Tiwari" img="/profile.jpg" />
              <Chat_profle_tile name="Harsh Tiwari" img="/profile2.png" />
              <Chat_profle_tile name="Hari Tiwari" img="/profile.jpg" />
              <Chat_profle_tile name="Narayan Tiwari" img="/profile2.png" />
            </div>
          </div>
          <div className="w-[65%] flex flex-col justify-between">
            <div className="top-chat-nav border-y-2 flex items-center px-5 shadow-md ">
              <div className="h-10 w-10  rounded-full bg-slate-800 overflow-hidden">
                <img
                  src={"/profile.jpg"}
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
              <div className="p-4">Ankit Tiwari</div>
            </div>
            <div className="chats_transactions h-[85%] p-6 rounded-b-md bg-[#F5F7F8] overflow-y-auto">
              <Paid_received_chat
                amt={10000}
                paid_rece={"paid"}
                desc={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ex."
                }
                date={"09 Dec 2023"}
                isPending={true}
              />
              <Paid_received_chat
                amt={100}
                paid_rece={"paid"}
                desc={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ex."
                }
                date={"09 Dec 2023"}
                isPending={false}
              />
              <Paid_received_chat
                amt={100}
                paid_rece={"received"}
                desc={
                  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, ex."
                }
                date={"09 Dec 2023"}
                isPending={false}
              />
              {/* <Paid_received_chat amt={200000} paid_rece={"paid"} />
              <Paid_received_chat amt={100000} paid_rece={"received"} />
              <Paid_received_chat amt={200000} paid_rece={"paid"} />
              <Paid_received_chat amt={200000} paid_rece={"paid"} />
              <Paid_received_chat amt={200000} paid_rece={"paid"} />
              <Paid_received_chat amt={200000} paid_rece={"paid"} /> */}
            </div>
            <div className="border-b-2 border-x-2 rounded-lg">
              <div className="pay_recive h-10 flex m-2 ">
                <input
                  type="number"
                  className="mx-4 px-4 w-[60%] rounded-xl border border-1"
                  placeholder="Enter Amount..."
                ></input>
                {/* <div className="bg-[#09ff40] px-10 rounded-lg text-white text-lg flex items-center mx-4 cursor-pointer"> */}
                <div className="bg-green-400 px-10 rounded-lg text-white text-lg font-[500] flex items-center mx-4 cursor-pointer">
                  Paid
                </div>
                <div className="bg-[rgb(239,68,68)] px-10 rounded-lg text-white text-lg font-[500]  flex items-center mx-4 cursor-pointer">
                  Received
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-[100vh]">
        <div className="bg-white min-h-[100vh] mb-4 flex justify-between">
          <div className="w-[35%] min-h-[100vh] border-r-2">
            <div className="bg-purple-800 h-[15vh] p-16 text-2xl text-white font-semibold rounded-br-full">
              Nav bar
            </div>
            <div className="all_profiles h-[75vh] p-6 bg-white overflow-y-auto">
              <div className="border-2  flex items-center rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
                <div className="px-10 text-[3vh] font-bold">Ankit Tiwari</div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%]">side bar full screen</div>
        </div>
      </div> */}

      {/* <div className="w-[100%] h-[100vh] relative">
        <div className=" bg-white flex justify-between border-2">
          <div className="w-[35%] border-r-2 ">
            <div className="bg-purple-800 p-16 text-2xl text-white font-semibold rounded-br-full">
              Nav bar
            </div>
            <div className="all_profiles  bg-white px-4 py-6">
              <div className="border-2  flex rounded-xl shadow-md m-3 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
              <div className="border-2  flex rounded-xl shadow-md m-2 p-2">
                <div className="h-16 w-16  rounded-full bg-slate-800 overflow-hidden">
                  <img
                    src={"/profile.jpg"}
                    className="w-[100%] h-[100%] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%]">side bar full screen</div>
        </div>
      </div> */}
    </>
  );
};

export default Dashboard;
