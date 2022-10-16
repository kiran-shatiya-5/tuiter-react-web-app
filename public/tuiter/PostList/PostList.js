import tuits from "./tuits.js"
import PostItem from "./PostItem.js";

function PostList() {
  return(`
      
         ${
      tuits.map(tuits => {
        return(PostItem(tuits));
      }).join('')
  }
      
   `);
};
export default PostList;
$(PostList());