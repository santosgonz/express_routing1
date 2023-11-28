const { findAverage } = require('./stats'); 
const { findMedian } = require('./stats'); 
const { findModes } = require('./stats'); 

test('calculates the average of an array of numbers', () => {
  expect(findAverage([1, 2, 3, 4])).toBe(2.5);
});

test('calculates average median of numbers', () => {
  expect(findMedian([1,2,3])).toBE(2)
})

test ('calculates mode of numbers', () => {
  expect(findModes([1,1,2,3])).toBE(1)
})