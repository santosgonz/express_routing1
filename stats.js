function findAverage(array) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
        average += array[i]
    }
    return average / array.length
}
// console.log(findAverage([1,2,3]))

function findMedian(array) {
    let median;
    let middleIndex = Math.floor(array.length / 2);
    if (array.length % 2 === 0) {
        median = (array[middleIndex - 1] + array[middleIndex]) / 2;
    } else {
        median = array[middleIndex];
    }
    return median;
}

// console.log(findMedian([1,2,4]))
// console.log(findMedian([1,2,3,4]))

function findModes(numbersArray) {
    let frequencies = {};
    let maxFrequency = 0;
    let modes = [];
  
    // Count the frequencies of each number
    for (let i = 0; i < numbersArray.length; i++) {
      let number = numbersArray[i];
      if (frequencies[number] === undefined) {
        frequencies[number] = 1;
      } else {
        frequencies[number]++;
      }
      // Update max frequency on the fly
      if (frequencies[number] > maxFrequency) {
        maxFrequency = frequencies[number];
      }
    }
  
    // Collect all numbers that have the max frequency
    for (let number in frequencies) {
      if (frequencies.hasOwnProperty(number)) {
        if (frequencies[number] === maxFrequency) {
          modes.push(Number(number));
        }
      }
    }
  
    return modes;
  }

module.exports = {
    findAverage,
    findMedian,
    findModes
  };