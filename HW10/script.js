const findAverage = (array) => {
    if (array.length === 0) {
      return 0;
    }
  
    const sum = array.reduce((acc, item) => acc + item, 0);
    const average = sum / array.length;
    return average;
  }

  console.log(findAverage([1, 2, 4, 7, 10]));
  console.log(findAverage([]));