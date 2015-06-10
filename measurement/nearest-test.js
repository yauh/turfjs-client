Tinytest.add('measurement - nearest', function (test) {
  var point = {
    "type": "Feature",
    "properties": {
      "marker-color": "#0f0"
    },
    "geometry": {
      "type": "Point",
      "coordinates": [28.965797, 41.010086]
    }
  };
  var against = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [28.973865, 41.011122]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [28.948459, 41.024204]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [28.938674, 41.013324]
      }
    }]
  };
  var result = turf.nearest(point, against);
  var expected = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Point",
      "coordinates": [28.973865, 41.011122]
    }
  };
  test.equal(result, expected);
});