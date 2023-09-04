import Api from "./api/lastfm"

const path = "/?method=user."
const API_KEY = process.env.REACT_APP_LAST_FM_API_KEY

const LastFmUser = {
  getWeeklyChartList(user) {
    return Api.request(
      `${path}getWeeklyChartList&user=${user}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
  getWeeklyTrackChart(user) {
    return Api.request(
      `${path}getWeeklyTrackChart&user=${user}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
  getWeeklyArtistChart(user) {
    return Api.request(
      `${path}getWeeklyArtistChart&user=${user}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
  getWeeklyAlbumChart(user) {
    return Api.request(
      `${path}getWeeklyAlbumChart&user=${user}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  },
  getInfo(user) {
    return Api.request(
      `${path}getInfo&user=${user}&api_key=${API_KEY}&format=json`,
      { method: "GET" }
    )
  }
}

export default LastFmUser
