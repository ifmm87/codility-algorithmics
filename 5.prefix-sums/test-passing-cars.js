const countingCars = require('./countingCars');

test('[0, 1, 0, 1, 1]', () => {
  expect(countingCars([0, 1, 0, 1, 1])).toEqual(5);
});

test('[0, 1, 0, 1, 1,1]', () => {
  expect(countingCars([0, 1, 0, 1, 1, 1])).toEqual(7);
});

test('[0]', () => {
  expect(countingCars([0 ])).toEqual(0);
});
test('[0, 0, 0, 1]', () => {
  expect(countingCars([0, 0, 0, 1])).toEqual(3);
});
