'use strict';

const osm = require('./osm.json');

/**
 * Converts an alpha-3 iso 3166-1 code to its corrispective relation id on OSM.
 * @public
 * @param  {string} code Alpha-3 iso 3166-1 country code.
 * @return {string} OSM relation id of the given country.
 */
function get(code) {
  if (!Object.prototype.hasOwnProperty.call(osm, code)) {
    throw new TypeError('The alpha-3 code provided was not found: ' + code);
  }
  return osm[code];
}

/**
 * Returns a map from alpha-3 iso 3166-1 codes to theyr corrispective relation
 * ids on OSM.
 * @public
 * @return {object} Map of all OSM relation ids.
 */
function map() {
  return osm;
}

module.exports = {
  get,
  map
};
