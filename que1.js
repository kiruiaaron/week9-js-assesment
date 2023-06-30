//Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function fac(){
    console.log('call back function')
}
  
function callBackTimeOut(callback){
    setTimeout(callback,2000);
}

console.log(callBackTimeOut(fac));