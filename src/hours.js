export class HoursMain {
  hoursOne(hour) {
    if (hour === 0) {
      return 4;
    }
    return multipleOf5(hour);
  }
}

function multipleOf5(hour) {
  return hour % 5;
}
