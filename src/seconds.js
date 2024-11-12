export class SecondsMain {
  seconds(second) {
    if (second%2 == 0) {
      return "Light on";
    }
    return "Light off";
  }
}
