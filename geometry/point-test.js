Tinytest.add('geometry - point', function (test) {
  var point = [5, 10];
  var properties = {
    'name': 'A point'
  };
  var result = turf.point(point, properties);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [5, 10]
    },
    "properties": {
      "name": "A point"
    }
  };
  test.equal(result, expected);
});