import { MinutesMain } from "../src/minutes.js";

describe("Seconds function should return the answer", function () {
  const minutesMain = new MinutesMain();

  it("Minutes should return Light off when given 0", function () {
    const result = minutesMain.minutesOne(0);

    expect(result).toBe("0 lights on");
  });
  
});
