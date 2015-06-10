Tinytest.add('aggregation - variance', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-97.414398, 37.684092],
            [-97.414398, 37.731353],
            [-97.332344, 37.731353],
            [-97.332344, 37.684092],
            [-97.414398, 37.684092]
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
            [-97.333717, 37.606072],
            [-97.333717, 37.675397],
            [-97.237586, 37.675397],
            [-97.237586, 37.606072],
            [-97.333717, 37.606072]
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
        "coordinates": [-97.401351, 37.719676]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.355346, 37.706639]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.387962, 37.70012]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.301788, 37.66507]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-97.265052, 37.643325]
      }
    }]
  };
  var result = turf.variance(polygons, points, 'population', 'variance');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "variance": 46666.666666666664
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-97.414398, 37.684092],
            [-97.414398, 37.731353],
            [-97.332344, 37.731353],
            [-97.332344, 37.684092],
            [-97.414398, 37.684092]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "variance": 2500
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-97.333717, 37.606072],
            [-97.333717, 37.675397],
            [-97.237586, 37.675397],
            [-97.237586, 37.606072],
            [-97.333717, 37.606072]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});