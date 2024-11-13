export class HoursMain {
  hoursOne(hour) {
    return multipleOf5(hour);
  }

  hoursFive(hour){
    return divideBy5(hour);
  }
}

function divideBy5(hour) {
    return Math.floor(hour / 5);
}

function multipleOf5(hour) {
  return hour % 5;
}
