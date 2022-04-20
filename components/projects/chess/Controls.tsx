import { startGame } from "@actions/chessActions/startGame";
import React from "react";
import { useDispatch } from "react-redux";
import styles from "styles/Chess.module.scss";
import Timer from "./Timer";

const Controls = () => {
  const dispatch = useDispatch();

  const handleStartGame = () => {
    dispatch(startGame());
  };

  return (
    <div className={styles.controlsContainer}>
      <Timer isWhite={true} />
      <Timer isWhite={false} />
      <button onClick={handleStartGame}>Start</button>
    </div>
  );
};

export default Controls;
