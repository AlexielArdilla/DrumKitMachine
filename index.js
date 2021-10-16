let arrayButtons = document.querySelectorAll(".drum");

let audio1 = new Audio("sounds/tom-1.mp3");
let audio2 = new Audio("sounds/tom-2.mp3");
let audio3 = new Audio("sounds/tom-3.mp3");
let audio4 = new Audio("sounds/tom-4.mp3");
let audio5 = new Audio("sounds/crash.mp3");
let audio6 = new Audio("sounds/kick-bass.mp3");
let audio7 = new Audio("sounds/snare.mp3");

for (let i = 0; i < arrayButtons.length; i++) {
  arrayButtons[i].addEventListener("click", function () {
    //console.log(this.innerHTML);
    //w a s d j k l
    buttonAnimation(this.innerHTML);
    switch (this.innerHTML) {
      case "w": //crash
        audio5.play();
        break;

      case "a": //kick-bass
        audio6.play();
        break;

      case "s": //snare
        audio7.play();
        break;

      case "d": //tom 1
        audio1.play();
        break;

      case "j": //tom 2
        audio2.play();
        break;

      case "k": //tom 3
        audio3.play();
        break;

      case "l": //tom 4
        audio4.play();
        break;

      default:
        //audio.play();
        break;
    }
  });
}

/* document.addEventListener('keydown', function(e){

    console.log(e.key);
}) */

function makeSound() {
    document.addEventListener("keydown", function (e) {
      //console.log(this.innerHTML);
      //w a s d j k l
      buttonAnimation(e.key);
      switch (e.key) {
        case "w": //crash
          audio5.play();
          break;
  
        case "a": //kick-bass
          audio6.play();
          break;
  
        case "s": //snare
          audio7.play();
          break;
  
        case "d": //tom 1
          audio1.play();
          break;
  
        case "j": //tom 2
          audio2.play();
          break;
  
        case "k": //tom 3
          audio3.play();
          break;
  
        case "l": //tom 4
          audio4.play();
          break;
  
        default:
          //audio.play();
          break;
      }
    });
  }
  
function buttonAnimation(buttonPressed){

let button = document.querySelector("."+buttonPressed);
button.classList.add("pressed");
setTimeout(function(){
    button.classList.remove("pressed");
}, 500);


}

  makeSound();
