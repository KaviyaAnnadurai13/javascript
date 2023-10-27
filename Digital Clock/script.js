const clock=document.querySelector('.clock')
function runclock(){
    var time=new Date();
    var hours=time.getHours();
    var mins=time.getMinutes();
    var seconds=time.getSeconds();
    var txt="AM";
    if(hours>12){
        hours=hours-12;
        txt="PM";
    }
    else if(hours==0){
        hours=12;
        txt="AM";
    }
    hours=hours<10?'0'+hours:hours;
    mins=mins<10?'0'+mins:mins;
    seconds=seconds<10?'0'+seconds:seconds;
    clock.innerHTML=`${hours}: ${mins}: ${seconds}`
}
runclock();
setInterval(runclock,1000);