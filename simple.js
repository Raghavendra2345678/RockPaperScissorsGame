let p_score=0;
let c_score=0;

function playRound(playerSelection, computerSelection, p_score, c_score) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection===computerSelection) {
        return ["It's a tie!", 0, 0];
    }
    else if (playerSelection==="rock" && computerSelection === "scissors"){
        p_score=p_score+1;
        return ["You win! Rock crushes scissors.", 1, 0];
        
    }
    else if (playerSelection==="paper" && computerSelection ==="rock"){
        p_score=p_score+1;
        return ["You win! Paper covers rock.",1, 0];
        
    }
    else if (playerSelection==="scissors" && computerSelection=="paper"){
        p_score=p_score+1;
        return ["You win! Scissors cut paper.", 1, 0];
        
    }
    else if (playerSelection==="rock" && computerSelection==="paper"){
        c_score+=1;
        return ["Computer wins! Paper covers rock.", 0, 1];
        
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        c_score+=1;
        return ["Computer wins! Scissors cut paper.", 0, 1];
        
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        c_score+=1;
        return ["Computer wins! Rock crushes scissors.", 0, 1];
        
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
    const x=playRound(playerSelection, computerSelection, p_score, c_score);
    p_score+=x[1];
    c_score+=x[2];
    scoreUpdate(p_score, c_score);
    console.log(x);
    const result = document.getElementById("result");
    result.innerHTML=x[0];

    if(p_score>4){
        p_score=0;
        c_score=0;
        alert('Congratulations you won the game🎉🎊');
        
    }
    else if(c_score>4){
        p_score=0
        c_score=0;
        alert('Sorry you lost the game😉');
    }
}

function scoreUpdate(p_score, c_score){
    const score = document.getElementById("score");
    console.log(p_score, c_score);
    score.innerHTML=`Player: ${p_score}, Computer: ${c_score}`;
}


