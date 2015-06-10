Tinytest.add('misc - flip', function (test) {
  var input = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [20.566406, 43.421008]
    }
  };
  var result = turf.flip(input);
  var expected = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [43.421008, 20.566406]
    }
  };
  test.equal(result, expected);
});