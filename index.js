var numberOfDrumButtons=document.querySelectorAll(".drum").length

 for(var i=0;i<numberOfDrumButtons;i++){
 document.querySelectorAll(".drum")[i].addEventListener('click',function() {
  var ref=this.innerHTML
   
     playsound(ref);

     animation(ref)
 })
}
//using keybourd press
   
document.addEventListener("keypress", function(event) {

    playsound(event.key);
    animation(event.key)

  
  });
  

//creating global function
function playsound(key){
    switch(key){
        case 'w':
            var play=new Audio('sounds/tom-1.mp3')
            play.play()
            break;
        case 'a':
            var play=new Audio('sounds/tom-2.mp3')
            play.play()
            break;
         case 's':
                var play=new Audio('sounds/tom-3.mp3')
                play.play()
                break;   
         case 'd':
            var play=new Audio('sounds/tom-4.mp3')
            play.play()
            break;
         case 'j':
            var play=new Audio('sounds/snare.mp3')
                play.play()
                break;
        case 'k':
                var play=new Audio('sounds/kick-bass.mp3')
                play.play()
                break;
        case 'l':
            var play=new Audio('sounds/crash.mp3')
            play.play()
            break;

         //   default:console.log(key);
       }
    
}

//function for button animation

function animation(ref){
    var addanimation=document.querySelector("." + ref);
    addanimation.classList.add('pressed');
 setTimeout(function(){
    addanimation.classList.remove('pressed');
 },300)
    
}