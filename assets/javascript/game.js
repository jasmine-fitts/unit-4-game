$(document).ready(function() {

 //The player is shown a random number at the start of the game and it is between 19-120
    var randomNumber = Math.floor(Math.random() * 101+ 19);

    console.log(randomNumber);

//Displays random number into the randomNumber id in the html file
    $("#randomNumber").text(randomNumber);

    //Global variables
var wins = 0;
var losses = 0; 
var randomNumber;
var totalScore = [""];


$("#wins").text(wins);
$("#losses").text(losses);


//Each crystal has a random value between 1-12

var redCrystal = Math.floor(Math.random() * 12 + 1)
var blueCrystal = Math.floor(Math.random() * 12 + 1)
var greenCrystal = Math.floor(Math.random() * 12 + 1)
var yellowCrystal = Math.floor(Math.random() * 12 + 1)

totalScore = 0;


$("#redCrystal").on("click", function() {
    totalScore = totalScore + redCrystal
    console.log("New total " + totalScore);
    $("#finalTotal").text(totalScore);

    if (totalScore === randomNumber) {
        alert("You Win!");
        Wins++
    }
     else if (totalScore > randomNumber) {
         alert("You Lost :(");
         losses++
     }   
    
});

$("#blueCrystal").on("click", function() {
    totalScore = totalScore + blueCrystal
    console.log("New total " + totalScore);
    $("#finalTotal").text(totalScore);

    if (totalScore === randomNumber) {
        alert("You Win!");
        wins++
    }
     else if (totalScore > randomNumber) {
         alert("You Lost :(");
         losses++
     }   
   
});

$("#greenCrystal").on("click", function() {
    totalScore = totalScore + greenCrystal
    console.log("New total " + totalScore);
    $("#finalTotal").text(totalScore);

    if (totalScore === randomNumber) {
        alert("You Win!");
        wins++
    }
     else if (totalScore > randomNumber) {
         alert("You Lost :(");
         losses++
     }   
    
});

$("#yellowCrystal").on("click", function() {
    totalScore = totalScore + yellowCrystal
    console.log("New total " + totalScore);
    $("#finalTotal").text(totalScore);

    if (totalScore === randomNumber) {
        alert("You Win!");
        wins++
    }
     else if(totalScore > randomNumber) {
         alert("You Lost :(");
         losses++
     }   
    
});


})



//The player clicks on a crystal and it adds an amount to the player's total score



//The game hide the amount of the crysal until the player clicks ont he crsytal

//The player wins if their total score matches the random number

function win() {
    alert("You won!!");
    wins
}


//The palyer loses if their score goes above the random number



//The game restarts whenever the player wins or loses
function reset() {
    totalScore = Math.floor(Math.random() * 101 + 19);
console.log(totalScore);

var redCrystal = Math.floor(Math.random() * 12 + 1)
var blueCrystal = Math.floor(Math.random() * 12 + 1)
var greenCrystal = Math.floor(Math.random() * 12 + 1)
var yellowCrystal = Math.floor(Math.random() * 12 + 1)
}

