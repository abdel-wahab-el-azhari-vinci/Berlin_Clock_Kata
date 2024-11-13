// R => Red light
// X => Light Off
export class BerlinClock {
  hoursOne(hour) {
    return multipleOf5(hour);
  }

  hoursFive(hour) {
    return divideBy5(hour);
  }

  minutesOne(minute) {
    return multipleOf5(minute);
  }

  minutesFive(minute) {
    return divideBy5(minute);
  }

  seconds(second) {
    if (second % 2 == 0) return "R";
    return "X";
  }

  minutesOnePrint(minute) {
    const tabMinutesOne = ['X', 'X', 'X', 'X'];
    const minutes = this.minutesOne(minute);

    for (let i = 0; i < minutes; i++){
      tabMinutesOne[i] = 'Y';
    }

    return tabMinutesOne.join('');
  }

  
}

function divideBy5(number) {
  return Math.floor(number / 5);
}

function multipleOf5(number) {
  return number % 5;
}
