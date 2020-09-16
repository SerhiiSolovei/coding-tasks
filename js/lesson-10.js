/**
 * Задача
 *
 * Найти все точки которые входят выбранную область.
 *
 */

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
    y: 8,
  },
  end: {
    x: 8,
    y: 5,
  },
};

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
console.log(getSelectedPoints(points, selectedArea));
