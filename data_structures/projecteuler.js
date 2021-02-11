/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/

function sumOfMultiples(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

// console.log(sumOfMultiples(10));

/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function fibEven(n) {
  const lastTwo = [1, 2];
  let counter = 3;
  const sum = [];

  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = last[1];
    lastTwo[1] = nextFib;

    if (nextFib % 2 === 0) {
      sum.push(nextFib);
    }
    counter++;
  }
  console.log(sum);
}

console.log(fib(4000000));
