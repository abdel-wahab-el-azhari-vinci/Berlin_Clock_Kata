export class MinutesMain {
  minutesOne(minute) {
    return isMultipleOf5(minute) + " lights on";
  }
}

function isMultipleOf5(minute) {
  return minute % 5;
}

