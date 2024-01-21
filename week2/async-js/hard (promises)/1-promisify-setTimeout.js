/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    let p=new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        },n*1000)
        
    })
    return p
}
async function callback(){
    const value=await wait(5)
    console.log(value)
}
callback()
module.exports = wait;
