Tinytest.add('aggregation - sum', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-87.990188, 43.026486],
            [-87.990188, 43.062115],
            [-87.913284, 43.062115],
            [-87.913284, 43.026486],
            [-87.990188, 43.026486]
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
            [-87.973709, 42.962452],
            [-87.973709, 43.014689],
            [-87.904014, 43.014689],
            [-87.904014, 42.962452],
            [-87.973709, 42.962452]
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
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.974052, 43.049321]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.957229, 43.037277]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.931137, 43.048568]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.963409, 42.99611]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-87.94178, 42.974762]
      }
    }]
  };
  var result = turf.sum(polygons, points, 'population', 'sum');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "sum": 900
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-87.990188, 43.026486],
            [-87.990188, 43.062115],
            [-87.913284, 43.062115],
            [-87.913284, 43.026486],
            [-87.990188, 43.026486]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "sum": 500
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-87.973709, 42.962452],
            [-87.973709, 43.014689],
            [-87.904014, 43.014689],
            [-87.904014, 42.962452],
            [-87.973709, 42.962452]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});