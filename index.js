const rock1 = document.querySelector('#player-1-rock')
const paper1 = document.querySelector('#player-1-paper')
const sciss1 = document.querySelector('#player-1-scissors')
const rock2 = document.querySelector('#player-2-rock')
const paper2 = document.querySelector('#player-2-paper')
const sciss2 = document.querySelector('#player-2-scissors')

document.addEventListener('onclick', function(e){
    if(e.key === true){
        alert('clicked')
    }
})