Tinytest.add('measurement - area', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-67.031021, 10.458102],
            [-67.031021, 10.53372],
            [-66.929397, 10.53372],
            [-66.929397, 10.458102],
            [-67.031021, 10.458102]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-66.919784, 10.397325],
            [-66.919784, 10.513467],
            [-66.805114, 10.513467],
            [-66.805114, 10.397325],
            [-66.919784, 10.397325]
          ]
        ]
      }
    }]
  };

  var result = turf.area(polygons);
  var expected = 255931320.77119994;
  test.equal(result, expected);
});