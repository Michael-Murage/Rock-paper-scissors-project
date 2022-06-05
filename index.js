const resizeOps = () => {
   document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};
resizeOps();
window.addEventListener("resize", resizeOps);

const rock = document.createElement('img')
rock.setAttribute('src', './rock.png')

const paper = document.createElement('img')
paper.setAttribute('src', './paper.jpeg')

const scissors = document.createElement('img')
scissors.setAttribute('src', './scissors.png')

const ready = document.querySelector('#ready')

let timeLeft = 3
const timer = setInterval(function(){
   if(timeLeft <= 0){
      clearInterval(timer);
   }
   ready.innerHTML = timeLeft;
   timeLeft -= 1;
}, 1000);


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
   results()
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
   results()
}))

function results(){
   if(imgDisplay1.src === imgDisplay2.src){
       ready.innerHTML = 'It\'s a draw'
    }else if(imgDisplay1.src === rock.src && imgDisplay2.src === scissors.src){
       ready.innerHTML = 'Player 1 wins'
   }else if(imgDisplay1.src === rock.src && imgDisplay2.src === paper.src){
      ready.innerHTML = 'Player 2 wins'
  }else if(imgDisplay1.src === paper.src && imgDisplay2.src === scissors.src){
      ready.innerHTML = 'Player 2 wins'
  }else if(imgDisplay1.src === paper.src && imgDisplay2.src === rock.src){
      ready.innerHTML = 'Player 1 wins'
  }else if(imgDisplay1.src === scissors.src && imgDisplay2.src === rock.src){
      ready.innerHTML = 'Player 2 wins'
  }else if(imgDisplay1.src === scissors.src && imgDisplay2.src === paper.src){
      ready.innerHTML = 'Player 1 wins'
  }

}
