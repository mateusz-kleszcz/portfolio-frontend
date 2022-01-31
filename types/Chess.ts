export interface FieldType {
  isColorWhite: boolean; // true - white, false - black
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
  isWhite: boolean;
  position: [number, number];
  value: number;
}

export interface ChessGame {
  selectedPiece: PieceType | null;
  isWhiteMove: boolean;
  timeWhite: number;
  timeBlack: number;
}
