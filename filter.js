
// Find all prime numbers in an array
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
    for (let i = 2; num > i; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(array.filter(isPrime));


  //example 2

  var numbers = [1, 3, 6, 8, 11, 12, 7];
  var greaterThanSeven = numbers.filter(function(number) {
    return number > 7;
  });
  
  console.log("greater  Than Seven=",greaterThanSeven);