import React from "react";
import tuitArray from "./tuits.json"
import PostItem from "./post-item";

const PostList = () => {

  return(
      <div>
        {
          tuitArray.map(tuits =>
              <PostItem tuits={tuits}/>
          )
        }

      </div>
   );
};
export default PostList;
