const stars=document.querySelectorAll(".fa-star");
const emoji=document.querySelectorAll(".far");
const color=["red","purple","blue","darkorange","green"];


stars.forEach((stars,index)=>{
    stars.addEventListener("click",()=>{
      updating(index) 
    });
});
function updating(index){
    stars.forEach((stars ,idx)=>{
        if(idx<index +1){
            stars.classList.add("active");
        }else{
            stars.classList.remove("active");
        }
    });
    emoji.forEach((emoji)=>{
        emoji.style.transform=`translateX(-${index*50}px)`;
        emoji.style.color=color[index];
    });
}