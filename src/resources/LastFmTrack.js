import Api from "./api/lastfm"

const path = "/?method=track."
const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY

const LastFmTrack = {
  getInfo(artist, track, mbid) {
    return Api.request(
      `${path}getInfo&artist=${artist}&track=${track}&mbid=${mbid}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
}

export default LastFmTrack
