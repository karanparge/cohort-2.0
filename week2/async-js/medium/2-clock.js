/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)*/
const date=new Date()
let hrs=date.getHours()
let min=date.getMinutes()
let sec=date.getSeconds()
function updateTimer(){
    if(hrs>=12){
        console.log(hrs+":"+min+":"+sec+" PM")
    }else{
        console.log(hrs+":"+min+":"+sec+" AM")
        sec++
    }
    if(sec===60){
        min++
        sec=0
    }
    if(min===60){
        hr++
        min=0
    }
}
setInterval(updateTimer,1000)