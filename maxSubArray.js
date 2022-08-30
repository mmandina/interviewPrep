function maxSubarraySum(array,windowSize){
  // add whatever parameters you deem necessary - good luck!
let windowStart=0;
let windowEnd=windowSize-1;
let subMax=0;
let totalMax=0;
if(windowSize>array.length) return null;
for(let i=0;i<windowSize;i++){
    subMax+=array[i]
}

totalMax=subMax;

while(windowEnd<array.length){
 subMax-= array[windowStart];
 windowStart++;
 windowEnd++;
 subMax+=array[windowEnd]
 

if(subMax>totalMax){
    totalMax=subMax;
}
}
return totalMax
}