let count = 0;
const cardCounter = (card) =>{
    switch(card){
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;

      case 7:
      case 8:
      case 9:
        count;
        break;

      default:
        count--;
    }
  return count > 0 ? count + " Bet" : count + " Hold";
}
// console.log(cardCounter(10));
// console.log(cardCounter("J"));
// console.log(cardCounter("J"));
// console.log(cardCounter("J"));
// console.log(cardCounter("J"));

  

