for(var i=0;i<document.querySelectorAll(".drum").length;i++){

document.querySelectorAll(".drum")[i].addEventListener("click",function (){
      keyData(this.innerHTML);
      buttonAnimation(this.innerHTML);
})

}
document.addEventListener("keydown",function(event){
    keyData(event.key)
    buttonAnimation(event.key)
})
function keyData(key){
    switch(key){
        case 'w':  
               new Audio('./sounds/tom-1.mp3').play();
               break;
        case 'a': 
               new Audio('./sounds/tom-2.mp3').play();
               break;  
        case 's': 
               new Audio('./sounds/tom-3.mp3').play();
               break; 
        case 'd': 
               new Audio('./sounds/tom-4.mp3').play();
               break; 
        case 'j': 
               new Audio('./sounds/crash.mp3').play();
               break; 
        case 'k': 
               new Audio('./sounds/kick-bass.mp3').play();
               break; 
        case 'l': 
               new Audio('./sounds/snare.mp3').play();
               break;    
        default:
            console.log(this.innerHTML)
               
       }
}
function buttonAnimation(currentkey){
     var activebutton=document.querySelector("."+currentkey);
     activebutton.classList.add("pressed");
     setTimeout(function(){
       activebutton.classList.remove("pressed");
     },300);
}

