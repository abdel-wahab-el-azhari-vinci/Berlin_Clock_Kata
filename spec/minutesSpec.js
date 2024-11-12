import { MinutesMain } from "../src/minutes.js";

describe("Minutes function should return the answer", function () {
  const minutesMain = new MinutesMain();

  it("Minutes should return 0 when given 0", function () {
    const result = minutesMain.minutesOne(0);

    expect(result).toBe(0);
  });

  it("Minutes should return 1 when given 1", function () {
    const result = minutesMain.minutesOne(1);

    expect(result).toBe(1);
  });

  it("Minutes should return 2 when given 2", function () {
    const result = minutesMain.minutesOne(2);

    expect(result).toBe(2);
  });

  it("Minutes should return 3 when given 3", function () {
    const result = minutesMain.minutesOne(3);

    expect(result).toBe(3);
  });

  it("Minutes should return 4 when given 4", function () {
    const result = minutesMain.minutesOne(4);

    expect(result).toBe(4);
  });

  it("Minutes should return 0 when given 5", function () {
    const result = minutesMain.minutesOne(5);

    expect(result).toBe(0);
  });

  it("Minutes should return 1 when given 36", function () {
    const result = minutesMain.minutesOne(36);

    expect(result).toBe(1);
  });
});

describe("MinutesFive function should return the answer", function () {
  const minutesMain = new MinutesMain();

  it("MinutesFive should return 0 when given 0", function () {
    const result = minutesMain.minutesFive(0);

    expect(result).toBe(0);
  });

  it("MinutesFive should return 1 when given 5", function () {
    const result = minutesMain.minutesFive(5);

    expect(result).toBe(1);
  });
  
  it("MinutesFive should return 1 when given 6", function () {
    const result = minutesMain.minutesFive(6);

    expect(result).toBe(1);
  });

  it("MinutesFive should return 2 when given 10", function () {
    const result = minutesMain.minutesFive(10);

    expect(result).toBe(2);
  });
});


