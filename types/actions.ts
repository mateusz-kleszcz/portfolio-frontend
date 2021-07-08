import { Song } from "./Player"
import { Workout } from "./WorkoutTimer"

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

export const CHANGE_BACKGROUND_COLOR = 'CHANGE_BACKGROUND_COLOR'
export const CHANGE_TEXT = 'CHANGE_TEXT'
export const CHANGE_PHONE = 'CHANGE_PHONE'
export const CHANGE_SIZE = 'CHANGE_SIZE'

export interface ChangeBackgroundColor {
    type: typeof CHANGE_BACKGROUND_COLOR,
    backgroundColor: string,
}

export interface ChangeText {
    type: typeof CHANGE_TEXT,
    text: string,
}

export interface ChangePhone {
    type: typeof CHANGE_PHONE,
    phone: string
}

export interface ChangeSize {
    type: typeof CHANGE_SIZE,
    size: number,
}

export type ScreenshotGeneratorActionsTypes = ChangeBackgroundColor | ChangeText | ChangePhone | ChangeSize

export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS'
export const ADD_WORKOUT_FAIL = 'ADD_WORKOUT_FAIL'
export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS'
export const GET_WORKOUTS_FAIL = 'GET_WORKOUTS_FAIL'

export interface AddWorkoutSuccess {
    type: typeof ADD_WORKOUT_SUCCESS,
    workout: Workout,
}

export interface AddWorkoutFail {
    type: typeof ADD_WORKOUT_FAIL,
    errorMessage: string,
}

export interface GetWorkoutsSuccess {
    type: typeof GET_WORKOUTS_SUCCESS,
    workouts: Workout[],
}

export interface GetWorkoutsFail {
    type: typeof GET_WORKOUTS_FAIL,
    errorMessage: string
}

export type WorkoutTimerActionsTypes = AddWorkoutSuccess | AddWorkoutFail | GetWorkoutsSuccess | GetWorkoutsFail

export type AppActions = PlayerActionsTypes | ScreenshotGeneratorActionsTypes | WorkoutTimerActionsTypes