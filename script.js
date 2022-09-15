function getComputerChoice(){
    randomnum = Math.floor(Math.random() * 3 +1)
    console.log(randomnum)
    switch(randomnum){
        case 1:
            return "ROCK"
             break
        case 2:
            return "PAPER"
            break
        case 3:
            return "SCISSCORS"
            break
    }

  
}


function game(rounds){
    score = 0
    computerscore = 0
   for (i= 1; i<rounds;i++){
    const  playerDecision = prompt("Rock , Paper , SCISSCORS?").toUpperCase().trim()
    const cOMPUTERDecision  = getComputerChoice().toUpperCase().trim()



    function playRound(playerSelection, ComputerSelection){
        console.log("inside playRound", playerSelection, ComputerSelection);
        if (playerSelection === ComputerSelection){
           
            return "Its A Draw"
        }

        if (playerSelection == "ROCK" && ComputerSelection == "SCISSCORS"  )
        {
            score +=1

            return "You Won"
        }
        if (playerSelection == "ROCK" && ComputerSelection == "Paper"  )
        {
            computerscore += 1

            return "You Lose"
        }
        if (ComputerSelection == "ROCK" && playerSelection == "SCISSCORS"  )
        {
            computerscore += 1

            return "You Lose"
        }
        if (ComputerSelection == "ROCK" && playerSelection == "Paper"  )
        {
            score +=1

            return "You Won"
        }
        if (playerSelection == "Paper" && ComputerSelection == "SCISSCORS"  )
        {
            computerscore += 1

            return "You Lost"
        }
        if (playerSelection == "Paper" && ComputerSelection == "Rock"  )
        {
            score +=1

            return "You Won"
        }
        if (ComputerSelection == "Paper" &&  playerSelection == "SCISSCORS"  )
        {
            score +=1

            return "You Won"
        }
        if (ComputerSelection == "Paper" && playerSelection == "Rock"  )
        {
            computerscore += 1

            return "You Lost"
        }
        if (playerSelection == "SCISSCORS" && ComputerSelection == "ROCK"  )
        {
            computerscore += 1

            return "You Lost"
        }
        if (playerSelection == "SCISSCORS" && ComputerSelection == "PAPER"  )
        {
            score +=1

            return "You Won"
        }
        if (ComputerSelection == "SCISSCORS" &&  playerSelection == "ROCK"  )
        {
            score +=1
            return "You Won"
        }
        if (ComputerSelection == "SCISSCORS" && playerSelection == "PAPER"  )
        {
            computerscore += 1

            return "You Lost"
        }
        else{
            return "Value not recognized"
        }
      
    }

    value = playRound(playerDecision,cOMPUTERDecision)
    console.log("outside", playerDecision, cOMPUTERDecision);
    console.log(`Your Score is ${score}`)
   }

}

game(5)




