import React from "react";
import "./index.css"
import TuitsList from "../post-list/index.js";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return(
      <div>
        <div>
          <WhatsHappening/>
          <TuitsList/>
        </div>
      </div>
   );

};
export default HomeComponent;