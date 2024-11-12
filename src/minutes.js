export class MinutesMain {
  minutesOne(minute) {
    return isMultipleOf5(minute) + " lights on";
  }

  minutesFive(minute) {
    if (minute === 5) {
        return "1 lights on";
    }
  }
}

function isMultipleOf5(minute) {
  return minute % 5;
}

