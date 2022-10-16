const PostItem = (tuits) => {
  return(`
    <div class = "wd-whole-flex-container">
    <div class="wd-rich-tweet-flex-container">
      
      <div class="wd-avatar-flex-container">
        <img class="wd-avatar" src="${tuits.image}" alt="Avatar"
             style="width:48px; height:48px;"/>
      </div>
    
      <div class="wd-tweet-flex-container w-100">
        <div class="wd-tweet-head-flex-box">${tuits.userName} 
          <i class = "fa fa-check"></i>
          <div class="wd-tweet-handle-flex-box">${tuits.handle} . ${tuits.time}</div>
          <i class="fa fa-ellipsis-h"></i>
        </div>
    
        <div class="wd-paragraph-flex-container w-100">
          <p>${tuits.title}</p>
        </div>
    
        <div class="wd-rich-media-container">
          <div class="wd-rich-text-rounded-container wd-border-size w-100">
            <img class="wd-image-1 w-100" src=${tuits.richImage}
                 style="width: 504px; height: 264px;"/>
            <div class="wd-rich-text-head-flex-box w-100">${tuits.richHeader}
            </div>
            <div class="wd-rich-text-content-flex-box w-100">${tuits.richTitle}
            </div>
            <div class="wd-rich-text-link-flex-box w-100">
              <i class="fa fa-link"></i>
              <div class="wd-link">${tuits.richLink}</div>
            </div>
          </div>
        </div>
    
        <div class="wd-tweet-response-flex-container">
          <a class="wd-message-reaction w-100" href="#">
            <i class="fa fa-comment-o"></i>
            <div class="wd-message-count">${tuits.messageCount}</div>
          </a>
          <a class="wd-retweet-reaction w-100" href="#">
            <i class="fa fa-retweet"></i>
            <div class="wd-retweet-count">${tuits.retweetCount}</div>
          </a>
          <a class="wd-love-reaction w-100" href="#">
            <i class="fa fa-heart"></i>
            <div class="wd-love-count">${tuits.loveCount}</div>
          </a>
          <a class="wd-share-reaction w-100" href="#">
            <i class="fa fa-share-square-o"></i>
            <div class="wd-share-count"></div>
          </a>
        </div>
    
      </div>
    </div>
    </div>
  `);
}
export default PostItem;
$(PostItem);
