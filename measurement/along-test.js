Tinytest.add('measurement - along', function (test) {
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
  var result = turf.along(line, 1, 'miles');
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-77.02417351582903, 38.885335546214506]
    },
    "properties": {}
  };
  test.equal(result, expected);
});