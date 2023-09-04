import Api from "./api/lastfm"

const path = "/?method=artist."
const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY

const LastFmArtist = {
  getInfo(artist, mbid) {
    return Api.request(
      `${path}getInfo&artist=${artist}&mbid=${mbid}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
}

export default LastFmArtist
