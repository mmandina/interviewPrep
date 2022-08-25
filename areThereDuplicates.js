function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let counter={};
  for(let i=0;i<arguments.length;i++){
      if(!counter[arguments[i]]){
          counter[arguments[i]]=1;
      }else return true;
  }
  return false;
}