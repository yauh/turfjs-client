Tinytest.add('measurement - centroid', function (test) {
  var poly = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [105.818939, 21.004714],
          [105.818939, 21.061754],
          [105.890007, 21.061754],
          [105.890007, 21.004714],
          [105.818939, 21.004714]
        ]
      ]
    }
  };
  var result = turf.centroid(poly);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [105.85447299999998, 21.033234]
    },
    "properties": {}
  };
  test.equal(result, expected);
});