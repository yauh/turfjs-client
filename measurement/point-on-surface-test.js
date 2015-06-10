Tinytest.add('measurement - point-on-surface', function (test) {
  var polygon = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-2.275543, 53.464547],
          [-2.275543, 53.489271],
          [-2.215118, 53.489271],
          [-2.215118, 53.464547],
          [-2.275543, 53.464547]
        ]
      ]
    },
    "properties": {
      "name": "A polygon"
    }
  };
  var result = turf.pointOnSurface(polygon);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-2.2453304999999997, 53.476909000000006]
    },
    "properties": {}
  };
  test.equal(result, expected);
});