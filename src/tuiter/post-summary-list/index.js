import React from "react";
import PostSummaryItem
  from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
  const postsArray = useSelector(state => state.tuits)
  return(
      <ul className="list-group">
        {
          postsArray.map( posts =>
              <PostSummaryItem
                  key={posts._id}
                  post={posts}/>
          )
        }
      </ul>
  );
};
export default PostSummaryList;

