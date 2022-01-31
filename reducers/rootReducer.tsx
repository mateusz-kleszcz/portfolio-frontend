import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import screenshotGeneratorReducer from "./screenshotGeneratorReducer";
import workoutTimerReducer from "./workoutTimerReducer";
import chessReducer from "./chessReducer";

export default combineReducers({
  playerReducer,
  screenshotGeneratorReducer,
  workoutTimerReducer,
  chessReducer,
});
