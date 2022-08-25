function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
  let ptr1=0;
  let ptr2=0;
  
  if(str1.length===0) return true;
  
  while(ptr2<str2.length){
      if(str1[ptr1]===str2[ptr2]){
          ptr1++;
      }
      ptr2++
      if(ptr1===str1.length-1) return true;
  }
  if(ptr1!==str1.length-1) return false;
  
}