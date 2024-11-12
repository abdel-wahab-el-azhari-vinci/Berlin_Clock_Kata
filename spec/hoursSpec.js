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

  it("HoursOne should return 4 when given 4", function () {
    const result = hoursMain.hoursOne(4);

    expect(result).toBe(4);
  });

  it("HoursOne should return 0 when given 5", function () {
    const result = hoursMain.hoursOne(5);

    expect(result).toBe(0);
  });

  it("HoursOne should return 1 when given 6", function () {
    const result = hoursMain.hoursOne(6);

    expect(result).toBe(1);
  });

  it("HoursOne should return 3 when given 23", function () {
    const result = hoursMain.hoursOne(23);

    expect(result).toBe(3);
  });

  it("HoursOne should return 4 when given 0", function () {
    const result = hoursMain.hoursOne(0);

    expect(result).toBe(4);
  });
});

describe("HoursFive function should return the answer", function () {
  const hoursMain = new HoursMain();

  it("HoursFive should return 0 when given 1", function () {
    const result = hoursMain.hoursFive(1);

    expect(result).toBe(0);
  });

  it("HoursFive should return 1 when given 5", function () {
    const result = hoursMain.hoursFive(5);

    expect(result).toBe(1);
  });

  it("HoursFive should return 2 when given 10", function () {
    const result = hoursMain.hoursFive(10);

    expect(result).toBe(2);
  });

  it("HoursFive should return 3 when given 15", function () {
    const result = hoursMain.hoursFive(15);

    expect(result).toBe(3);
  });

  it("HoursFive should return 4 when given 20", function () {
    const result = hoursMain.hoursFive(20);

    expect(result).toBe(4);
  });

  it("HoursFive should return 2 when given 11", function () {
    const result = hoursMain.hoursFive(11);

    expect(result).toBe(2);
  });

  it("HoursFive should return 4 when given 23", function () {
    const result = hoursMain.hoursFive(23);

    expect(result).toBe(4);
  });

  it("HoursFive should return 4 when given 0", function () {
    const result = hoursMain.hoursFive(0);

    expect(result).toBe(4);
  });
});
