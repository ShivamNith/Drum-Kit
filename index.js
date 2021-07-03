for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var expression = this.innerHTML;
    makeSound(expression);
    buttonAnimation(expression);
  });
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key){

  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    default:
  }

}

function buttonAnimation(currentKey){
   document.querySelector("."+ currentKey).classList.add("pressed");
   setTimeout(function(){ document.querySelector("."+ currentKey).classList.remove("pressed");},100);
}
