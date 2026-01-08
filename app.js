let userSore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const userSorePara= document.querySelector(".user-score");
const compSorePara= document.querySelector(".comp-score");

const generateCompChoice = () =>{
    let options=["stone", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
}

const drawGame=()=>{
    //console.log("It's a draw");
    msg.innerText = "Game Draw! Play Again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner =(userWin,choiceId,compChoice)=>{
    if(userWin){
        //console.log("User wins");
        userSore++;
        userSorePara.innerText = userSore;
        msg.innerText = `You win! ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        //console.log("Computer wins");
        compScore++;
        compSorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (choiceId)=>{
     //console.log("User chose",choiceId);
     const compChoice = generateCompChoice();
     //console.log("Computer chose",compChoice);

     if(choiceId === compChoice){
         drawGame();      
     }else{
        let userWin=true;
        if(choiceId==="paper")
        {
            userWin = compChoice === "stone" ? true : false
        }
        else if(choiceId==="stone")
        {
            userWin = compChoice === "paper" ? true : false;
        }
        else
        {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,choiceId,compChoice);
     }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>
    {
        const choiceId = choice.getAttribute("id");
        //console.log("You clicked on a choice",choiceId);
        playGame(choiceId);
    })
});