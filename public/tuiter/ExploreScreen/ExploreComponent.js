import PostSummaryList from "../PostSummaryList/PostSummaryList.js";

const ExploreComponent = () => {
  return(`
            <div class="row bg-black">
              <div class = "d-flex">
                <div class ="position-relative col-11">
                  <input class = "ps-5 form-control rounded-pill mt-4" placeholder="Search Tuiter" style="width: 100%"/>
                    <i class="position-absolute fa-solid fa-magnifying-glass wd-search-tuiter text-secondary"></i>
                </div>
                <div class = "col-1">
                   <i class="fa-solid fa-gear fa-2x pt-1 p-3 mt-4" style="height: 100%; color: dodgerblue"></i>
                </div>
              </div>
              
           </div>
           <ul class="nav mb-2 nav-tabs">
              <li class="nav-item">
                <a class="nav-link active text-white bg-dark border-0" href="#" >For you</a>
              </li>
              <li class="nav-item">
                 <a class="nav-link text-white" href="#">Trending</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">News</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">Sports</a>
              </li>
              <li class="nav-item d-none d-sm-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <a class="nav-link text-white" href="#">Entertainment</a>
              </li>
            </ul>
           
           <!-- image with overlaid text -->
           <div class="position-relative">
           <img src="../../labs/a4/tuiter/images/starship.jpg" style="width:100%;"/>
           <h1 class="position-absolute bottom-0 left-0 text-white p-2"> SpaceX's Starship</h1>
           </div>
           
           ${PostSummaryList()}
          
           
    `);
}
export default ExploreComponent;
