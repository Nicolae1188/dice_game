
//Dice images stored in an array
diceImgs = [
    "./img/dice1.png",
    "./img/dice2.png",
    "./img/dice3.png",
    "./img/dice4.png",
    "./img/dice5.png",
    "./img/dice6.png"
]

var score = 0;

function rollDice(){

    //Generates a random number
    var randRoll = Math.floor(Math.random()*6);

    //Adds up the random numbers
    score += randRoll +1

    //Display score/message
    document.getElementById('scoreP').innerHTML = score;

    // Variables for img elements
    var img = document.getElementById('diceImg');

    //Get dice images from array that equals with the random number
    img.src = diceImgs[randRoll];
    
    //Condition roll 1 = gameover ,total score 21 = win
    if (score == 1) {
        alert ("Game Over, you've rolled 1.");
        window.location.reload();
        score = 0;
    } else if (score > 20) {
        alert  ("Your score passed 20,You've won!");
        window.location.reload();
        score = 0;
    }
}
