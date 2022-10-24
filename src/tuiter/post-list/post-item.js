import React from "react";

const PostItem = ({tuits}) => {

  return(
      <div>
        <div className="wd-whole-flex-container">
          <div className="wd-rich-tweet-flex-container">

            <div className="wd-avatar-flex-container">
              <img className="wd-avatar" src={tuits.image} alt="Avatar"
              style={{width: "48px", height: "48px"}}/>
            </div>

            <div className="wd-tweet-flex-container w-100">
              <div className="wd-tweet-head-flex-box">{tuits.userName}
                <i className="fa fa-check"></i>
                <div className="wd-tweet-handle-flex-box">{tuits.handle} .  {tuits.time}</div>
                <i className="fa fa-ellipsis-h"></i>
              </div>

              <div className="wd-paragraph-flex-container w-100">
                <p>{tuits.title}</p>
              </div>

              <div className="wd-rich-media-container">
                <div className="wd-rich-text-rounded-container wd-border-size w-100 h-100">
                  <img className="wd-image-1 w-100" src={tuits.richImage}
                       style={{height: "100%"}}/>
                  <div
                      className="wd-rich-text-head-flex-box w-100">{tuits.richHeader}
                  </div>
                  <div
                      className="wd-rich-text-content-flex-box w-100">{tuits.richTitle}
                  </div>
                  <div className="wd-rich-text-link-flex-box w-100">
                    <i className="bi bi-link text-secondary"></i>
                    <div className="wd-link text-primary">{tuits.richLink}</div>
                  </div>
                </div>
              </div>

              <div className="wd-tweet-response-flex-container">
                <a className="wd-message-reaction w-100" href="#">
                  <i className="bi bi-chat-left text-secondary"></i>
                  <div className="wd-message-count">{tuits.messageCount}</div>
                </a>
                <a className="wd-retweet-reaction w-100" href="#">
                  <i className="bi bi-arrow-repeat text-secondary"></i>
                  <div className="wd-retweet-count">{tuits.retweetCount}</div>
                </a>
                <a className="wd-love-reaction w-100" href="#">
                  <i className="bi bi-heart text-secondary"></i>
                  <div className="wd-love-count text-secondary">{tuits.loveCount}</div>
                </a>
                <a className="wd-share-reaction w-100" href="#">
                  <i className="bi bi-box-arrow-up text-secondary"></i>
                  <div className="wd-share-count"></div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

  );
}
export default PostItem;

