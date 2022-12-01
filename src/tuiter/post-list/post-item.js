import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk, deleteTuitThunk} from "../../services/tuits-thunks";;

const TuitsItem = ({tuits}) => {

  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  }
  return(
      <div>
        <div className="wd-whole-flex-container">
        <div className="wd-rich-tweet-flex-container">

          <div className="wd-avatar-flex-container">
            <img className="wd-avatar" src = {`../../images/${tuits.image}`} alt="Avatar"
                 style={{width: "48px", height: "48px"}}/>
          </div>

          <div className="wd-tweet-flex-container w-100">
            <div className="wd-tweet-head-flex-box">{tuits.username}
              <i className="fa fa-check"></i>
              <div className="wd-tweet-handle-flex-box">{tuits.handle} .  {tuits.time}
                <i className="bi bi-x-lg float-end"
                   onClick={() => deleteTuitHandler(tuits._id)}></i>
              </div>
            </div>

            <div className="wd-paragraph-flex-container w-100">
              <p>{tuits.tuit}</p>
            </div>

            <div className="wd-tweet-response-flex-container">
              <a className="wd-message-reaction w-100" href="#">
                <i className="bi bi-chat-left text-secondary"></i>
                <div className="wd-message-count">{tuits.replies}</div>
              </a>
              <a className="wd-retweet-reaction w-100" href="#">
                <i className="bi bi-arrow-repeat text-secondary"></i>
                <div className="wd-retweet-count">{tuits.retuits}</div>
              </a>
              <a className="wd-love-reaction w-100" href="#">
                <i onClick={() => dispatch(updateTuitThunk({
                  ...tuits,
                  likes: tuits.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
                <div className="wd-love-count text-secondary">{tuits.likes}</div>
              </a>
              <a className="wd-love-reaction w-100" href="#">
                <i onClick={() => dispatch(updateTuitThunk({
                  ...tuits,
                  dislikes: tuits.dislikes + 1
                }))} className="bi bi-hand-thumbs-down text-secondary"></i>
                <div className="wd-love-count text-secondary">{tuits.dislikes}</div>
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
export default TuitsItem;

