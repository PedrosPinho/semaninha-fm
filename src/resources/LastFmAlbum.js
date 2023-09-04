import Api from "./api/lastfm"

const path = "/?method=album."
const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY

const LastFmAlbum = {
  getInfo(artist, album, mbid) {
    return Api.request(
      `${path}getInfo&artist=${artist}&album=${album}&mbid=${mbid}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
}

export default LastFmAlbum
