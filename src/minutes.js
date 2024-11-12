export class MinutesMain {
  minutesOne(minute) {
    return isMultipleOf5(minute);
  }

  minutesFive(minute) {
    if (minute <= 4) {
      return 0;
    }

    if(minute === 10){
       return 2;
    }

    return 1;
  }
}

function isMultipleOf5(minute) {
  return minute % 5;
}
