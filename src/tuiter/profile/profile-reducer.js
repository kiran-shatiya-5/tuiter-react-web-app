import { createSlice } from "@reduxjs/toolkit";
import profile from "./profile.json";

const currentProfile = {
  "name": "Chandler Bing",
  "tuits": "6114 Tuits",
  "location": "Boston, MA",
};
const templateProfile = {
  ...currentProfile,
  "website": "",
  "dateofBirth": "November 21, 1968",
  "dateJoined": "April 2010",
  "followingCount": "1K",
  "followersCount": "100K"
}

const profileSlice = createSlice({
  name: 'profiles',
  initialState: profile,
  reducers: {
    changeProfileName(state, action) {
      const profiles = state.find((profiles) =>
          profiles._id === action.payload._id)
      profiles.name = action.payload
    },
    changeBio(state, action) {
      const profiles = state.find((profiles) =>
          profiles._id === action.payload._id)
      profiles.bio = action.payload
    },
    changeLocation(state, action) {
      const profiles = state.find((profiles) =>
          profiles._id === action.payload._id)
      profiles.location = action.payload
    },
    changeWebsite(state, action) {
      const profiles = state.find((profiles) =>
          profiles._id === action.payload._id)
      profiles.website = action.payload
    },
    changeDate(state, action) {
      const profiles = state.find((profiles) =>
          profiles._id === action.payload._id)
      profiles.dateofBirth = action.payload
    },
  }
});
export const {changeProfileName, changeBio, changeDate, changeLocation, changeWebsite} = profileSlice.actions
export default profileSlice.reducer;