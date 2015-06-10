Tinytest.add('misc - kinks', function (test) {
  var poly = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-12.034835, 8.901183],
          [-12.060413, 8.899826],
          [-12.03638, 8.873199],
          [-12.059383, 8.871418],
          [-12.034835, 8.901183]
        ]
      ]
    }
  };

  var result = turf.kinks(poly);
  var expected = {
    "intersections": {
      "type": "FeatureCollection",
      "features": [{
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-12.047632373646445, 8.885665897727455]
        },
        "properties": {}
      }, {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [-12.047632373646445, 8.885665897727455]
        },
        "properties": {}
      }]
    },
    "fixed": null
  };
  test.equal(result, expected);
});