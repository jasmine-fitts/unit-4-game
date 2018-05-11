$(document).ready(function() {


    //Global variables
var wins = 0;
var losses = 0; 
var randomNumber = [""];
var randomValue = [""];
var totalScore = [""];

var crystals = ["assets/images/blue.png", "assests/images/green.png", "assets/images/red.pgn", "assets/images/yellow.png"];

//The player is shown a random number at the start of the game and it is between 19-120

var randomNumber = Math.floor(Math.random() * 101+ 19);
    console.log(randomNumber);

$("#randomNumber").text(randomNumber);


//Each crystal has a random value between 1-12

   

    $(".crystal").on('click', function () {
        var randomValue = Math.floor(Math.random() * 12 + 1);
        ('data-random');

    })

var randomValue = Math.floor(Math.random() * 12 + 1);
    console.log(randomValue);





})



//The player clicks on a crystal and it adds an amount to the player's total score

//The game hide the amount of the crysal until the player clicks ont he crsytal

//The player wins if their total score matches the random number

//The palyer loses if their score goes above the random number



//The game restarts whenever the player wins or loses

