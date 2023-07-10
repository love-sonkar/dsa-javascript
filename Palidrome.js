// palidrome

// input = "hello" output = false

function Palidrome(str1) {
  let i = 0;
  let j = str1.length - 1;
  while (j > i) {
    if (str1[i] !== str1[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
}

// const result = Palidrome("166");
// console.log(result);

var isPalindrome = function (x) {
  let ConvertString = String(x);
  let i = 0;
  let j = ConvertString.length - 1;
  console.log(ConvertString);
  while (i < j) {
    if (ConvertString[i] !== ConvertString[j]) {
      return false;
    } else {
      i++;
      j--;
    }
  }
  return true;
};
// console.log(isPalindrome(16521));

function maximumAcco(str1) {
  let obj = {};
  let maxval = "";
  for (let i = 0; i <= str1.length - 1; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 0;
    }
    obj[str1[i]]++;
    if (maxval == "" || obj[str1[i]] > obj[maxval]) {
      maxval = str1[i];
    }
  }
  return maxval;
}

console.log(maximumAcco("hello"));

var isHappy = function (n) {
  n = String(n);
  let carry = 0;
  while (n > 0) {
    let i = 0;
    carry = n[i] * n[i] + carry;
    n = carry;
    i++;
    if (n == 0) return true;
  }
  console.log(n);
  return false;
};

console.log(isHappy(19));
