import { PieceType, PieceName } from "types/Chess";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "@styles/Chess.module.scss";
import {
  faChess,
  faChessBishop,
  faChessKing,
  faChessKnight,
  faChessPawn,
  faChessQueen,
  faChessRook,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const getChessPiece = (name: PieceName): IconDefinition => {
  switch (name) {
    case PieceName.King:
      return faChessKing;
    case PieceName.Queen:
      return faChessQueen;
    case PieceName.Bishop:
      return faChessBishop;
    case PieceName.Knight:
      return faChessKnight;
    case PieceName.Rook:
      return faChessRook;
    case PieceName.Pawn:
      return faChessPawn;
    default:
      return faChess;
  }
};

const Piece = ({ name, isWhite }: PieceType) => {
  return (
    <FontAwesomeIcon
      className={styles.piece}
      icon={getChessPiece(name)}
      style={{ color: isWhite ? "white" : "black" }}
    />
  );
};

export default Piece;
