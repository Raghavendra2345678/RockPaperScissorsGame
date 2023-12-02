function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection) {
        return "It's a tie!";
    }
    else if (playerSelection==="rock" && computerSelection === "scissors"){
        return "You win! Rock crushes scissors.";
    }
    else if (playerSelection==="paper" && computerSelection ==="rock"){
        return "You win! Paper covers rock.";
    }
    else if (playerSelection==="scissors" && computerSelection=="paper"){
        return "You win! Scissors cut paper.";
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        return "Computer wins! Paper covers rock.";
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return "Computer wins! Scissors cut paper.";
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return "Computer wins! Rock crushes scissors.";
    }
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    console.log(Math.random());
    return choices[Math.floor(Math.random() * choices.length)];
}

function game() {
    const playerSelection = prompt("Enter your Choice!");
    const computerSelection = getComputerChoice();
    const x=playRound(playerSelection, computerSelection);
    console.log(x);
    const result = document.getElementById("result");
    result.innerHTML=x;
}

