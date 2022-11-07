import React from "react";
import "./index.css"
import Profile from "./profile";
import ProfileList from "./profile.json"


const ProfileComponent = () => {
  return(
      <div>
        <div>
          <Profile profile={ProfileList}/>
        </div>
      </div>
  );

};
export default ProfileComponent;