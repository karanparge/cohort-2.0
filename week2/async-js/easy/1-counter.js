//Create a counter in JavaScript

/*We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second*/
let count=0
function callback(){
  count++
  console.log(count)
}
function counter(duration){
  let a=setInterval(callback,1000)
  setTimeout(()=>{
    clearInterval(a)
  },duration+1000)
}
counter(5000)