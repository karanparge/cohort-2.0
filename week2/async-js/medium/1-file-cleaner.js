const fs=require("fs")
function read(){
    let p=new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",(err,data)=>{
            if(err){
                console.log("error is: ",err)
            }else{
                resolve(data)
            }
        })
    })
    return p
}
function write(data){
    let p=new Promise(function(resolve){
        fs.writeFile("a.txt",data,"utf-8",()=>{
            console.log("data written successfully in file !!!!!!!")
        })
    })
    return p
}
function removespaces(x){
    return x.replace(/\s+/g," ")
}
async function readfile(){
    let value=await read()
    value=removespaces(value)
    await write(value)
}
readfile()
