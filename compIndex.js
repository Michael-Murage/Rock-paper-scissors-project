// const resizeOps = () => {
//     document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
//  };
//  resizeOps();
//  window.addEventListener("resize", resizeOps);
 
 const rock1 = document.querySelector('#player-1-rock')
 const paper1 = document.querySelector('#player-1-paper')
 const sciss1 = document.querySelector('#player-1-scissors')
 const rock2 = document.querySelector('#player-2-rock')
 const paper2 = document.querySelector('#player-2-paper')
 const sciss2 = document.querySelector('#player-2-scissors')
 const imgDisplay1 = document.querySelector('img.player-1')
 const imgDisplay2 = document.querySelector('img.player-2')

 const ready = document.querySelector('#ready')
 
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
    compChoice()
    results()
 }))

 const compChoice = () => {
     const randomNum = Math.floor(Math.random() * possibleClicks2.length) + 1;
     
     if(randomNum === 1){
         imgDisplay1.src = './rock.png'
     }
     else if(randomNum === 2){
         imgDisplay1.src = './paper.jpeg'
     }
     else if(randomNum === 3){
         imgDisplay1.src = './scissors.png'
     }
 }

 function results(){
     if(imgDisplay1.src === imgDisplay2.src){
         ready.innerHTML = 'It\'s a draw'
      }else if(imgDisplay1.src === './rock.png' && imgDisplay2.src === './scissors.png'){
         ready.innerHTML = 'You lose'
     }else if(imgDisplay1.src === './rock.png' && imgDisplay2.src === './paper.jpeg'){
        ready.innerHTML = 'You win'
    }else if(imgDisplay1.src === './paper.jpeg' && imgDisplay2.src === './scissors.png'){
        ready.innerHTML = 'You win'
    }else if(imgDisplay1.src === './paper.jpeg' && imgDisplay2.src === './rock.png'){
        ready.innerHTML = 'You lose'
    }else if(imgDisplay1.src === './scissors.png' && imgDisplay2.src === './rock.png'){
        ready.innerHTML = 'You win'
    }else if(imgDisplay1.src === './scissors.png' && imgDisplay2.src === './paper.png'){
        ready.innerHTML = 'You lose'
    }

 }

 