const Randomizer = require('../src/Randomizer');

describe('Randomizer', () => {
  let randomizer;

  beforeEach(() => {
    randomizer = new Randomizer();
  });

  it('can be instantiated', () => {
    expect(randomizer).toBeDefined();
    expect(randomizer).toEqual(jasmine.any(Randomizer));
  });
});
