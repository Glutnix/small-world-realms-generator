describe("Randomizer", function () {
  var Randomizer = require('../src/Randomizer');
  var randomizer;

  beforeEach(function() {
    randomizer = new Randomizer();
  });

  it("can be instantiated", function() {
    expect(randomizer).toBeDefined();
    expect(randomizer).toEqual(jasmine.any(Randomizer));
  });
});
