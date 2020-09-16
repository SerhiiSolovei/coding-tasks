import { generateRandomNumber } from "../utils/generateNumberArray.js";
/**
 * Задача
 *
 * Найти все точки которые входят выбранную область.
 *
 */

const LEFT_BOUNDARY = -10;
const RIGHT_BOUNDARY = 10;

const generatePoints = (amount) => {
  return Array.from({ length: amount }).map(() =>
    generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY)
  );
};

const generateSelectedArea = () => {
  const X1 = generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY);
  const Y1 = generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY);

  const X2 = generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY);
  const Y2 = generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY);

  const startX = X1 <= X2 ? X1 : X2;
  const startY = Y1 >= Y2 ? Y1 : Y2;

  const endX = X1 >= X2 ? X1 : X2;
  const endY = Y1 <= Y2 ? Y1 : Y2;

  return {
    start: {
      x: startX,
      y: startY,
    },
    end: {
      x: endX,
      y: endY,
    },
  };
};

console.log(generatePoints(20), generateSelectedArea());

const points = [
  { x: 0, y: 0 },
  { x: 5, y: 8 },
  { x: 2, y: 4 },
  { x: 1, y: 6 },
  { x: 4, y: 8 },
  { x: 7, y: 7 },
  { x: 4, y: 1 },
  { x: 6, y: 3 },
];

const selectedArea = {
  start: {
    x: 5,
    y: 5,
  },
  end: {
    x: 8,
    y: 8,
  },
};

const getSelectedPoints = (points, selectedArea) => {};
