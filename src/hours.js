export class HoursMain {
  hoursOne(hour) {
    // case for midnight
    if (hour === 0) {
      return 4;
    }
    return multipleOf5(hour);
  }

  hoursFive(hour){
    return Math.floor(hour / 5);
  }
}

function multipleOf5(hour) {
  return hour % 5;
}
