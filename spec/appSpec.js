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
    
  });
