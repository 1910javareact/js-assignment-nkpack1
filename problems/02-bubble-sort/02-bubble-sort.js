/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) {
  let length = numArray.length;
  for (let i = 0; i < length; i++)
  {
      for(let j = 0; j < (length - i -1); j++)
      {
          if(numArray[j] > numArray[j + 1])
          {
              let temp = numArray[j];
              numArray[j] = numArray[j + 1];
              num[j + 1] = temp;
          }
      }
  }
}