# Sorting Algorithms

##Insertion Sort

```
let insert = (arr, rightIndex, value) => {
  // value is the value of arr[rightIndex + 1]
  // rightIndex is the furthest right sorted element

  // Step through sorted elements right to left.
  // As long as your value is less than the element
  // at arr[i] and you still have elements
  let i = rightIndex;
  while (i >= 0 && arr[i] > value){
    // copy the element
    arr[i + 1] = arr[i];
    i -= 1;
  }


  // insert the actual element
  arr[i + 1] = value;

  return arr
};

insert([1, 3, 7, 2, 5], 2, 2)

let insertionSort = (arr) => {
  let l = arr.length

  for(let i = 0; i < l - 1; i++){
    arr = insert(arr, i, arr[i+1])
  }

  console.log(arr)
}

insertionSort([1, 3, 7, 2, 5, -1, -2]);
```

## Bubble Sort

```
let bubbleSort = (arr) => {
  let l = arr.length
  for(let i = 0; i <= l-1; i++){ //makes the n loop run a bunch of times, and when we run it arr.length times it will always be enough times
    for(let n = 0; n <= l - 2; n++){
      let first = arr[n+1]
      let second = arr[n]
      if(first < second){
        arr[n+1] = second
        arr[n] = first
      }
    }
  }
  console.log(arr)
}

bubbleSort( [1,3,7,2,5,8,9,-1,0,5,10,1000,82349287,9213849387,923498732,1982739,89234,28374,298374] )
```

## Quick Sort

```
// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

quicksortBasic(array)
```
