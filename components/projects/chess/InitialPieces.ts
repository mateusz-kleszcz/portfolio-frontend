import { Piece, PieceName } from "types/Chess";

export const pieces: Piece[] = [
  {
    name: PieceName.Rook,
    isWhite: true,
    position: [0, 0],
    value: 5,
  },
  {
    name: PieceName.Knight,
    isWhite: true,
    position: [0, 1],
    value: 3,
  },
  {
    name: PieceName.Bishop,
    isWhite: true,
    position: [0, 2],
    value: 3,
  },
  {
    name: PieceName.King,
    isWhite: true,
    position: [0, 3],
    value: 4,
  },
  {
    name: PieceName.Queen,
    isWhite: true,
    position: [0, 4],
    value: 9,
  },
  {
    name: PieceName.Bishop,
    isWhite: true,
    position: [0, 5],
    value: 3,
  },
  {
    name: PieceName.Knight,
    isWhite: true,
    position: [0, 6],
    value: 3,
  },
  {
    name: PieceName.Rook,
    isWhite: true,
    position: [0, 7],
    value: 3,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 0],
    value: 1,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 2],
    value: 1,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 3],
    value: 1,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 4],
    value: 1,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 5],
    value: 1,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 6],
    value: 1,
  },
  {
    name: PieceName.Pawn,
    isWhite: true,
    position: [1, 7],
    value: 1,
  },
];
