// import {rollDice} from "./diceGame";
let maxScore = 100; // max score for the game
let marks = [0, 0]; // array to store the marks

document.getElementById("btn1").addEventListener("click", () => { // event listener for player 1 button

    let dice = rollDice(); // roll the dice

    document.getElementById("dice1").src = dice[3]; // set the image src for dice 1
    document.getElementById("dice2").src = dice[4]; // set the image src for dice 2


    if (gameRule(dice)) { // if the player 1 can play again
        document.getElementById("btn2").setAttribute("disabled", "disabled"); // disable the button for player 2
        document.getElementById("btn1").removeAttribute("disabled"); // enable the button for player 1
    } else { // if the player 1 cannot play again transfer the button to player 2
        document.getElementById("btn2").removeAttribute("disabled"); // enable the button for player 2
        document.getElementById("btn1").setAttribute("disabled", "disabled"); // disable the button for player 1
    }

    marks[0] = scoreRule(dice, marks[0]); // calculate the score for player 1
    // convert the score to string
    document.getElementById("score1").innerHTML = "Score: " + marks[0]; // set the score for player 1
    console.log("Player 1 dice value "+ dice[0] + " " + dice[1] + " and marks " + marks[0]); // print the score for player 1
    if (marks[0] >= maxScore) { // if the score is greater than or equal to the max score initiate winning scenario for player 1
        winScenario(1);
    }
});

document.getElementById("btn2").addEventListener("click", () => { // event listener for player 2 button

    let dice = rollDice(); // roll the dice

    document.getElementById("dice1").src = dice[3]; // set the image src for dice 1
    document.getElementById("dice2").src = dice[4]; // set the image src for dice 2

    if (gameRule(dice)) { // if the player 2 can play again
        document.getElementById("btn1").setAttribute("disabled", "disabled"); // disable the button for player 1
        document.getElementById("btn2").removeAttribute("disabled"); // enable the button for player 2
    } else { // if the player 2 cannot play again transfer the button to player 1
        document.getElementById("btn1").removeAttribute("disabled"); // enable the button for player
        document.getElementById("btn2").setAttribute("disabled", "disabled"); // disable the button for player 2
    }

    marks[1] = scoreRule(dice, marks[1]);  // calculate the score for player 2


    // convert the score to string
    document.getElementById("score2").innerHTML = "Score: " + marks[1]; // set the score for player 2
    console.log("Player 2 dice value "+ dice[0] + " " + dice[1] + " and marks " + marks[1]);
    if (marks[1] >= maxScore) { // if the score is greater than or equal to the max score initiate winning scenario for player 2
        winScenario(2); // initiate winning scenario for player 2
    }
});


const rollDice = () => { // function to roll the dice

    let dice = []; // array to store the dice values
    dice[0] = Math.floor(Math.random() * 6) + 1; // first dice roll
    dice[1] = Math.floor(Math.random() * 6) + 1; // second dice roll

    dice[3] = "images/dice_" + dice[0] + ".png"; // set the image src for dice 1
    dice[4] = "images/dice_" + dice[1] + ".png"; // set the image src for dice 2

    return dice; // return the image src according to the dice values
}

let gameRule = (dice) => { // function to check if the player can play again

    return dice[0] === dice[1] && dice[0] !== 1; // if the dice values are equal and not 1 return true
}

let scoreRule = (dice, marks) => { // function to calculate the score

    if (dice[0] === 1 && dice[1] === 1) { // if both dice are 1
        return 0; // return marks as 0
    } else { // if both dice are not 1
        return dice[0] + dice[1] + marks; // return the sum of the dice values plus the marks
    }
}

const winScenario = (player) => { // function to initiate winning scenario
    document.getElementById("btn1").setAttribute("disabled", "disabled"); // disable the button for player 1
    document.getElementById("btn2").setAttribute("disabled", "disabled"); // disable the button for player 2

    if (player === 1) { // if the player is player 1
        document.getElementById("score1").innerHTML = "Winner!"; // set the score for player 1 as winner
        document.getElementById("score2").innerHTML = "Loser!"; // set the score for player 2 as loser
    } else if (player === 2) { // if the player is player 2
        document.getElementById("score2").innerHTML = "Winner!"; // set the score for player 2 as winner
        document.getElementById("score1").innerHTML = "Loser!"; // set the score for player 1 as loser
    }
}
