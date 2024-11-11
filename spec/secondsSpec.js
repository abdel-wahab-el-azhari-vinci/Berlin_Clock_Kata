import { SecondsMain } from "../src/seconds.js";

describe("Seconds function should return the answer", function () {
  const secondsMain = new SecondsMain();

  it("Seconds should return Light off when given 1", function () {
    const result = secondsMain.seconds(1);

    expect(result).toBe("Light off");
  });

  it("Seconds should return Light on when given 2", function () {
    const result = secondsMain.seconds(2);

    expect(result).toBe("Light on");
  });
});
