//Create a maxheap, swap greatest element with root node
//Then remove root, place last index at root

function maxHeap(array, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest != i) {
    let swap = array[i];
    array[i] = array[largest];
    array[largest] = swap;

    // Recursively heapify the affected sub-tree
    maxHeap(array, n, largest);
  }
}

function heapSort(array) {
  let n = array.length;

  //n/2 times
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    maxHeap(array, n, i);
    console.log(array);
  }

  //n times
  for (let i = n - 1; i >= 0; i--) {
    let placeholder = array[0];
    array[0] = array[i];
    array[i] = placeholder;
    maxHeap(array, i, 0);
  }
  return array;
}

console.log(heapSort([0, 4, 3, 6, 4, 8, 20, -34, 11]));
