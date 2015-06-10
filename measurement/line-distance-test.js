Tinytest.add('measurement - line-distance', function (test) {
  var line = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [-77.031669, 38.878605],
        [-77.029609, 38.881946],
        [-77.020339, 38.884084],
        [-77.025661, 38.885821],
        [-77.021884, 38.889563],
        [-77.019824, 38.892368]
      ]
    }
  };
  var units = 'miles';
  var result = turf.lineDistance(line, units);
  var expected = 1.6389817168470033;
  test.equal(result, expected);
});