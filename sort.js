// [1,2,3,5,7]

/*

function mergeSort(array) {
    // if the array is one element long, just return it

    // mergeSort() the left half of the array

    // mergeSort() the right half of the array

    // merge() the two halves

    // return the merged array
}

*/

/*
function merge(leftArr, rightArr) {

    // newArr = []

    // compare leftArr[0] and rightArr[0]
    // whichever is smaller, push it onto newArr

    // repeat the process, but don't reuse elements,
    // until you have pushed all the elements from
    // leftArr and rightArr onto newArr in sorted order

    // return newArr
}
*/

let bubbleSort = arr => {
  let l = arr.length;
  for (let i = 0; i <= l - 1; i++) {
    //makes the n loop run a bunch of times, and when we run it arr.length times it will always be enough times
    for (let n = 0; n <= l - 2; n++) {
      let first = arr[n + 1];
      let second = arr[n];
      if (first < second) {
        arr[n + 1] = second;
        arr[n] = first;
      }
    }
  }
  return arr;
};

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  let left = mergeSort(array.slice(0, array.length / 2));
  let right = mergeSort(array.slice(array.length / 2));
  return merge(left, right);
}

function merge(left, right) {
  newArray = [];

  while (left[0] && right[0]) {
    if (left[0] < right[0]) {
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }

  while (left[0]) {
    newArray.push(left.shift());
  }

  while (right[0]) {
    newArray.push(right.shift());
  }

  return newArray;
}

//console.log(mergeSort([1, 3, 7, -1, 20, -2, 2, 5]));

function Benchmarking(array) {
  let start = new Date();
  for (let i = 0; i < 20; i++) {
    let mergeCopy = array.slice(0);

    mergeSort(mergeCopy);
  }
  let end = new Date();
  console.log("MERGE TIME");
  console.log(end - start);

  start = new Date();
  for (let i = 0; i < 20; i++) {
    let bubbleCopy = array.slice(0);

    bubbleSort(bubbleCopy);
  }
  end = new Date();
  console.log("BUBBLE TIME");
  console.log(end - start);

  start = new Date();
  for (let i = 0; i < 20; i++) {
    let insertionCopy = array.slice(0);

    insertionSort(insertionCopy);
  }
  end = new Date();
  console.log("INSERTION TIME");
  console.log(end - start);
}
let array = new Array(20000);
for (let i = 0; i < array.length; i++) {
  array[i] = Math.random() * 40;
}

let insert = (arr, rightIndex, value) => {
  // value is the value of arr[rightIndex + 1]
  // rightIndex is the furthest right sorted element

  // Step through sorted elements right to left.
  // As long as your value is less than the element
  // at arr[i] and you still have elements
  let i = rightIndex;
  while (i >= 0 && arr[i] > value) {
    // copy the element
    arr[i + 1] = arr[i];
    i -= 1;
  }

  // insert the actual element
  arr[i + 1] = value;

  return arr;
};

let insertionSort = arr => {
  let l = arr.length;

  for (let i = 0; i < l - 1; i++) {
    arr = insert(arr, i, arr[i + 1]);
  }

  return arr;
};

Benchmarking(array);

//console.log(insertionSort([20, 3, -40, 100, 60, 90, 10]));
