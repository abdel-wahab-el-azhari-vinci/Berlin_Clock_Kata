import { HoursMain } from "../src/hours.js";

describe("HoursOne function should return the answer", function () {
  const hoursMain = new HoursMain();

  it("HoursOne should return 1 when given 1", function () {
    const result = hoursMain.hoursOne(1);

    expect(result).toBe(1);
  });

  it("HoursOne should return 2 when given 2", function () {
    const result = hoursMain.hoursOne(2);

    expect(result).toBe(2);
  });

  it("HoursOne should return 3 when given 3", function () {
    const result = hoursMain.hoursOne(3);

    expect(result).toBe(3);
  });
});
