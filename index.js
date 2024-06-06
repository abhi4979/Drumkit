var a=document.querySelectorAll(".drum").length
for(var i=0;i<a;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
var num=this.innerHTML;
  play(num);
  buttonAnimation(num);
})
}
document.addEventListener("keydown",function(event){
    var n1=event.key.toLowerCase();
    if(["a","s","d","f","g","h","j","k"].includes(n1)){
        play(n1);
        buttonAnimation(n1);
    }
})
function buttonAnimation(button){
    var button=document.querySelector("."+button);
     button.classList.add("pressed");
     setTimeout( function(){
        button.classList.remove("pressed");
     },100)
}
function play(num){
    switch(num){
        case "a":
            var audio=new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "s":
            var audio=new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "d":
            var audio=new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "f":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "g":
            var audio=new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "h":
            var audio=new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "j":   
            var audio=new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "k":   
            var audio=new Audio("sounds/a1.wav");
            audio.play();
            break;                     
    }
}
   