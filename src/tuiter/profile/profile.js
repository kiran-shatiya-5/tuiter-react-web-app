import React, {useState} from "react";
import {Link} from "react-router-dom";

const Profile = ({profile}) => {
  return(
      <>
        <div className="wd-whole-flex-container">

            <div className="row wd-padding-left">
              <div className="col-1 wd-padding-top">
                 <i className="bi bi-arrow-left"></i>
              </div>
              <div className="col-11">
                <div className="wd-heading">{profile.name}</div>
                <div className="wd-handle">{profile.tuits}</div>
              </div>
            </div>

          <div className="wd-banner-flex-container">
            <div >
              <img src={`/images/${profile.bannerPicture}`} className="wd-image-pos"/>
            </div>
          </div>

          <div className="wd-avatar-flex-container position-relative">
            <div>
              <img className="position-absolute wd-nudge-up wd-avatar" src={`/images/${profile.profilePicture}`} alt="Avatar"
                   style={{width: "124px", height: "124px"}}/>
            </div>
            <Link to="/tuiter/editProfile">
              <button className="btn btn-light border-secondary rounded-pill wd-button">Edit Profile</button>
            </Link>
          </div>

          <div className="wd-profile-flex-container mt-4 wd-profile-padding-left">
            <div>
              <div className="wd-heading">{profile.name}</div>
              <div className="wd-handle">{profile.handle}</div>
            </div>
            <div>
              {profile.bio}
            </div>
            <div className="wd-profile-response-flex-container mt-2">
              <a className="wd-message-reaction w-50" href="#">
                <i className="bi bi-geo-alt text-secondary"></i>
                <div className="wd-message-count">{profile.location}</div>
              </a>
              <a className="wd-retweet-reaction w-100" href="#">
                <i className="bi bi-balloon text-secondary"></i>
                <div className="wd-retweet-count">{profile.dateofBirth}</div>
              </a>
              <a className="wd-love-reaction w-100" href="#">
                <i className="bi bi-calendar3 text-secondary"></i>
                <div className="wd-love-count text-secondary">{profile.dateJoined}</div>
              </a>
            </div>
            <div className="row mt-3">
              <p><b>{profile.followingCount}</b> Following <b>{profile.followersCount}</b> Followers</p>
            </div>

          </div>

        </div>
      </>
  );
}
export default Profile;