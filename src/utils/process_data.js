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
  let currentDateObj = new Date();
  let currentDate2 = new Date();
  currentDateObj.setDate(
    currentDateObj.getDate() - ((currentDateObj.getDay() + 2) % 7)
  );
  currentDate2.setDate(
    currentDate2.getDate() - ((currentDate2.getDay() + 2) % 7)
  );
  currentDate2.setDate(currentDate2.getDate() - 7);
  return `${currentDate2
    .toDateString()
    .slice(4, 10)} - ${currentDateObj.toDateString().slice(4, 10)}`;
};

export const getReportScrobbles = tracks => {
  let count = 0;
  tracks.forEach(t => (count += parseInt(t.playcount)));
  return count
};
