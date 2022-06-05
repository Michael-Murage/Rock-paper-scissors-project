const resizeOps = () => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
 };
 resizeOps();
 window.addEventListener("resize", resizeOps);
 
const rock = document.createElement('img')
rock.setAttribute('src', './rock.png')

const scissors = document.createElement('img')
scissors.setAttribute('src', './scissors.png')

const paper = document.createElement('img')
paper.setAttribute('src', './paper.jpeg')

const blank = document.createElement('img')
blank.setAttribute('src', './blank.jpeg')


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
      }else if(imgDisplay1.src === rock.src && imgDisplay2.src === scissors.src){
         ready.innerHTML = 'You lose'
     }else if(imgDisplay1.src === rock.src && imgDisplay2.src === paper.src){
        ready.innerHTML = 'You win'
    }else if(imgDisplay1.src === paper.src && imgDisplay2.src === scissors.src){
        ready.innerHTML = 'You win'
    }else if(imgDisplay1.src === paper.src && imgDisplay2.src === rock.src){
        ready.innerHTML = 'You lose'
    }else if(imgDisplay1.src === scissors.src && imgDisplay2.src === rock.src){
        ready.innerHTML = 'You win'
    }else if(imgDisplay1.src === scissors.src && imgDisplay2.src === paper.src){
        ready.innerHTML = 'You lose'
    }

 }
 