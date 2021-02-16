export interface Album {
    _id: string,
    artist: string,
    albumName: string,
    year: number,
    duration: string,
}

export interface Song {
    _id: number,
    album: string,
    name: string,
    size: string,
    duration: number,
}

export interface Player {
    selectedAlbumName: string,
    selectedAlbumSongs: Song[],
    selectedSongTitle: string,
    selectedSongCurrentTime: number,
    selectedSongDuration: number,
    isPlaying: boolean,
    isShuffle: boolean,
    isRepeat: boolean,
    volume: number,
    errorMessage: string,
}