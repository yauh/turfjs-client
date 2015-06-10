Tinytest.add('geometry - linestring', function (test) {
  var coordinates = [
    [-21.964416, 64.148203],
    [-21.956176, 64.141316],
    [-21.93901, 64.135924],
    [-21.927337, 64.136673]
  ];
  var properties = {
    name: 'a linestring',
    distance: 123
  };
  var result = turf.linestring(coordinates, properties);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [-21.964416, 64.148203],
        [-21.956176, 64.141316],
        [-21.93901, 64.135924],
        [-21.927337, 64.136673]
      ]
    },
    "properties": {
      "name": "a linestring",
      "distance": 123
    }
  };
  test.equal(result, expected);
});