export interface FieldType {
  isColorWhite: boolean; // true - white, false - black
  isMoveAllowed: boolean;
  isCastlingAllowed: boolean;
  isEnPassantAllowed: boolean;
  position: [number, number];
  piece: PieceType | null;
}

export enum PieceName {
  King,
  Queen,
  Bishop,
  Knight,
  Rook,
  Pawn,
}

export interface PieceType {
  name: PieceName;
  position: [number, number];
  isWhite: boolean;
  isFirstMove: boolean;
  value: number;
}

export interface ChessGame {
  board: FieldType[][];
  selectedPiece: PieceType | null;
  isWhiteMove: boolean;
  timeWhite: number;
  timeBlack: number;
}
