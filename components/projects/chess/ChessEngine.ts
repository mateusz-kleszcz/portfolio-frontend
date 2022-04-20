import { FieldType, PieceName, PieceType } from "types/Chess";

const isPositionFittingChesboard = (position: [number, number]): boolean => {
  const [x, y] = position;
  if (0 <= x && x < 8 && 0 <= y && y < 8) return true;
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

const isKingSafeAfterMove = (
  to: [number, number],
  board: FieldType[][],
  piece: PieceType,
  isWhiteMove: boolean
): boolean => {
  const [x, y] = to;
  const [pieceX, pieceY] = piece.position;
  const copyBoard = JSON.parse(JSON.stringify(board));
  copyBoard[pieceX][pieceY].piece = null;
  copyBoard[x][y].piece = piece;
  return !checkIsKingUnderAttack(copyBoard, isWhiteMove);
};

// check is piece allowed on (x, y) position, update board with allowed position and return true if we can continue checking
const isPieceAllowed = (
  position: [number, number],
  isWhiteMove: boolean,
  board: FieldType[][],
  piece: PieceType
): boolean => {
  // if position is fitting the chessboard
  if (isPositionFittingChesboard(position)) {
    const [x, y] = position;
    const boardPiece = board[x][y].piece;
    // if we want to make a move we need to check after it our king will be safe
    if (
      piece.isWhite === isWhiteMove &&
      (boardPiece === null || boardPiece.isWhite !== piece.isWhite)
    ) {
      if (!isKingSafeAfterMove(position, board, piece, isWhiteMove))
        return false;
    }
    // if there is no piece then field is allowed
    if (boardPiece === null) {
      board[x][y].isMoveAllowed = true;
      return true;
    }
    // if piece attacking enemy king
    if (
      boardPiece.name === PieceName.King &&
      boardPiece.isWhite !== piece.isWhite
    )
      piece.isAttackingKing = true;
    // if there is the enemy piece here, this is the last allowed field
    if (boardPiece.isWhite !== isWhiteMove) {
      board[x][y].isMoveAllowed = true;
      return false;
    }
  }
  return false;
};

const checkMovesLinear = (
  allowedDirections: [number, number][],
  piece: PieceType,
  board: FieldType[][],
  isWhiteMove: boolean
): void => {
  const [x, y] = piece.position;
  allowedDirections.forEach((direction) => {
    const [dirX, dirY] = direction;
    for (let i = 1; i < 8; i++) {
      const moveX = x + dirX * i;
      const moveY = y + dirY * i;
      const pos: [number, number] = [moveX, moveY];
      if (!isPieceAllowed(pos, isWhiteMove, board, piece)) break;
    }
  });
};

const checkMovesOnce = (
  allowedDirections: [number, number][],
  piece: PieceType,
  board: FieldType[][],
  isWhiteMove: boolean
): void => {
  const [x, y] = piece.position;
  allowedDirections.map((move) => {
    const moveX = x + move[0];
    const moveY = y + move[1];
    const pos: [number, number] = [moveX, moveY];
    isPieceAllowed(pos, isWhiteMove, board, piece);
  });
};

const checkMovesPawn = (
  piece: PieceType,
  board: FieldType[][],
  isWhiteMove: boolean
): void => {
  const { position, isWhite, isFirstMove } = piece;
  const [x, y] = position;
  const nextField = isWhite ? board[x - 1][y] : board[x + 1][y];
  const firstMoveField = isWhite ? board[x - 2][y] : board[x + 2][y];
  const leftFieldPos: [number, number] = isWhite
    ? [x - 1, y - 1]
    : [x + 1, y + 1];
  const rightFieldPos: [number, number] = isWhite
    ? [x - 1, y + 1]
    : [x + 1, y - 1];
  if (isPositionFittingChesboard(leftFieldPos)) {
    const [x, y] = leftFieldPos;
    const leftField = isWhite ? board[x][y] : board[x][y];
    if (leftField.piece !== null && leftField.piece?.isWhite !== isWhite)
      leftField.isMoveAllowed = true;
    if (leftField.isEnPassantAllowed) leftField.isMoveAllowed = true;
    if (
      isWhite === isWhiteMove &&
      !isKingSafeAfterMove(leftFieldPos, board, piece, isWhiteMove)
    )
      leftField.isMoveAllowed = false;
  }
  if (isPositionFittingChesboard(rightFieldPos)) {
    const [x, y] = rightFieldPos;
    const rightField = isWhite ? board[x][y] : board[x][y];
    if (rightField.piece !== null && rightField.piece?.isWhite !== isWhite)
      rightField.isMoveAllowed = true;
    if (rightField.isEnPassantAllowed) rightField.isMoveAllowed = true;
    if (
      isWhite === isWhiteMove &&
      !isKingSafeAfterMove(rightFieldPos, board, piece, isWhiteMove)
    )
      rightField.isMoveAllowed = false;
  }
  if (nextField.piece === null) nextField.isMoveAllowed = true;
  if (
    isWhite === isWhiteMove &&
    !isKingSafeAfterMove(nextField.position, board, piece, isWhiteMove)
  )
    nextField.isMoveAllowed = false;
  if (firstMoveField.piece === null && isFirstMove)
    firstMoveField.isMoveAllowed = true;
  if (
    isWhite === isWhiteMove &&
    !isKingSafeAfterMove(firstMoveField.position, board, piece, isWhiteMove)
  )
    firstMoveField.isMoveAllowed = false;
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
      for (let i = 1; i < 5; i++) {
        const movedY = y + i * sign;
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
          // check is rook didnt move yet
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

export const checkPieceMoves = (
  piece: PieceType,
  board: FieldType[][],
  isWhiteMove: boolean
): FieldType[][] => {
  let newBoard = board.map((row) => {
    return row.map((field) => {
      field.isMoveAllowed = false;
      return field;
    });
  });
  switch (piece.name) {
    case PieceName.King:
      checkMovesOnce(
        getAllowedMoves(PieceName.King),
        piece,
        newBoard,
        isWhiteMove
      );
      checkIsCastlingAllowed(piece, newBoard);
      break;
    case PieceName.Queen:
      checkMovesLinear(
        getAllowedMoves(PieceName.Queen),
        piece,
        newBoard,
        isWhiteMove
      );
      break;
    case PieceName.Bishop:
      checkMovesLinear(
        getAllowedMoves(PieceName.Bishop),
        piece,
        newBoard,
        isWhiteMove
      );
      break;
    case PieceName.Knight:
      checkMovesOnce(
        getAllowedMoves(PieceName.Knight),
        piece,
        newBoard,
        isWhiteMove
      );
      break;
    case PieceName.Rook:
      checkMovesLinear(
        getAllowedMoves(PieceName.Rook),
        piece,
        newBoard,
        isWhiteMove
      );
      break;
    case PieceName.Pawn:
      checkMovesPawn(piece, newBoard, isWhiteMove);
      break;
    default:
      break;
  }
  return newBoard;
};

export const checkIsKingUnderAttack = (
  board: FieldType[][],
  isWhiteMove: boolean
) => {
  // get all pieces that are on the board in current color
  const piecesFieldsArrays = board.map((row) => {
    return row.filter((field) => field.piece?.isWhite === !isWhiteMove);
  });
  const piecesFields: FieldType[] = ([] as FieldType[]).concat(
    ...piecesFieldsArrays
  );
  const pieces = piecesFields.map((field) => field.piece!);
  // for each piece check is piece attacking enemy king
  pieces.forEach((piece) => checkPieceMoves(piece, board, isWhiteMove));
  const isAnyPieceAttackingKing = pieces.some((piece) => piece.isAttackingKing);
  return isAnyPieceAttackingKing;
};
