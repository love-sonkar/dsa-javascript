let array = [12, 23, 15, 26, 89, 15];

let findval = 15;
function SearchArray(arr, find) {
  let newfindarray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      newfindarray[newfindarray.length] = arr[i];
    }
  }
  return newfindarray;
}

let position = 0;
function DeleteElement(arr, position) {
  for (let i = position; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

function InsertElement(arr, position, newval) {
  for (let i = arr.length - 1; i > 0; i--) {
    if (i >= position) {
      arr[i + 1] = arr[i];
      if (position == i) {
        arr[i] = newval;
      }
    }
  }
  return arr;
}

let arrayone = [2, 4, 6];
let arraytwo = [5, 7, 8];
function MergeArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1[arr1.length] = arr2[i];
  }
  return arr1;
}

var merge = function (nums1, m, nums2, n) {
  let newarr = [];
  for (let i = 0; i < m; i++) {
    newarr[i] = nums1[i];
  }
  for (let i = 0; i < n; i++) {
    newarr[newarr.length] = nums2[i];
  }
  let sorted = newarr.sort((a, b) => a - b);
  return (nums1 = sorted);
};

var filter = function (arr, fn) {
  let newarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newarr[newarr.length] = arr[i];
    }
  }
  return newarr;
};

function fil(n, i) {
  return n > 10;
}

// making promise in js

async function sleep(millis) {
  let CreatePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, millis);
  });
  return CreatePromise;
}
sleep(100).then(() => console.log("hi"));
