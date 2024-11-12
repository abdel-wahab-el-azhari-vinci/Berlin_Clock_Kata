export class MinutesMain {
  minutesOne(minute) {
    return isMultipleOf5(minute);
  }

  minutesFive(minute) {
    return divideBy5(minute);
  }
}

function isMultipleOf5(minute) {
  return minute % 5;
}

function divideBy5(minute){
   return Math.floor(minute/5);
}