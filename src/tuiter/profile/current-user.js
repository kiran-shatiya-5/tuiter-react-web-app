const initialState = {
  name: "Chandler Bing",
  tuits: "6114 Tuits",
  handle: "@chan_loves_mon",
  profilePicture: "chandler.jpg",
  bannerPicture: "scene1.jpeg",
  bio: "Sarcastic, the guy from F.R.I.E.N.D.S, currently loving Ross's sister, this is not a series endorsement btw.",
  website: "",
  location: "Boston, MA",
  dateofBirth: "November 21, 1968",
  dateJoined: "April 2010",
  followingCount: "1K",
  followersCount: "100K"
}

const currentUserReducer = () => {
  return initialState
}

export default currentUserReducer();