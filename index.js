var drumbuttons = document.querySelectorAll(".drum").length;


function makeSound(key){
    switch(key){
               
        case "w":
               var audio = new Audio("tom-1.mp3");
               audio.play();
        case "a":
               var audio = new Audio("tom-2.mp3");
               audio.play();
        case "s":
               var audio = new Audio("tom-3.mp3");
               audio.play();
        case "d":
               var audio = new Audio("tom-4.mp3");
               audio.play();
        case "j":
               var audio = new Audio("crash.mp3");
               audio.play();
        case "k":
               var audio = new Audio("snare.mp3");
               audio.play();
        case "l":
               var audio = new Audio("kick-bass.mp3");
               audio.play();
       }
};


for(var i=0 ; i < drumbuttons ; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
           var p = this . innerHTML;
            makeSound(p);
            anim(p);
         
    });
    
}
document.addEventListener("keypress",function(event){
    var q = event.key;
    makeSound(q);
    anim(q);
});
 

function anim(key1){
      var activebutton = document.querySelector("."+key1);
      activebutton.classList.add("pressed");
      setTimeout(function(){activebutton.classList.remove("pressed")},100);
};
   


