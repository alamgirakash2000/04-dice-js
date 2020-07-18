
let name= ['PLAYER 1' ,'PLAYER 2']

document.querySelector('#play-form').addEventListener('submit', function(e){
    e.preventDefault()
    var player1=e.target.elements.player0.value.trim().toUpperCase()
    var player2=e.target.elements.player1.value.trim().toUpperCase()
    if(player1!==''){
        name[0]=player1
    }
    if(player2!==''){
        name[1]=player2
    }

    localStorage.setItem('name',name)
    location.assign('game.html')
})