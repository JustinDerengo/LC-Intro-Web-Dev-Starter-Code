// launchcode.spec.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  it("the key organization is 'nonprofit", function() {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  it("the key executiveDirector is 'Jeff'", function() {
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });

  it("the key percentageCoolEmployees is 100", function() {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  it("the key programsOffered has values 'LC101', 'LC202', 'LC303', and that the length of the array is 3", function() {
    expect(launchcode.programsOffered[0]).toEqual("LC101");
    expect(launchcode.programsOffered[1]).toEqual("LC202");
    expect(launchcode.programsOffered[2]).toEqual("LC303");
    expect(launchcode.programsOffered.length).toEqual(3);
  });

  it("returns 'Launch!' when passed a number ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });

  it("returns 'Code!' when passed a number ONLY divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toEqual("Code!");
  });

  it("returns 'Rocks!' when passed a number ONLY divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  });

  it("returns 'LaunchCode!' when passed a number divisibly by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  });

  it("returns 'Code Rocks!' when passed a number divisible by 3 AND 5", function() {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });

  it("returns 'Launch Rocks!' when passed a number divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!");
  });

  it("returns 'LaunchCode Rocks' when passed a number divisible by 2,3, AND 5", function() {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });

  it("returns 'Rutabagas! That doesn't work.", function() {
    expect(launchcode.launchOutput(49)).toEqual("Rutabagas! That doesn't work.");
  });

});
