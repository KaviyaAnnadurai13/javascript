function generateotp(){
    var digits="0123456789"
    let otp=''
    for(let i=0;i<4;i++){
        otp +=digits[Math.floor(Math.random()*10)]
    }
    var span=document.querySelector('.box span');
    span.innerHTML=otp;
}