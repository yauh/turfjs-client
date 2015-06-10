Tinytest.add('interpolation - planepoint', function (test) {
  var point = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [-75.3221, 39.529]
    }
  };
  var point = turf.point([-75.3221, 39.529]);
  // triangle is a polygon with "a", "b",
  // and "c" values representing
  // the values of the coordinates in order.
  var triangle = {
    "type": "Feature",
    "properties": {
      "a": 11,
      "b": 122,
      "c": 44
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-75.1221, 39.57],
          [-75.58, 39.18],
          [-75.97, 39.86],
          [-75.1221, 39.57]
        ]
      ]
    }
  };

  var features = {
    "type": "FeatureCollection",
    "features": [triangle, point]
  };
  var result = turf.planepoint(point, triangle);
  var expected = 37.43364475092331;
  test.equal(result, expected);
});