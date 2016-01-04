function Tile(tileName, tileSide) {
  if (tileName && tileName.length === 1) {
    this.loadTile(tileName, tileSide);
  }
}

Tile.prototype._tiles = require("./TileData");

Tile.prototype.loadTile = function(tileName, tileSide) {
  var tile;
  tileSide = tileSide || "smallworld";

  this.name = tileName;

  tile = this.findTile(tileName);

  if ( ! tile[tileSide]) {
    throw new Error("Tile does not have a side named '" + tileSide + "'.");
  }

  this.regions = tile[tileSide];
  this.side = tileSide;

}

Tile.prototype.findTile = function(tileName) {
  var tile;

  this._tiles.some(function(value, index){
    if (value.name === tileName) {
      tile = value;
      return true;
    }
  });

  if ( ! tile) {
    throw new Error("Tile '" + tileName + "' not found.");
  }

  return tile;
}


module.exports = Tile;
