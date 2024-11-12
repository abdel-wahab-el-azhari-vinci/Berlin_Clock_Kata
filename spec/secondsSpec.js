import { SecondsMain } from "../src/seconds.js";

describe("Seconds function should return the answer", function () {
  const secondsMain = new SecondsMain();

  it("Seconds should return X when given 1", function () {
    const result = secondsMain.seconds(1);

    expect(result).toBe("X");
  });

  it("Seconds should return R when given 2", function () {
    const result = secondsMain.seconds(2);

    expect(result).toBe("R");
  });

  it("Seconds should return X when given an odd number", function () {
    const result = secondsMain.seconds(3);

    expect(result).toBe("X");
  });

  it("Seconds should return R when given an even number", function () {
    const result = secondsMain.seconds(4);

    expect(result).toBe("R");
  });
});
