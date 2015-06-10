Tinytest.add('measurement - destination', function (test) {
  var point = {
    "type": "Feature",
    "properties": {
      "marker-color": "#0f0"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-75.343, 39.984]
    }
  };
  var distance = 50;
  var bearing = 90;
  var units = 'miles';
  var result = turf.destination(point, distance, bearing, units);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": [-74.39888364912967, 39.98017006368922]
    },
    "properties": {}
  };
  test.equal(result, expected);
});