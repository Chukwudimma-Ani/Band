
for (var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
    function handleclick(){
      var buttoninner = this.innerHTML;
      makeSound(buttoninner);
     buttonAnimation(buttoninner);
    }
}

document.addEventListener("keypress",function (event) {
 makeSound(event.key);
 buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var audio= new Audio("tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio= new Audio("tom-2.mp3");
     audio.play();
     break;
     case "s":
      var audio= new Audio("tom-3.mp3");
      audio.play();
      break;
      case "d":
        var audio= new Audio("tom-4.mp3");
       audio.play();
       break;
       case "j":
        var audio= new Audio("snare.mp3");
        audio.play();
        break;
        case "k":
          var audio= new Audio("kick-bass.mp3");
         audio.play();
         break;
         case "l":
          var audio= new Audio("crash.mp3");
          audio.play();
      break;
    default:console.log(buttoninner);
      break;
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },200);
 
}