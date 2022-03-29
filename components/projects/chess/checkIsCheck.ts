import { FieldType } from "types/Chess";

const directions = [
  [1, 1],
  [1, -1],
  [-1, -1],
  [-1, 1],
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

export const isFieldUnderAttack = (
  board: FieldType[][],
  isWhiteMove: boolean,
  position: [number, number]
): boolean => {
  // get all pieces that are on the board in current color
  const piecesFields = board.map((row) => {
    return row.filter((field) => {
      if (field.piece?.isWhite === isWhiteMove) return field.piece;
    });
  });
  const pieces: FieldType[] = ([] as FieldType[]).concat(...piecesFields);
  // for each pieces check is piece attacking enemy king
  pieces.forEach((piece) => {
    console.log(piece);
  });
  return true;
};
