import { SecondsMain } from "../src/seconds.js";

describe("Seconds function should return the answer", function() {
    const secondsMain = new SecondsMain();
    
    it("Seconds should return éteint when given 1", function() {
        const result = secondsMain.seconds(1);
        
        expect(result).toBe("Light off");
    });
});