// R => Light On
// X => Light Off
export class SecondsMain {
  seconds(second) {
    if (second%2 == 0) {
      return "R";
    }
    return "X";
  }
}
