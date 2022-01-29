export interface FieldType {
  isColorWhite: boolean; // true - white, false - black
  piece: Piece | null;
}

export enum PieceName {
  King,
  Queen,
  Bishop,
  Knight,
  Rook,
  Pawn,
}

export interface Piece {
  name: PieceName;
  isWhite: boolean;
  position: [number, number];
  value: number;
}

export interface Game {
  isWhiteMove: boolean;
  timeWhite: number;
  timeBlack: number;
}
