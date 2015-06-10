Tinytest.add('measurement - size', function (test) {
  var bbox = [0, 0, 10, 10]
  var size = 2;
  var result = turf.size(bbox, size);
  var expected = [-5, -5, 15, 15];
  test.equal(result, expected);
});