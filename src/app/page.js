import React from "react";
import Hisab_card from "./components/single_components/hisab_card";
import Auth from "./components/main_component/auth";
import Dashboard from "./components/main_component/Dashboard";
const Page = () => {
  return (
    <>
      <Dashboard />
      {/* <Hisab_card amt="1025600" img="/profile.jpg" /> */}

      {/* <Auth />
      <div id="all_hisab_cards">
        <Hisab_card amt="1025600" img="/profile.jpg" />
        <Hisab_card amt="-150" img="/profile.jpg" />
        <Hisab_card amt="100" img="/profile.jpg" />
        <Hisab_card amt="-100" img="/profile.jpg" />
      </div> */}
    </>
  );
};

export default Page;
