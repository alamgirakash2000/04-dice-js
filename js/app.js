

var score, roundScore, activePlayer,six
let name=localStorage.getItem('name').split(',')

init()

document.querySelector(".btn-roll").addEventListener('click',function(){

    // Setup the scores
    var dice=Math.floor(Math.random()*6)+1
    document.querySelector('.dice').src=`img/dice-${dice}.png`
    document.querySelector('.dice').style.display='block'
    document.querySelector(`#current-${activePlayer}`).textContent=dice
    if(dice===6){
        six[activePlayer]=1
    }
    if(six[activePlayer]===1){
        if(roundScore[activePlayer]+dice<=100){
            roundScore[activePlayer]+=dice
        }
    }
    document.querySelector(`#score-${activePlayer}`).textContent=roundScore[activePlayer]
    
    //Winner massege if any player wins
    isWinner(roundScore[activePlayer],activePlayer)

   // Changing the active player
     setActivePlayer(dice)
})

document.querySelector(".btn-new").addEventListener('click',init)
document.querySelector(".btn-hold").addEventListener('click',() => location.assign('index.html'))


// Restarting Function
function init(){
    score=0
    roundScore=[0,0]
    six=[0,0]
    activePlayer=0
    document.querySelector('#current-0').textContent=0
    document.querySelector('#current-1').textContent=0
    document.querySelector('#score-0').textContent=0
    document.querySelector('#score-1').textContent=0
    document.querySelector('.dice').style.display='none'
    document.querySelector(".btn-roll").style.display='block'
    document.querySelector(`#name-0`).textContent=name[0]
    document.querySelector(`#name-1`).textContent=name[1]
    document.querySelector(`#name-0`).classList.remove('winner')
    document.querySelector(`#name-1`).classList.remove('winner')
}

// Massage For the winner
function isWinner(Score, activePlayer){
    if(Score===100){
        var winner=document.querySelector(`#name-${activePlayer}`)
        winner.classList.add('winner')
        winner.textContent=`Winner!!, ${winner.textContent}`
        
        document.querySelector(".btn-roll").style.display='none'
        document.querySelector('.dice').style.display='none'  
    }
}

// Setup who is the active player
function setActivePlayer(dice){
    if(dice!==6){
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
        if(activePlayer){
            activePlayer=0
        }else{
            activePlayer=1
        }
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('active')
     }
}


