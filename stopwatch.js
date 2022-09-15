//2. Секундомір. Користувач вводить число - це секунди. Починається відлік як в секундоміра до стопу. 
// Якщо 1:30 це 1 хв 30 сек. Треба дати можливість вводити в хвилинах. Якщо користувач вводить 90, то треба щоб писало 1:10.

let seconds = readSecondsNumber();

function findMinutes(seconds){
  
  let remaining = seconds % 60;
  let minutesAmount = (seconds - remaining) / 60;
 
  return minutesAmount + ':' + remaining;
}

function startCountingSeconds(seconds){

  let timer = setInterval(function(){
   
    console.log(findMinutes(seconds));

    if(seconds === 0){
      clearInterval(timer);
    }
    seconds--;

  }, 1000); 
}

startCountingSeconds(seconds);

function readSecondsNumber(){
  let seconds = Number(prompt('Enter the number of seconds', 5));
  if(isSecondsNumberCorrect(seconds)){
    return seconds;
  }
  
  return readSecondsNumber();
}

function isSecondsNumberCorrect(seconds){
  return Number(seconds);
}