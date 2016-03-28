const Tile = require('../src/Tile');

describe('Tile', () => {
  let tile;

  beforeEach(() => {
    tile = new Tile();
  });

  it('can be instantiated', () => {
    expect(tile).toBeDefined();
    expect(tile).toEqual(jasmine.any(Tile));
  });

  it('contains the list of tiles', () => {
    expect(tile._tiles).toBeDefined();
    expect(tile._tiles).toEqual(jasmine.any(Array));
  });

  it('can return a specific Small World tile', () => {
    tile = new Tile('Q');
    expect(tile.regions).toBeDefined();
    expect(tile.regions.length).toEqual(3);
  });

  it('can return a specific Small World: Underground tile', () => {
    tile = new Tile('Q', 'underground');
    expect(tile.regions).toBeDefined();
    expect(tile.regions.length).toEqual(3);
  });

  it('throws an exception when asking for an unknown tile side', () => {
    function loadTileABanana() {
      tile = new Tile('A', 'banana');
    }

    expect(loadTileABanana).toThrow();
  });

  it('throws an exception when tile could not be found', () => {
    function loadTile1() {
      tile = tile.findTile('1');
    }

    expect(loadTile1).toThrow();
  });
});
