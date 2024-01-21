/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let a=new Date();
    let beforeTime=a.getTime()
    beforeTime=beforeTime/1000
    x=0
    for(let i=0;i<=n;i++){
        x=x+i
    }
    let b=new Date()
    let afterTime=b.getTime()
    afterTime=afterTime/1000
    let time=afterTime-beforeTime
    console.log("Time taken by js to calculate the sum of numbers from 1-"+n+" in seconds is- "+time)
    return 0.01;
}

calculateTime(100)
calculateTime(100000)
calculateTime(1000000000)