import { Song } from "./Player"

export const CHANGE_ALBUM_SUCCESS = 'CHANGE_ALBUM_SUCCESS'
export const CHANGE_ALBUM_FAIL = 'CHANGE_ALBUM_FAIL'

export const PLAY_SONG = 'PLAY_SONG'
export const PAUSE_SONG = 'PAUSE_SONG'
export const CHANGE_SONG = 'CHANGE_SONG'

export const TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'
export const TOGGLE_RANDOM = 'TOGGLE_RANDOM'

export const CHANGE_VOLUME = 'CHANGE_VOLUME'
export const TRACK_DURATION = 'TRACK_DURATION'


export interface ChangeAlbumSuccess {
    type: typeof CHANGE_ALBUM_SUCCESS,
    selectedAlbumSongs: Song[],
    selectedAlbumName: string,
}

export interface ChangeAlbumFail {
    type: typeof CHANGE_ALBUM_FAIL,
    errorMessage: string,
}

export interface PlaySong {
    type: typeof PLAY_SONG,
    selectedSongTitle: string,
}

export interface PauseSong {
    type: typeof PAUSE_SONG,
}

export interface ChangeSong {
    type: typeof CHANGE_SONG,
    id: number,
}

export interface ToggleShuffle {
    type: typeof TOGGLE_SHUFFLE,
}

export interface ToggleRandom {
    type: typeof TOGGLE_RANDOM,
}

export interface ChangeVolume {
    type: typeof CHANGE_VOLUME,
    volume: number
}

export interface TrackDuration {
    type: typeof TRACK_DURATION,
    selectedSongCurrentTime: number,
    selectedSongDuration: number,
}

export type PlayerActionsTypes = ChangeAlbumSuccess | ChangeAlbumFail | PlaySong | PauseSong | ChangeSong | ToggleShuffle | ToggleRandom | ChangeVolume | TrackDuration

export type AppActions = PlayerActionsTypes