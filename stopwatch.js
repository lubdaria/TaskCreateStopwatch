//2. Секундомір. Користувач вводить число - це секунди. Починається відлік як в секундоміра до стопу. 
// Якщо 1:30 це 1 хв 30 сек. Треба дати можливість вводити в хвилинах. Якщо користувач вводить 90, то треба щоб писало 1:10.

let seconds = readSecondsNumber();

function readSecondsNumber(){
  let seconds = prompt('Enter the number of seconds', 5);

  if(isSecondsNumberIncorrect(seconds)){
    return readSecondsNumber();
  }
  
  if(seconds.includes(':')){
    seconds = convertingMinutesToSeconds(seconds);
  }

  return seconds;
}

function isSecondsNumberIncorrect(seconds){
  if(seconds === '' || seconds === ' '){
    return seconds;
  }
}

function convertingMinutesToSeconds(seconds){
  let numberArray = seconds.split(':');

  if(isNumberArrayIncorrect(numberArray)){
    return readSecondsNumber();
  }

  seconds = Number(numberArray[0]) * 60 + Number(numberArray[1]);
  return seconds;
}

function isNumberArrayIncorrect(numberArray){
  let minites = Number(numberArray[0]);
  let seconds = Number(numberArray[1]);

  if(minites > 60 || seconds > 60 || numberArray[0].length > 2 || numberArray[1].length > 2){
    return numberArray;
  }
}

function findMinutes(seconds){
  
  let remaining = seconds % 60;
  let minutesAmount = (seconds - remaining) / 60;
 
  return minutesAmount + ':' + remaining;
}

function startCountingSeconds(seconds){

  let timer = setInterval(function(){
   
    console.log(findMinutes(seconds));

    if(seconds === 0 || seconds === ''){
      clearInterval(timer);
    }
    seconds--;

  }, 1000); 
}

startCountingSeconds(seconds);