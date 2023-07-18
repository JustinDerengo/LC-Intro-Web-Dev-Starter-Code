const checkFive = require('../checkFive.js');


describe("checkFive", function() {
    it("returns 'num is less than 5' when num < 5", function() {
        let result = checkFive(2);
        expect(result).toEqual("2 is less than 5.");
    });
})