let choices=document.querySelectorAll(".choice")
let player=document.querySelector(".player")
let pscore=document.querySelector(".pscore")
let cscore=document.querySelector(".cscore")
let msg=document.querySelector("#msgplayer")
let btn=document.querySelector(".btn")
let playername=document.querySelector("#name")
let intro=document.querySelector(".intro")

let compchoice=["rock", "paper", "scissor"]
let playerscore=0, computerscore=0;
let pname;

btn.addEventListener("click", (event)=>{
    event.preventDefault()
    pname=playername.value
    intro.classList.add("hide")
    player.innerText=`${pname}`
});

let showWinner=(playerWin)=>{
    if(playerWin){
        playerscore++;
        pscore.innerText=`${playerscore}`
        msg.innerText="Congratulations! You Won"
        msg.classList.remove("msg-red")
        msg.classList.remove("msg-draw")
        msg.classList.add("msg-green")
    }
    else{
        computerscore++;
        cscore.innerText=`${computerscore}`
        msg.classList.remove("msg-draw")
        msg.classList.remove("msg-green")
        msg.innerText="LOL! You Lost"
        msg.classList.add("msg-red")
    }
}
let DrawGame=()=>{
    msg.innerText="Match Draw"
    msg.classList.remove("msg-red")
    msg.classList.remove("msg-green")
    msg.classList.add("msg-draw")
}

let generateComputerChoice=()=>{
    return (Math.floor(Math.random()*3));
}

let checkChoice=(event) =>{
    let computerchoice=compchoice[generateComputerChoice()];
    let playerchoice=event.currentTarget.getAttribute('id');

    if(playerchoice===computerchoice){
        DrawGame();
    }
    else{
        let playerWin=true;
        if(playerchoice==="rock"){
            playerWin= computerchoice==="scissor" ? true : false;
        }
        else if(playerchoice==="paper"){
            playerWin= computerchoice==="rock" ? true : false;
        }
        else if(playerchoice==="scissor"){
            playerWin= computerchoice==="paper" ? true : false;
        }
        showWinner(playerWin);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", checkChoice)
})