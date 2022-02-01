import { FieldType, PieceName, PieceType } from "types/Chess";

// check is piece allowed on (x, y) position, update board with allowed position and return true if we can continue checking
const isPieceAllowed = (
  x: number,
  y: number,
  isWhite: boolean,
  board: FieldType[][]
): boolean => {
  // if position is fitting the chessboard
  if (0 <= x && x < 8 && 0 <= y && y < 8) {
    // if there is no piece then field is allowed
    if (board[x][y].piece === null) {
      board[x][y].isMoveAllowed = true;
      return true;
    }
    // if there is the enemy piece here, this is the last allowed field
    else if (board[x][y].piece!.isWhite !== isWhite) {
      board[x][y].isMoveAllowed = true;
      return false;
    }
  }
  return false;
};

const getAllowedMoves = (name: PieceName): [number, number][] => {
  switch (name) {
    case PieceName.King:
      return [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
    case PieceName.Queen:
      return [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
    case PieceName.Bishop:
      return [
        [1, 1],
        [1, -1],
        [-1, -1],
        [-1, 1],
      ];
    case PieceName.Knight:
      return [
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2],
        [-2, -1],
        [-2, 1],
        [-1, 2],
      ];
    case PieceName.Rook:
      return [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
      ];
    default:
      return [];
  }
};

const checkAllowedMovesLinear = (
  allowedMoves: [number, number][],
  selectedPiece: PieceType,
  board: FieldType[][]
): void => {
  const { position, isWhite } = selectedPiece;
  const [x, y] = position;
  allowedMoves.forEach((move) => {
    const [dirX, dirY] = move;
    for (let i = 1; i < 8; i++) {
      const moveX = x + dirX * i;
      const moveY = y + dirY * i;
      if (!isPieceAllowed(moveX, moveY, isWhite, board)) {
        break;
      }
    }
  });
};

const checkAllowedMovesOnce = (
  allowedMoves: [number, number][],
  selectedPiece: PieceType,
  board: FieldType[][]
): void => {
  const { position, isWhite } = selectedPiece;
  const [x, y] = position;
  allowedMoves.map((move) => {
    const moveX = x + move[0];
    const moveY = y + move[1];
    isPieceAllowed(moveX, moveY, isWhite, board);
  });
};

const checkAllowedMovesPawn = (
  selectedPiece: PieceType,
  board: FieldType[][]
): void => {
  const { position, isWhite, isFirstMove } = selectedPiece;
  const [x, y] = position;
  const nextField = isWhite ? board[x - 1][y] : board[x + 1][y];
  const firstMoveField = isWhite ? board[x - 2][y] : board[x + 2][y];
  const leftField = isWhite ? board[x - 1][y - 1] : board[x + 1][y + 1];
  const rightField = isWhite ? board[x - 1][y + 1] : board[x + 1][y - 1];
  if (nextField.piece === null) nextField.isMoveAllowed = true;
  if (firstMoveField.piece === null && isFirstMove)
    firstMoveField.isMoveAllowed = true;
  if (leftField.piece !== null) leftField.isMoveAllowed = true;
  if (rightField.piece !== null) rightField.isMoveAllowed = true;
};

const checkIsCastlingAllowed = (
  selectedPiece: PieceType,
  board: FieldType[][]
): void => {
  const { position, isFirstMove } = selectedPiece;
  const [x, y] = position;
  // check is king moved
  if (isFirstMove) {
    // check both directions
    [-1, 1].forEach((sign) => {
      for (let i = 1; i < 4; i++) {
        const movedY = y + i * sign;
        console.log(movedY);
        if (0 <= movedY && movedY < 8) {
          // castle is allowed
          if (
            board[x][movedY].piece?.name === PieceName.Rook &&
            board[x][movedY].piece?.isFirstMove
          ) {
            board[x][y + 2 * sign].isCastlingAllowed = true;
          }
          // check is some piece is standing in the way
          if (board[x][movedY].piece !== null) {
            break;
          }
          if (
            board[x][movedY].piece !== null &&
            !board[x][movedY].piece?.isFirstMove
          ) {
            break;
          }
        }
      }
    });
  }
};

export const markAllowedFields = (
  selectedPiece: PieceType,
  board: FieldType[][]
): FieldType[][] => {
  let newBoard = board.map((row) => {
    return row.map((field) => {
      field.isMoveAllowed = false;
      return field;
    });
  });
  switch (selectedPiece.name) {
    case PieceName.King:
      checkAllowedMovesOnce(
        getAllowedMoves(PieceName.King),
        selectedPiece,
        newBoard
      );
      checkIsCastlingAllowed(selectedPiece, newBoard);
      break;
    case PieceName.Queen:
      checkAllowedMovesLinear(
        getAllowedMoves(PieceName.Queen),
        selectedPiece,
        newBoard
      );
      break;
    case PieceName.Bishop:
      checkAllowedMovesLinear(
        getAllowedMoves(PieceName.Bishop),
        selectedPiece,
        newBoard
      );
      break;
    case PieceName.Knight:
      checkAllowedMovesOnce(
        getAllowedMoves(PieceName.Knight),
        selectedPiece,
        newBoard
      );
      break;
    case PieceName.Rook:
      checkAllowedMovesLinear(
        getAllowedMoves(PieceName.Rook),
        selectedPiece,
        newBoard
      );
      break;
    case PieceName.Pawn:
      checkAllowedMovesPawn(selectedPiece, board);
      break;
    default:
      break;
  }
  return newBoard;
};
