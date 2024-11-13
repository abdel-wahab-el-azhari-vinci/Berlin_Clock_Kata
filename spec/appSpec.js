import { BerlinClock } from "../src/app.js";

describe("HoursOne function should return the answer", function () {
  const app = new BerlinClock();

  it("HoursOne should return 1 when given 1", function () {
    const result = app.hoursOne(1);

    expect(result).toBe(1);
  });

  it("HoursOne should return 2 when given 2", function () {
    const result = app.hoursOne(2);

    expect(result).toBe(2);
  });

  it("HoursOne should return 3 when given 3", function () {
    const result = app.hoursOne(3);

    expect(result).toBe(3);
  });

  it("HoursOne should return 4 when given 4", function () {
    const result = app.hoursOne(4);

    expect(result).toBe(4);
  });

  it("HoursOne should return 0 when given 5", function () {
    const result = app.hoursOne(5);

    expect(result).toBe(0);
  });

  it("HoursOne should return 1 when given 6", function () {
    const result = app.hoursOne(6);

    expect(result).toBe(1);
  });

  it("HoursOne should return 3 when given 23", function () {
    const result = app.hoursOne(23);

    expect(result).toBe(3);
  });

  it("HoursOne should return 0 when given 0", function () {
    const result = app.hoursOne(0);

    expect(result).toBe(0);
  });
});

describe("HoursFive function should return the answer", function () {
  const app = new BerlinClock();

  it("HoursFive should return 0 when given 1", function () {
    const result = app.hoursFive(1);

    expect(result).toBe(0);
  });

  it("HoursFive should return 1 when given 5", function () {
    const result = app.hoursFive(5);

    expect(result).toBe(1);
  });

  it("HoursFive should return 2 when given 10", function () {
    const result = app.hoursFive(10);

    expect(result).toBe(2);
  });

  it("HoursFive should return 3 when given 15", function () {
    const result = app.hoursFive(15);

    expect(result).toBe(3);
  });

  it("HoursFive should return 4 when given 20", function () {
    const result = app.hoursFive(20);

    expect(result).toBe(4);
  });

  it("HoursFive should return 2 when given 11", function () {
    const result = app.hoursFive(11);

    expect(result).toBe(2);
  });

  it("HoursFive should return 4 when given 23", function () {
    const result = app.hoursFive(23);

    expect(result).toBe(4);
  });

  it("HoursFive should return 0 when given 0", function () {
    const result = app.hoursFive(0);

    expect(result).toBe(0);
  });
});

describe("Minutes function should return the answer", function () {
  const app = new BerlinClock();

  it("Minutes should return 0 when given 0", function () {
    const result = app.minutesOne(0);

    expect(result).toBe(0);
  });

  it("Minutes should return 1 when given 1", function () {
    const result = app.minutesOne(1);

    expect(result).toBe(1);
  });

  it("Minutes should return 2 when given 2", function () {
    const result = app.minutesOne(2);

    expect(result).toBe(2);
  });

  it("Minutes should return 3 when given 3", function () {
    const result = app.minutesOne(3);

    expect(result).toBe(3);
  });

  it("Minutes should return 4 when given 4", function () {
    const result = app.minutesOne(4);

    expect(result).toBe(4);
  });

  it("Minutes should return 0 when given 5", function () {
    const result = app.minutesOne(5);

    expect(result).toBe(0);
  });

  it("Minutes should return 1 when given 36", function () {
    const result = app.minutesOne(36);

    expect(result).toBe(1);
  });
});

describe("MinutesFive function should return the answer", function () {
  const app = new BerlinClock();

  it("MinutesFive should return 0 when given 0", function () {
    const result = app.minutesFive(0);

    expect(result).toBe(0);
  });

  it("MinutesFive should return 1 when given 5", function () {
    const result = app.minutesFive(5);

    expect(result).toBe(1);
  });

  it("MinutesFive should return 1 when given 6", function () {
    const result = app.minutesFive(6);

    expect(result).toBe(1);
  });

  it("MinutesFive should return 2 when given 10", function () {
    const result = app.minutesFive(10);

    expect(result).toBe(2);
  });

  it("MinutesFive should return 11 when given 55", function () {
    const result = app.minutesFive(55);

    expect(result).toBe(11);
  });
});

describe("Seconds function should return the answer", function () {
  const app = new BerlinClock();

  it("Seconds should return X when given 1", function () {
    const result = app.seconds(1);

    expect(result).toBe("X");
  });

  it("Seconds should return R when given 2", function () {
    const result = app.seconds(2);

    expect(result).toBe("R");
  });

  it("Seconds should return X when given an odd number", function () {
    const result = app.seconds(3);

    expect(result).toBe("X");
  });

  it("Seconds should return R when given an even number", function () {
    const result = app.seconds(4);

    expect(result).toBe("R");
  });
});

describe("MinutesOnePrint function should return the answer", function () {
  const app = new BerlinClock();

  it("MinutesOnePrint should return YXXX when given 1", function () {
    const result = app.minutesOnePrint(1);

    expect(result).toBe("YXXX");
  });

  it("MinutesOnePrint should return YYXX when given 2", function () {
    const result = app.minutesOnePrint(2);

    expect(result).toBe("YYXX");
  });

  it("MinutesOnePrint should return YYYX when given 3", function () {
    const result = app.minutesOnePrint(3);

    expect(result).toBe("YYYX");
  });

  it("MinutesOnePrint should return YYYY when given 4", function () {
    const result = app.minutesOnePrint(4);

    expect(result).toBe("YYYY");
  });

  it("MinutesOnePrint should return XXXX when given 5", function () {
    const result = app.minutesOnePrint(5);

    expect(result).toBe("XXXX");
  });
});

describe("MinutesFivePrint function should return the answer", function () {
  const app = new BerlinClock();

  it("MinutesFivePrint should return XXXXXXXXXXX when given 1", function () {
    const result = app.minutesFivePrint(1);

    expect(result).toBe("XXXXXXXXXXX");
  });

  it("MinutesFivePrint should return YXXXXXXXXXX when given 6", function () {
    const result = app.minutesFivePrint(6);

    expect(result).toBe("YXXXXXXXXXX");
  });

  it("MinutesFivePrint should return YYXXXXXXXXX when given 11", function () {
    const result = app.minutesFivePrint(11);

    expect(result).toBe("YYXXXXXXXXX");
  });

  it("MinutesFivePrint should return YYRXXXXXXXX when given 17", function () {
    const result = app.minutesFivePrint(17);

    expect(result).toBe("YYRXXXXXXXX");
  });

  it("MinutesFivePrint should return YYRYXXXXXXX when given 21", function () {
    const result = app.minutesFivePrint(21);

    expect(result).toBe("YYRYXXXXXXX");
  });

  it("MinutesFivePrint should return YYRYYXXXXXX when given 28", function () {
    const result = app.minutesFivePrint(28);

    expect(result).toBe("YYRYYXXXXXX");
  });
  
  it("MinutesFivePrint should return YYRYYRXXXXX when given 33", function () {
    const result = app.minutesFivePrint(33);

    expect(result).toBe("YYRYYRXXXXX");
  });

  it("MinutesFivePrint should return YYRYYRYXXXX when given 35", function () {
    const result = app.minutesFivePrint(35);

    expect(result).toBe("YYRYYRYXXXX");
  });

  it("MinutesFivePrint should return YYRYYRYYXXX when given 42", function () {
    const result = app.minutesFivePrint(42);

    expect(result).toBe("YYRYYRYYXXX");
  });
  
  it("MinutesFivePrint should return YYRYYRYYRXX when given 47", function () {
    const result = app.minutesFivePrint(47);

    expect(result).toBe("YYRYYRYYRXX");
  });

  it("MinutesFivePrint should return YYRYYRYYRYX when given 50", function () {
    const result = app.minutesFivePrint(50);

    expect(result).toBe("YYRYYRYYRYX");
  });

  it("MinutesFivePrint should return YYRYYRYYRYY when given 55", function () {
    const result = app.minutesFivePrint(55);

    expect(result).toBe("YYRYYRYYRYY");
  });
  
  it("MinutesFivePrint should return YYRYYRYYRYY when given 59", function () {
    const result = app.minutesFivePrint(59);

    expect(result).toBe("YYRYYRYYRYY");
  });
});

describe("HoursOnePrint function should return the answer", function () {
  const app = new BerlinClock();

  it("HoursOnePrint should return XXXX when given 0", function () {
    const result = app.hoursOnePrint(0);

    expect(result).toBe("XXXX");
  });

  it("HoursOnePrint should return RXXX when given 1", function () {
    const result = app.hoursOnePrint(1);

    expect(result).toBe("RXXX");
  });

  it("HoursOnePrint should return RRXX when given 2", function () {
    const result = app.hoursOnePrint(2);

    expect(result).toBe("RRXX");
  });

  it("HoursOnePrint should return RRRX when given 3", function () {
    const result = app.hoursOnePrint(3);

    expect(result).toBe("RRRX");
  });

  it("HoursOnePrint should return RRRR when given 4", function () {
    const result = app.hoursOnePrint(4);

    expect(result).toBe("RRRR");
  });

  it("HoursOnePrint should return RRXX when given 17", function () {
    const result = app.hoursOnePrint(17);

    expect(result).toBe("RRXX");
  });
});

describe("HoursFivePrint function should return the answer", function () {
  const app = new BerlinClock();

  it("HoursFivePrint should return XXXX when given 0", function () {
    const result = app.hoursFivePrint(0);

    expect(result).toBe("XXXX");
  });

  it("HoursFivePrint should return RXXX when given 7", function () {
    const result = app.hoursFivePrint(7);

    expect(result).toBe("RXXX");
  });

  it("HoursFivePrint should return RRXX when given 11", function () {
    const result = app.hoursFivePrint(11);

    expect(result).toBe("RRXX");
  });

  it("HoursFivePrint should return RRRX when given 15", function () {
    const result = app.hoursFivePrint(15);

    expect(result).toBe("RRRX");
  });

  it("HoursFivePrint should return RRRR when given 22", function () {
    const result = app.hoursFivePrint(22);

    expect(result).toBe("RRRR");
  });
  
  //If all tests passes, the clock will appear in console
  console.log(app.clockPrint());
});