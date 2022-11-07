import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
  changeBio,
  changeLocation,
  changeProfileName,
  changeWebsite,
  changeDate
} from "./profile-reducer";

const EditProfile = () => {
  const profile = useSelector(state => state.profile)
  const [Name,setName] = useState(profile.name);
  const [Bio,setBio] = useState(profile.bio);
  const [Location,setLocation] = useState(profile.location);
  const [Website,setWebsite] = useState(profile.website);
  const [Date,setDate] = useState(profile.dateofBirth);

  const dispatch = useDispatch();
  const setNameChange = (event) => {
    console.log('changing name')
    setName(event.target.value);
    dispatch(changeProfileName(Name));
  }

  const setBioChange = (event) => {
    setBio(event.target.value);
    dispatch(changeBio(Bio));
  }

  const setLocationChange = (event) => {
    setLocation(event.target.value);
    dispatch(changeLocation(Location));
  }

  const setWebsiteChange = (event) => {
    setWebsite(event.target.value);
    dispatch(changeWebsite(Website));
  }

  const setDateChange = (event) => {
    setDate(event.target.value);
    dispatch(changeDate(Date));
  }

  return(
      <>
        <div className="wd-whole-flex-container">

          <div className="row wd-padding-left">
            <Link to="/tuiter/profile" className="col-1 wd-padding-top">
              <i className="bi bi-x"></i>
            </Link>
            <div className="col-9">
              <div className="wd-heading mt-1">Edit Profile</div>
            </div>
            <Link to="/tuiter/profile" className="col-2">
              <button className="btn btn-dark text-white border-secondary rounded-pill mt-3">Save</button>
            </Link>
          </div>

          <div className="wd-banner-flex-container mt-3">
            <div >
              <img src={`/images/${profile.bannerPicture}`} className="w-100 wd-image-height"/>
            </div>
          </div>

          <div className="wd-avatar-flex-container position-relative">
            <div>
              <img className="position-absolute wd-nudge-up wd-avatar" src={`/images/${profile.profilePicture}`} alt="Avatar"
                   style={{width: "124px", height: "124px"}}/>
            </div>
          </div>

          <div className ="mt-5 wd-padding-left">
            <label className = "text-secondary" htmlFor="name">Name:</label>
          </div>
          <div className="wd-padding-left">
            <textarea id="name" name="name" rows="1" cols="45" value = {Name}
                      className ="form-control"
                      onChange={setNameChange}></textarea>
          </div>

          <div className="mt-2 wd-padding-left">
            <label className="text-secondary" htmlFor="bio">Bio:</label>
          </div>
          <div className="wd-padding-left">
            <textarea id="bio" name="bio" rows="4" cols="45" value = {Bio}
                      className ="form-control" onChange={setBioChange}></textarea>
          </div>

          <div className="mt-2 wd-padding-left">
            <label className="text-secondary" htmlFor="location">Location:</label>
          </div>
          <div className="wd-padding-left">
            <textarea id="location" name="location" rows="1" cols="45" value={Location}
                      className ="form-control" onChange={setLocationChange}></textarea>
          </div>

          <div className="mt-2 wd-padding-left">
            <label className="text-secondary" htmlFor="site">Website</label>
          </div>
          <div className="wd-padding-left">
            <textarea id="site" name="site" rows="1" cols="45" value = {Website}
                      className ="form-control" onChange={setWebsiteChange}></textarea>
          </div>

          <div className="mt-2 wd-padding-left">
            <label className="text-secondary" htmlFor="dob">BirthDate</label>
          </div>
          <div className="wd-padding-left">
            <textarea id="dob" name="dob" rows="1" cols="45" value ={Date}
                      className ="form-control" onChange={setDateChange}></textarea>
          </div>

          <div className="row mt-3 wd-padding-left">
            <div className="col-10 ">
              Switch to professional
            </div>
            <div className="col-2">
              <i className="bi bi-chevron-right"></i>
            </div>
          </div>

        </div>
      </>
  );
}
export default EditProfile;