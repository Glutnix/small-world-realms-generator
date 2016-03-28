function Tile(tileName, tileSide) {
  if (tileName && tileName.length === 1) {
    this.loadTile(tileName, tileSide);
  }
}

Tile.prototype._tiles = require('./TileData');

Tile.prototype.loadTile = function loadTile(tileName, tileSide = 'smallworld') {
  this.name = tileName;

  const tile = this.findTile(tileName);

  if (! tile[tileSide]) {
    throw new Error(`Tile does not have a side named ${tileSide}.`);
  }

  this.regions = tile[tileSide];
  this.side = tileSide;
};

Tile.prototype.findTile = function findTile(tileName) {
  const tile = this._tiles.find((value) => value.name === tileName);

  if (! tile) {
    throw new Error(`Tile ${tileName} not found.`);
  }

  return tile;
};

module.exports = Tile;
