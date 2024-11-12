export class MinutesMain {
  minutesOne(minute) {
    if (minute === 1) {
      return "1 lights on";
    }
    if(minute === 2){
      return "2 lights on";
    }

    return "0 lights on";
  }
}
