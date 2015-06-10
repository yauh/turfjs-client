Tinytest.add('measurement - envelope', function (test) {
  var fc = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "name": "Location A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.343, 39.984]
      }
    }, {
      "type": "Feature",
      "properties": {
        "name": "Location B"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.833, 39.284]
      }
    }, {
      "type": "Feature",
      "properties": {
        "name": "Location C"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-75.534, 39.123]
      }
    }]
  };
  var result = turf.envelope(fc);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-75.833, 39.123],
          [-75.343, 39.123],
          [-75.343, 39.984],
          [-75.833, 39.984],
          [-75.833, 39.123]
        ]
      ]
    },
    "properties": {}
  };
  test.equal(result, expected);
});