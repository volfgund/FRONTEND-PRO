const smaller = (arr) => {
  if (!arr || arr.length === 0) {
    return [];
  }

  let positive = 0;
  let sum = 0;

  for (let num of arr) {
    if (num > 0) {
      positive++;
    } else if (num < 0) {
      sum += num;
    }
  }

  return [positive, sum];
}

console.log(smaller([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(smaller([]));