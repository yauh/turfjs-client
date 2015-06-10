Tinytest.add('measurement - bearing', function (test) {
  var point1 = {
    "type": "Feature",
    "properties": {
      "marker-color": '#f00'
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-75.343, 39.984]
    }
  };
  var point2 = {
    "type": "Feature",
    "properties": {
      "marker-color": '#0f0'
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-75.534, 39.123]
    }
  };
  var result = turf.bearing(point1, point2);
  var expected = -170.2330491349224;
  test.equal(result, expected);
});