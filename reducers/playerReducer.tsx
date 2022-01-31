import {
  CHANGE_ALBUM_FAIL,
  CHANGE_ALBUM_SUCCESS,
  CHANGE_SONG,
  CHANGE_VOLUME,
  PAUSE_SONG,
  PlayerActionsTypes,
  PLAY_SONG,
  TOGGLE_RANDOM,
  TOGGLE_SHUFFLE,
  TRACK_DURATION,
} from "types/actions";
import { Player } from "types/Player";

const initState: Player = {
  selectedAlbumName: "",
  selectedAlbumSongs: [],
  selectedSongTitle: "",
  selectedSongCurrentTime: 0,
  selectedSongDuration: 0,
  isPlaying: false,
  isShuffle: false,
  isRepeat: false,
  volume: 40,
  errorMessage: "",
};

const playerReducer = (
  state = initState,
  action: PlayerActionsTypes
): Player => {
  switch (action.type) {
    case CHANGE_ALBUM_SUCCESS:
      return {
        ...state,
        selectedAlbumName: action.selectedAlbumName,
        selectedAlbumSongs: action.selectedAlbumSongs,
      };
    case CHANGE_ALBUM_FAIL:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };
    case PLAY_SONG:
      return {
        ...state,
        selectedSongTitle: action.selectedSongTitle,
        isPlaying: true,
      };
    case PAUSE_SONG:
      return {
        ...state,
        isPlaying: false,
      };
    case CHANGE_SONG:
      return {
        ...state,
        selectedSongTitle: state.selectedAlbumSongs[action.id].name,
        selectedSongDuration: state.selectedAlbumSongs[action.id].duration,
      };
    case TOGGLE_SHUFFLE:
      return {
        ...state,
        isShuffle: !state.isShuffle,
      };
    case TOGGLE_RANDOM:
      return {
        ...state,
        isRepeat: !state.isRepeat,
      };
    case CHANGE_VOLUME:
      return {
        ...state,
        volume: action.volume,
      };
    case TRACK_DURATION:
      return {
        ...state,
        selectedSongCurrentTime: action.selectedSongCurrentTime,
        selectedSongDuration: action.selectedSongDuration,
      };
    default:
      return { ...state };
  }
};

export default playerReducer;
