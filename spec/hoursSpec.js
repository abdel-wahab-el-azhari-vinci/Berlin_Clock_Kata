import { HoursMain } from "../src/hours.js";

describe("HoursOne function should return the answer", function () {
  const hoursMain = new HoursMain();

  it("HoursOne should return 1 when given 1", function () {
    const result = hoursMain.hoursOne(1);

    expect(result).toBe(1);
  });
});
