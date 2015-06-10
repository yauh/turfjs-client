Tinytest.add('aggregation - count', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-112.072391, 46.586591],
            [-112.072391, 46.61761],
            [-112.028102, 46.61761],
            [-112.028102, 46.586591],
            [-112.072391, 46.586591]
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
            [-112.023983, 46.570426],
            [-112.023983, 46.615016],
            [-111.966133, 46.615016],
            [-111.966133, 46.570426],
            [-112.023983, 46.570426]
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
        "coordinates": [-112.0372, 46.608058]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-112.045955, 46.596264]
      }
    }]
  };

  var result = turf.count(polygons, points, 'pt_count');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "pt_count": 2
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-112.072391, 46.586591],
            [-112.072391, 46.61761],
            [-112.028102, 46.61761],
            [-112.028102, 46.586591],
            [-112.072391, 46.586591]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "pt_count": 0
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-112.023983, 46.570426],
            [-112.023983, 46.615016],
            [-111.966133, 46.615016],
            [-111.966133, 46.570426],
            [-112.023983, 46.570426]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});