describe("Tile", function () {
  var Tile = require('../src/Tile');
  var tile;

  beforeEach(function() {
    tile = new Tile();
  });

  it("can be instantiated", function() {
    expect(tile).toBeDefined();
    expect(tile).toEqual(jasmine.any(Tile));
  });

  it("contains the list of tiles", function() {
    expect(tile._tiles).toBeDefined();
    expect(tile._tiles).toEqual(jasmine.any(Array));
  });

  it("can return a specific Small World tile", function() {
    tile = new Tile("Q");
    expect(tile.regions).toBeDefined();
    expect(tile.regions.length).toEqual(3);
  });

  it("can return a specific Small World: Underground tile", function() {
    tile = new Tile("Q", "underground");
    expect(tile.regions).toBeDefined();
    expect(tile.regions.length).toEqual(3);
  });

  it("throws an exception when asking for an unknown tile side", function() {
    function loadTileABanana() {
      var tile = new Tile("A", "banana");
    }
    expect(loadTileABanana).toThrow();
  });

  it("throws an exception when tile could not be found", function() {
    function loadTile1() {
      var tile = tile.findTile("1");
    }
    expect(loadTile1).toThrow();
  });

});
