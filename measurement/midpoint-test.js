Tinytest.add('measurement - midpoint', function (test) {
  var pt1 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [144.834823, -37.771257]
    }
  };
  var pt2 = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [145.14244, -37.830937]
    }
  };

  var result = turf.midpoint(pt1, pt2);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [144.9886315, -37.801097]
    },
    "properties": {}
  };
  test.equal(result, expected);
});