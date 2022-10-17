const NavigationSidebar = (obj) => {
  if(obj=='explore') {
    return (`
      <div class="list-group">
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-t text-white"></i></a>
        <a href="../HomeScreen/index.html" class="bg-dark list-group-item list-group-item-action" id="home"><i class="fa-solid fa-house-chimney text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Home</h6></a>
        <a href="../ExploreScreen/index.html" class="bg-primary list-group-item list-group-item-action active" id="explore"><i class="fa-sharp fa-solid fa-hashtag text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline"> Explore</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-bell text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Notifications</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-envelope text-white "></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Messages</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-bookmark text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Bookmarks</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-list text-white"></i> <h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Lists</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-user text-white"></i> <h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Profile</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-circle-info text-white"></i> <h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> More</h6></a>
      </div>
      <button type="submit" class="btn btn-primary text-white p-1 rounded-pill w-100 mt-3">Tuit</button>
 `);
  }
  if(obj=='home')
   {
      return (`
      <div class="list-group">
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-t text-white"></i></a>
        <a href="../HomeScreen/index.html" class="bg-primary list-group-item list-group-item-action active" id="home"><i class="fa-solid fa-house-chimney text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Home</h6></a>
        <a href="../ExploreScreen/index.html" class="bg-dark list-group-item list-group-item-action" id="explore"><i class="fa-sharp fa-solid fa-hashtag text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Explore</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-bell text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Notifications</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-envelope text-white "></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Messages</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-bookmark text-white"></i><h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Bookmarks</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-list text-white"></i> <h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Lists</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-user text-white"></i> <h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> Profile</h6></a>
        <a href="#" class="bg-dark list-group-item list-group-item-action"><i class="fa-solid fa-circle-info text-white"></i> <h6 class="d-none d-sm-none d-md-none d-lg-none d-xl-inline d-xxl-inline text-white"> More</h6></a>
      </div>
      <button type="submit" class="btn btn-primary text-white p-1 rounded-pill w-100 mt-3">Tuit</button>
 `);
    }
}
export default NavigationSidebar;

