export const processTop5 = (artists, albums, tracks) => {
    const top5 = {
        "artists": artists.weeklyartistchart.artist.slice(0, 5),
        "albums": albums.weeklyalbumchart.album.slice(0, 5),
        "tracks": tracks.weeklytrackchart.track.slice(0, 5)
    }
    return top5
}