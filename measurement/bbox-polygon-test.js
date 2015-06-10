Tinytest.add('measurement - bbox-polygon', function (test) {
  var bbox = [0, 0, 10, 10];
  var result = turf.bboxPolygon(bbox);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [0, 0],
          [10, 0],
          [10, 10],
          [0, 10],
          [0, 0]
        ]
      ]
    },
    "properties": {}
  };
  test.equal(result, expected);
});