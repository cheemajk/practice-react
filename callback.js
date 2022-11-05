function greet( name, myfunction){
console.log("hello world");

//callback function
// excuted  only after the greet()is excuted
myfunction(name)
}
//callback function
function call(name){
    console.log("hello"+ ''+ name);

}
//calling the function after 2 second
setTimeout (greet,2000 , 'jassi', call);


//Math random
function genRandom(start, end) {
    return Math.floor(Math.random() * end) + start
  }
  console.log(genRandom(1,10)) // random int between 1 to 10
  console.log(genRandom(80,90)) // random int between 80 to 90
  

  // this is my adding file
// i did byself
