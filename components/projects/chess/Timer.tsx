import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import styles from "styles/Chess.module.scss";

interface TimerProps {
  isWhite: boolean;
}

const Timer = ({ isWhite }: TimerProps) => {
  const [minutes, setMinutes] = useState<number>(10);
  const [seconds, setSeconeds] = useState<number>(0);

  const getTime = (): string => {
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const { isWhiteMove, isStarted } = useSelector(
    (state: AppState) => state.chessReducer
  );

  const calculateTime = (): void => {
    if (minutes < 0) {
      console.log("LOST ON TIME");
    } else {
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconeds(59);
      } else {
        setSeconeds(seconds - 1);
      }
    }
  };

  useEffect(() => {
    const countDown = setInterval(() => {
      if (isWhite === isWhiteMove && isStarted) {
        calculateTime();
      }
    }, 1000);
    return () => clearInterval(countDown);
  }, [isStarted, isWhiteMove, minutes, seconds]);

  return <div className={styles.timer}>{getTime()}</div>;
};

export default Timer;
