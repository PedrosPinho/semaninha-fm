export const processTop5 = (artists, albums, tracks, userInfo) => {
  const top5 = {
    artists: artists.weeklyartistchart.artist.slice(0, 5),
    albums: albums.weeklyalbumchart.album.slice(0, 5),
    tracks: tracks.weeklytrackchart.track.slice(0, 5),
    user_img: userInfo.user.image[3]["#text"]
  };
  return top5;
};

export const getReportDate = () => {
  let yesterday = new Date();
  let lastWeek = new Date();
  yesterday.setDate(yesterday.getDate() - 1)
  lastWeek.setDate(lastWeek.getDate() - 8)
  return `${lastWeek
    .toDateString()
    .slice(4, 10)} - ${yesterday.toDateString().slice(4, 10)}`;
};

export const getReportScrobbles = tracks => {
  let count = 0;
  tracks.forEach(t => (count += parseInt(t.playcount)));
  return count;
};
