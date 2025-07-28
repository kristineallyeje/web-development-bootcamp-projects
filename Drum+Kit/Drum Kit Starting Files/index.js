// alert("Linked");

// document.querySelector("button").addEventListener("click", function {alert("I got clicked")});

// function handleClick(){
//     alert("I got clicked!");

// }


//detect button press
var numDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        
        // this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML); //pass in the key of the button that was trigerred;

        

    });
}

//Detecting Keyboard press
//once key is detected, the function will be called passing the event that triggered the keypress
//and the event contain a property called key, which tells us which keyboard key was pressed
//we send event.key over to the function makesound

document.addEventListener("keydown", function(event){
    // alert("Key was pressed.");
    // console.log(event);
    makeSound(event.key);
    //send the event.key so the key property of the event
    buttonAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;

    }


}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function(){
        activeButton.classList.toggle("pressed")

    }, 100);
    


}

//case button
// var buttonInnerHTML = this.innerHTML;
// switch(buttonInnerHTML){
//         case "w":
//             var tom1 = new Audio("./sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "a":
//             var tom2 = new Audio("./sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "s":
//             var tom3 = new Audio("./sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "d":
//             var tom4 = new Audio("./sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         case "j":
//             var snare = new Audio("./sounds/snare.mp3");
//             snare.play();
//             break;
//         case "k":
//             var crash = new Audio("./sounds/crash.mp3");
//             crash.play();
//             break;
//         case "l":
//             var kick = new Audio("./sounds/kick-bass.mp3");
//             kick.play();
//             break;
//         default:
//             console.log(buttonInnerHTML);
//             break;

//     }