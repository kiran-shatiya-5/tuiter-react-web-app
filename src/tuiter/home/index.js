import React from "react";
import "./index.css"
import PostList from "../post-list/index.js";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return(
      <div>
        <div>
          <WhatsHappening/>
          <PostList/>
        </div>
      </div>
   );

};
export default HomeComponent;