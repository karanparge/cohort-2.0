/*# Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.*/
const fs=require("fs")
function test(){
    let p=new Promise(function(resolve){
        fs.writeFile("a.txt",
        "hello there from inside write function",
        "utf-8",
        ()=>{
            resolve()
        })
    })
    return p
}

async function callback(){
    const value=await test()
    console.log("data written in file successfully!!!!!!!!!")
}
callback()