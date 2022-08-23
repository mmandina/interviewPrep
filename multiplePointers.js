function countUniqueValues(array){
  // add whatever parameters you deem necessary - good luck!
  let count=0;
  if(array.length===0){
      return 0;
  }
  if(array.length===1){
      return 1;
  }
  let ptr1=1;
  while(ptr1<=array.length){
     if(array[ptr1]!==array[ptr1-1]){
         count++;
         ptr1++
     }else{
         ptr1++;
     }
  }
  return count;
}

function countUniqueValuesNoCount(array){
  // add whatever parameters you deem necessary - good luck!
  let count=0;
  if(array.length===0||array.length===1){
      return array.length;
  }
  let ptr1 = 0;
  let ptr2;
  for (ptr2 = 1; ptr2 < array.length; ptr2++){
    
  }
  
 
}