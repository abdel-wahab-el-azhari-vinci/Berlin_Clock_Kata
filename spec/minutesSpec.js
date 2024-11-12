import { MinutesMain } from "../src/minutes.js";

describe("Minutes function should return the answer", function () {
  const minutesMain = new MinutesMain();

  it("Minutes should return Light off when given 0", function () {
    const result = minutesMain.minutesOne(0);

    expect(result).toBe("0 lights on");
  });

  it("Minutes should return Light off when given 1", function () {
    const result = minutesMain.minutesOne(1);

    expect(result).toBe("1 light on");
  });
});
