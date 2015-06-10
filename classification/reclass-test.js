Tinytest.add('classification - reclass', function (test) {
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.170547, 32.888669]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.182048, 32.889533]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.17398, 32.882182]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.174324, 32.895011]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.185825, 32.884344]
      }
    }]
  };
  // 0 to 200 will map to "small", 200 to 400 will map to "medium", 400 to 600 will map to "large"
  var translations = [
    [0, 200, "small"],
    [200, 400, "medium"],
    [400, 600, "large"]
  ];

  var result = turf.reclass(
    points, 'population', 'size', translations);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "population": 200,
        "size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.170547, 32.888669]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600,
        "size": "large"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.182048, 32.889533]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100,
        "size": "small"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.17398, 32.882182]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200,
        "size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.174324, 32.895011]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300,
        "size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13.185825, 32.884344]
      }
    }]
  };
  test.equal(result, expected);
});