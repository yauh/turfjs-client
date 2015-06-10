Tinytest.add('measurement - square', function (test) {
  var bbox = [-20, -20, -15, 0];
  var result = turf.square(bbox);
  var expected = [-27.5, -20, -7.5, 0];
  test.equal(result, expected);
});