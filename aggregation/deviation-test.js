Tinytest.add('aggregation - deviation', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-97.807159, 30.270335],
            [-97.807159, 30.369913],
            [-97.612838, 30.369913],
            [-97.612838, 30.270335],
            [-97.807159, 30.270335]
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
            [-97.825698, 30.175405],
            [-97.825698, 30.264404],
            [-97.630691, 30.264404],
            [-97.630691, 30.175405],
            [-97.825698, 30.175405]
          ]
        ]
      }
    }]
  };
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "population": 500
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.709655, 30.311245]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 400
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.766647, 30.345028]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.765274, 30.294646]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 500
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.753601, 30.216355]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.667083, 30.208047]
      }
    }]
  };

  var inField = "population";
  var outField = "pop_deviation";
  var result = turf.deviation(polygons, points, inField, outField);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "pop_deviation": 81.64965809277261
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-97.807159, 30.270335],
            [-97.807159, 30.369913],
            [-97.612838, 30.369913],
            [-97.612838, 30.270335],
            [-97.807159, 30.270335]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "pop_deviation": 150
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-97.825698, 30.175405],
            [-97.825698, 30.264404],
            [-97.630691, 30.264404],
            [-97.630691, 30.175405],
            [-97.825698, 30.175405]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});