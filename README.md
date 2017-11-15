# osm-countries
[![Travis CI](https://travis-ci.org/simonepri/osm-countries.svg?branch=master)](https://travis-ci.org/simonepri/osm-countries) [![Codecov](https://img.shields.io/codecov/c/github/simonepri/osm-countries/master.svg)](https://codecov.io/gh/simonepri/osm-countries) [![npm](https://img.shields.io/npm/dm/osm-countries.svg)](https://www.npmjs.com/package/osm-countries) [![npm version](https://img.shields.io/npm/v/osm-countries.svg)](https://www.npmjs.com/package/osm-countries) [![npm dependencies](https://david-dm.org/simonepri/osm-countries.svg)](https://david-dm.org/simonepri/osm-countries) [![npm dev dependencies](https://david-dm.org/simonepri/osm-countries/dev-status.svg)](https://david-dm.org/simonepri/osm-countries#info=devDependencies)

> 🎫 Get the OSM relation id from a country code.

## Install

```
$ npm install --save osm-countries
```

## Usage

```js
const osmCountries = require('osm-countries');

osmCountries.get('ITA');
// => 365331

osmCountries.get('USA');
// => 148838
```

## API

<a name="get"></a>

## get(code) ⇒ <code>string</code>
Converts an alpha-3 iso 3166-1 code to its corrispective relation id on OSM.

**Kind**: global function  
**Returns**: <code>string</code> - OSM relation id of the given country.  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| code | <code>string</code> | Alpha-3 iso 3166-1 country code. |

<a name="map"></a>

## map() ⇒ <code>object</code>
Returns a map from alpha-3 iso 3166-1 codes to theyr corrispective relation
ids on OSM.

**Kind**: global function  
**Returns**: <code>object</code> - Map of all OSM relation ids.  
**Access**: public  

## Authors
* **Simone Primarosa** - [simonepri](https://github.com/simonepri)

See also the list of [contributors](https://github.com/simonepri/osm-countries/contributors) who participated in this project.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
