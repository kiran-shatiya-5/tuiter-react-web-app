import React from "react";
import postsArray from './posts.json';
import PostSummaryItem
  from "./post-summary-item";

const PostSummaryList = () => {
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

