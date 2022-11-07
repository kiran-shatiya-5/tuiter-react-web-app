import React from "react";
import PostItem from "./post-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuitArray = useSelector(state => state.tuits)
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
export default TuitsList;
