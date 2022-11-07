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
      const temp = state
      temp.name = action.payload
      return temp
    },
    changeBio(state, action) {
      const temp = state
      temp.bio = action.payload
      return temp
    },
    changeLocation(state, action) {
      const temp = state
      temp.location = action.payload
      return temp
    },
    changeWebsite(state, action) {
      const temp = state
      temp.website = action.payload
      return temp
    },
    changeDate(state, action) {
      const temp = state
      temp.date = action.payload
      return temp
    },
  }
});
export const {changeProfileName, changeBio, changeDate, changeLocation, changeWebsite} = profileSlice.actions
export default profileSlice.reducer;