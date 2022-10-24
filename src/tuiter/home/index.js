import React from "react";
import "./index.css"
import PostList from "../post-list/index.js";

const HomeComponent = () => {
  return(
      <div>
        <div>
          <PostList/>
        </div>
      </div>
   );

};
export default HomeComponent;