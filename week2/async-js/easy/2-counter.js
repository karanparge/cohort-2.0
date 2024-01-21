//## Counter without setInterval

//Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
function callback(duration){
    for(let i=1;i<=duration;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}


callback(10)


































































//(Hint: setTimeout)