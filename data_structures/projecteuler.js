/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

k =  n * (n + 1) / 2

*/

function sumOfMultiples(n) {
  return sumOfK(number, 3) + sumOfK(number, 5) - sumOfK(number, 15);
}

function sumOfNaturalNumbers(n, k) {
  // all natural numbers that are below n, and only multiples of k
  // To find a number below n that is a multiple of k: formula : (n - 1) / k round down
  const div = Math.floor((n - 1) / k);
  return (k * div * (div + 1)) / 2;
}

// console.log(sumOfMultiples(10));

/* 
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function fiboEvenSum(n) {
  const lastTwo = [1, 2];
  let nextFib = lastTwo[0] + lastTwo[1];
  let evenSum = 2;
  // inlclusive so our sum doesn't exceed the nth term
  while (nextFib <= n) {
    // If term is even
    if (nextFib % 2 === 0) {
      // add to our even term
      evenSum += nextFib;
    }

    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    nextFib = lastTwo[0] + lastTwo[1];
  }
  return evenSum;
}
// console.log(fibEven(10));

// console.log(180 / 2);

/*
 The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
 
 */

function largestPrimeFactor(number) {
  // If the number is even, only even prime number is two
  if (number % 2 === 0) {
    return 2;
  }

  let i = 3;
  const primeNums = [];

  while (number !== 1) {
    if (number % i === 0) {
      number /= i;
      primeNums.push(i);
    } else {
      i += 2;
    }
  }
  return primeNums[primeNums.length - 1];
}

function isPalindrome(int) {
  const nums = String(int);

  let leftIdx = 0,
    rightIdx = nums.length - 1;

  while (leftIdx < rightIdx) {
    if (nums[leftIdx] !== nums[rightIdx]) return false;
    leftIdx++;
    rightIdx--;
  }
  return true;
}
// console.log(largestPalindromeProduct());
// console.log(isPalindrome(999));

function smallestMult(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = lcm(i, result);
  }
  return result;
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// smallestMult(20);

function sumSquareDifference(n) {
  let sum = (1 + n) * (n / 2);
  let a = Math.round((1 / 3) * n ** 3);
  let b = Math.round((1 / 2) * n ** 2);
  let c = Math.round((1 / 6) * n);

  let sumSquare = sum ** 2;
  let sumOfSquares = a + b + c;

  return sumSquare - sumOfSquares;
}

// sumSquareDifference(10);
