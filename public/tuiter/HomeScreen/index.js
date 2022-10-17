import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

function homeComponent() {
  $('#wd-home').append(`
      <div class="container bg-black text-white">
         <div class="row mt-2">
         
            <div class="col-2 col-md-2 col-lg-1 col-xl-2 mt-4">
              ${NavigationSidebar('home')}
            </div>

            <div class="col-10 col-lg-7 col-xl-6 mt-4">
              ${PostList()}
            </div>
            
            <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mt-4">
              ${PostSummaryList()}
            </div>
            
         </div>
     </div>
   `);
}
$(homeComponent);