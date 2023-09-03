import api from './base'

const baseApi = api(process.env.REACT_APP_LAST_FM_API_URL)
const LastFM = {
  request (path, options) {
    return baseApi.request(path, options)
  }
}

export default LastFM
