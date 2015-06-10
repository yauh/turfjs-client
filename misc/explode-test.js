Tinytest.add('misc - explode', function (test) {
  var poly = {
    "type": "Feature",
    "properties": {},
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [177.434692, -17.77517],
          [177.402076, -17.779093],
          [177.38079, -17.803937],
          [177.40242, -17.826164],
          [177.438468, -17.824857],
          [177.454948, -17.796746],
          [177.434692, -17.77517]
        ]
      ]
    }
  };

  var result = turf.explode(poly);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.434692, -17.77517]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.402076, -17.779093]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.38079, -17.803937]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.40242, -17.826164]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.438468, -17.824857]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.454948, -17.796746]
      },
      "properties": {}
    }, {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [177.434692, -17.77517]
      },
      "properties": {}
    }]
  };
  test.equal(result, expected);
});