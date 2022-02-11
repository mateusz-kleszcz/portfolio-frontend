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
import { Draggable } from "react-beautiful-dnd";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

const Piece = ({ name, position, isWhite }: PieceType) => {
  useEffect(() => {
    console.log(position);
  }, [position]);

  return (
    <AnimatePresence>
      <Draggable
        key={`${position[0]}x${position[1]}`}
        draggableId={`${position[0]}x${position[1]}`}
        index={0}
      >
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <motion.div>
              <FontAwesomeIcon
                className={styles.piece}
                icon={getChessPiece(name)}
                style={{ color: isWhite ? "white" : "black" }}
              />
            </motion.div>
          </div>
        )}
      </Draggable>
    </AnimatePresence>
  );
};

export default Piece;
