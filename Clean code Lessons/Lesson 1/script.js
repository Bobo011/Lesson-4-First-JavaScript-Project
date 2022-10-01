const sumArray = function(array) {
    let sum = 0;
    array.forEach(function(number) {
      sum += number;
    });
    return sum;
  };
  
  console.log(sumArray([3,3,3]));
  console.log(sumArray([2, 2, 2]));
  