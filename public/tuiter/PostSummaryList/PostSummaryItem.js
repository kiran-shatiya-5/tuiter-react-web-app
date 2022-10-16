const PostSummaryItem = (posts) => {
  return(`
        <li class="list-group-item bg-dark">
          <div class = "row">
            <div class="col-10">
              <div class="text-secondary">
                <b>${posts.topic}</b>
              </div>
              <div class="d-flex">
                <div class = "text-white">
                  <b>${posts.userName} </b>
                </div>
                <div>
                  <i class="fa-solid fa-check p-1 text-white"></i>
                </div>
                <div class="text-secondary">
                    <b>- ${posts.time}</b>
                </div>
              </div>
              <div class = "text-white">
                ${posts.title}
              </div>
              <div class="text-secondary">
                <b>${posts.tweets}</b>
             </div>
            </div>
            <div class="col-2">
              <img class= "rounded float-end w-100 h-75" src = "${posts.image}" style="height: 100px;"/>
            </div>
          </div>
        </li>
   `);
}
export default PostSummaryItem;
$(PostSummaryItem);
