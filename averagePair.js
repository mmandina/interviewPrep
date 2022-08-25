function averagePair(array,target){
  // add whatever parameters you deem necessary - good luck!
  let ptr1=0;
  let ptr2=array.length-1
  while(ptr1<ptr2){
      let average=(array[ptr1]+array[ptr2])/2;
      if(average===target)
      {return true;}
      if(average<target){
          ptr1++;
          continue;
      }
      if(average>target){
          ptr2--;
          continue;
      }
      
  }
  return false;
}