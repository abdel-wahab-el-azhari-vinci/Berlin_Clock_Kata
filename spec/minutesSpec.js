import { MinutesMain } from "../src/minutes.js";

describe("Minutes function should return the answer", function () {
  const minutesMain = new MinutesMain();

  it("Minutes should return 0 light on when given 0", function () {
    const result = minutesMain.minutesOne(0);

    expect(result).toBe("0 lights on");
  });

  it("Minutes should return 1 light on when given 1", function () {
    const result = minutesMain.minutesOne(1);

    expect(result).toBe("1 lights on");
  });

  it("Minutes should return 2 lights on when given 2", function () {
    const result = minutesMain.minutesOne(2);

    expect(result).toBe("2 lights on");
  });

  it("Minutes should return 3 lights on when given 3", function () {
    const result = minutesMain.minutesOne(3);

    expect(result).toBe("3 lights on");
  });

  it("Minutes should return 4 lights on when given 4", function () {
    const result = minutesMain.minutesOne(4);

    expect(result).toBe("4 lights on");
  });

  it("Minutes should return 0 lights on when given 5", function () {
    const result = minutesMain.minutesOne(5);

    expect(result).toBe("0 lights on");
  });
  
});
