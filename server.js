const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const { findAverage, findMedian, findModes } = require('./stats');

app.get('/mean', (req, res) => {
    const numsString = req.query.nums;
    console.log(numsString)
    if (!numsString) {
      return res.status(400).json({ error: 'nums are required' });
    }
  
    const numArray = numsString.split(',').map(Number);
    if (numArray.some(isNaN)) {
      return res.status(400).json({ error: 'All elements must be valid numbers' });
    }
  
    const mean = findAverage(numArray);
    res.json({ operation: 'mean', value: mean });
  });

  
app.get('/median', (req, res) => {
    const numString = req.query.nums;
    console.log(numString)
    if (!numString) {
        return res.status(400).json({error: 'All elements must be a valid number'})
    }
    const numArray = numString.split(',').map(Number);
    if (numArray.some(isNaN)) {
        return res.status(400).json({ error: 'All elements must be valid numbers'})
    }
    const median = findMedian(numArray)
    res.json( {response: { operation: 'median', value: mean}})

})

app.get('/mode', (req, res) => {
    const numString = req.query.nums;
    console.log(numString)
    if (!numString) {
        return res.status(400).json({error: 'All elements must be a valid number'})
    }
    const numArray = numString.split(',').map(Number);
    if (numArray.some(isNaN)) {
        return res.status(400).json({ error: 'All elements must be valid numbers'})
    }
    const median = findModes(numArray)
    res.json( {response: { operation: 'median', value: mean}})

})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});