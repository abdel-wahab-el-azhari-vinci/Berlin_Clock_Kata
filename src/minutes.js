export class MinutesMain {
  minutesOne(minute) {
    return isMultipleOf5(minute);
  }

  minutesFive(minute) {
    return Math.floor(minute / 5);
  }
}

function isMultipleOf5(minute) {
  return minute % 5;
}
