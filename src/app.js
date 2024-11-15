// R => Red light
// X => Light Off
// Y => Yellow light
export class BerlinClock {

  clockPrint() {
    const date = new Date();
    
    return `Actual hour: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\n` + 
    "     " + this.seconds(date.getSeconds()) + "     \n"
    + "    " +this.hoursFivePrint(date.getHours()) + "\n"
    + "    " + this.hoursOnePrint(date.getHours()) + "\n"
    + " " +this.minutesFivePrint(date.getMinutes()) + "\n"
    + "    " +this.minutesOnePrint(date.getMinutes());
  }
  
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
    if (second % 2 === 0) return "R";
    return "X";
  }

  minutesOnePrint(minute) {
    const tabMinutesOne = ["X", "X", "X", "X"];
    const minutes = this.minutesOne(minute);

    for (let i = 0; i < minutes; i++) {
      tabMinutesOne[i] = "Y";
    }

    return tabMinutesOne.join("");
  }

  minutesFivePrint(minute) {
    const tabMinutesFive = ["X","X","X","X","X","X","X","X","X","X","X"];
    const minutes = this.minutesFive(minute);

    for (let i = 0; i < minutes; i++) {
      tabMinutesFive[i] = "Y";
      if ((i + 1) % 3 === 0) {
        tabMinutesFive[i] = "R";
      }
    }

    return tabMinutesFive.join("");
  }

  hoursOnePrint(hour) {
    const tabHoursOne = ["X", "X", "X", "X"];
    const hours = this.hoursOne(hour);

    for (let i = 0; i < hours; i++) {
      tabHoursOne[i] = "R";
    }

    return tabHoursOne.join("");
  }

  hoursFivePrint(hour) {
    const tabHoursFive = ["X", "X", "X", "X"];
    const hours = this.hoursFive(hour);

    for (let i = 0; i < hours; i++) {
      tabHoursFive[i] = "R";
    }

    return tabHoursFive.join("");
  }
}

function divideBy5(number) {
  return Math.floor(number / 5);
}

function multipleOf5(number) {
  return number % 5;
}
