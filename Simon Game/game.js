var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];

//------------game starts
//2. Create a new variable called level and start at level 0.
var started = false;
var level = 0;

$(document).keypress(function(){
    //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
    
    if (!started){

        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }

});

//------------

//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").on("click", function(){

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.

    var userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    // Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern

    // console.log(userClickedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    //--------adding levels
    //2. Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length - 1);

    
});

//Create a new function called playSound() that takes a single input parameter called name.

function playSound(name){
    var audioClicked = new Audio ("./sounds/" + name + ".mp3");
    audioClicked.play();

}

function nextSequence(){

    //6. Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
    userClickedPattern = [];

    //------------game starts
    //4. Inside nextSequence(), increase the level by 1 every time nextSequence() is called.
    level++;

    //5. Inside nextSequence(), update the h1 with this change in the value of level.

    $("#level-title").text("Level " + level);
    //------------game starts

    var randomNumber = Math.random();
    randomNumber = randomNumber * 4;
    randomNumber = Math.floor(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio ("./sounds/" + randomChosenColour + ".mp3");
    audio.play();

    animatePress(randomChosenColour);
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");
    }, 100);

}


//--------adding levels
//1. Create a new function called checkAnswer(), it should take one input with the name currentLevel
function checkAnswer(currentLevel){

    //3. Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
    if (userClickedPattern[currentLevel] === gamePattern [currentLevel]){
        console.log("success");

        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        //5. Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }
    }
    else{
        console.log("wrong");
        //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
      playSound("wrong");

      //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startOver();
    }


}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}




