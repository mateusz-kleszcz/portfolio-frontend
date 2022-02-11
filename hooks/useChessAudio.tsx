import { useEffect, useState } from "react";

const getSoundURI = (name: string): string => {
  switch (name) {
    case "CASTLE":
      return "https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/castle.mp3";
    case "CAPTURE":
      return "https://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/capture.mp3";
    case "MOVE":
      return "http://images.chesscomfiles.com/chess-themes/sounds/_MP3_/default/move-self.mp3";
    default:
      return "";
  }
};

const useChessAudio = (name: string): [boolean, () => void] => {
  const [audio] = useState<HTMLAudioElement>(new Audio(getSoundURI(name)));
  const [playing, setPlaying] = useState<boolean>(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

export default useChessAudio;
