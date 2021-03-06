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
  return Array.from({ length: amount }).map(() => ({
    x: generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY),
    y: generateRandomNumber(LEFT_BOUNDARY, RIGHT_BOUNDARY),
  }));
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

const points = generatePoints(5);

const selectedArea = generateSelectedArea();

const getSelectedPoints = function (points, selectedArea) {
  const leftBoundary = selectedArea.start.x;
  const rightBoundary = selectedArea.end.x;
  const bottomBoundary = selectedArea.end.y;
  const topBoundary = selectedArea.start.y;
  return points.filter(function (item) {
    return (
      item.x >= leftBoundary &&
      item.x <= rightBoundary &&
      item.y >= bottomBoundary &&
      item.y <= topBoundary
    );
  });
};

console.log(points, selectedArea);
console.log(getSelectedPoints(points, selectedArea));
