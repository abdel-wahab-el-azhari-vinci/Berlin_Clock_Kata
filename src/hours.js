export class HoursMain {
  hoursOne(hour) {
    // case for midnight
    if (hour === 0) {
      return 4;
    }
    return multipleOf5(hour);
  }

  hoursFive(hour){
    if(hour === 5){
        return 1;
    }
    if (hour === 10) {
        return 2;
    }
    return 0;
  }
}

function multipleOf5(hour) {
  return hour % 5;
}
