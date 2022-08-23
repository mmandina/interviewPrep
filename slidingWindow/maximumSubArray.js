/*Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

Example 1:

Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3]. */

// function maximumSubarray(array,windowSize) {
//   let maximumSum=0;
//   let windowSum=0;
//   for (let i = 0; i < array.length - windowSize+1; i++){
//     console.log(i);
//     windowSum = 0;
//     for (let j = i; j < i + windowSize; j++){
//       windowSum += array[j];
//     }
//   maximumSum=Math.max(maximumSum,windowSum)
    
//   }



// return maximumSum

// }
console.log(maximumSubarray([2, 1, 5, 1, 3, 2],3));

function maximumSubarray(array, windowSize) {
  let maximumSum=0;
  let windowSum = 0;
  let windowBegin = 0;
  let windowEnd = windowSize-1;
  for (let i = windowBegin; i < windowSize; i++){
    windowSum += array[i];
  }
  maximumSum=Math.max(maximumSum,windowSum)
  while (windowEnd !== array.length - 1) {
    windowSum -= array[windowBegin];
    windowBegin++
    windowEnd++;
    windowSum += array[windowEnd]
    maximumSum=Math.max(maximumSum,windowSum)
  }


return maximumSum
}