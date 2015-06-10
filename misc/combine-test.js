Tinytest.add('misc - combine', function (test) {
  var fc = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [19.026432, 47.49134]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [19.074497, 47.509548]
      }
    }]
  };
  var result = turf.combine(fc);
  var expected = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "MultiPoint",
      "coordinates": [
        [19.026432, 47.49134],
        [19.074497, 47.509548]
      ]
    }
  };
  test.equal(result, expected);
});