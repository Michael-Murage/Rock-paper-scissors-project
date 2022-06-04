const rock1 = document.querySelector('#player-1-rock')
const paper1 = document.querySelector('#player-1-paper')
const sciss1 = document.querySelector('#player-1-scissors')
const rock2 = document.querySelector('#player-2-rock')
const paper2 = document.querySelector('#player-2-paper')
const sciss2 = document.querySelector('#player-2-scissors')
const imgDisplay1 = document.querySelector('img.player-1')
const imgDisplay2 = document.querySelector('img.player-2')

const possibleClicks1 = document.querySelectorAll('button.player-1')

possibleClicks1.forEach(possibleClick => possibleClick.addEventListener('click', (e) => {
   if(e.target.matches('#player-1-rock')){
      imgDisplay1.src = './rock.png';
   }
   else if(e.target.matches('#player-1-paper')){
      imgDisplay1.src = './paper.jpeg'
   }
   else if(e.target.matches('#player-1-scissors')){
      imgDisplay1.src = './scissors.png'
   }
}))

const possibleClicks2 = document.querySelectorAll('button.player-2')

possibleClicks2.forEach(possibleClick => possibleClick.addEventListener('click', (e) => {
   if(e.target.matches('#player-2-rock')){
      imgDisplay2.src = './rock.png'
   }
   else if(e.target.matches('#player-2-paper')){
      imgDisplay2.src = './paper.jpeg'
   }
   else if(e.target.matches('#player-2-scissors')){
      imgDisplay2.src = './scissors.png'
   }
}))