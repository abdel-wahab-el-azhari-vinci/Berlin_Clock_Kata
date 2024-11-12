export class MinutesMain {
  minutesOne(minute) {
    return isMultipleOf5(minute) + " lights on";
  }

  minutesFive(minute) {
    if (minute <= 4) {
      return "0 lights on";
    }

    return "1 lights on";
  }
}

function isMultipleOf5(minute) {
  return minute % 5;
}
