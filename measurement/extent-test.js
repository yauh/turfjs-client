Tinytest.add('measurement - extent', function (test) {
  var input = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [114.175329, 22.2524]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [114.170007, 22.267969]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [114.200649, 22.274641]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [114.186744, 22.265745]
      }
    }]
  };

  var result = turf.extent(input);
  var expected = [114.170007, 22.2524, 114.200649, 22.274641];
  test.equal(result, expected);
});