Tinytest.add('measurement - distance', function (test) {
  var point1 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [-75.343, 39.984]
    }
  };
  var point2 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [-75.534, 39.123]
    }
  };
  var units = "miles";

  var points = {
    "type": "FeatureCollection",
    "features": [point1, point2]
  };
  var result = turf.distance(point1, point2, units);
  var expected = 60.37218405837491;
  test.equal(result, expected);
});