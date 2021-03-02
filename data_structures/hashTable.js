function unique(arr) {
  const unique = [...new Set(arr)];
  return unique;
}

// console.log(unique([1, 1, 2, 2, 3, 3])); // [1,2,3]

function wordCount(sentence) {
  const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const words = sentence.replace(regex, "");

  const freqCount = new Map();

  for (const word of words.toLowerCase().split(" ")) {
    freqCount.set(word, (freqCount.get(word) || 0) + 1);
  }

  return freqCount;
}

// console.log(wordCount("The cat and the hat."));

function rgb(string) {
  const map = new Map();

  for (const char of string) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let min = Infinity;
  if (map.size < 0) {
    return 0;
  }

  min = Math.min(...map.values());
  return min;
}

console.log(rgb("rgbrgb"));

function missingNumber(n, arr) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], true);
  }
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (!map.has(i)) {
      result.push(i);
    }
  }

  return result;
}

// console.log(missingNumber(8, [4, 7, 1, 6])); // --> [2, 3, 5, 8]

function letterSort(string) {
  let chars = new Array(26).fill(0);
  let sortedString = "";
  for (let c = 0; c < string.length; c++) {
    chars[string[c].charCodeAt() - 97] += 1;
  }
  for (let i = 0; i < chars.length; i++) {
    console.log(String.fromCharCode(97 + i).repeat(chars[i]));
    sortedString += String.fromCharCode(97 + i).repeat(chars[i]);
  }
  return sortedString;
}

// console.log(letterSort("hello"));
