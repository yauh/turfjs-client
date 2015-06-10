Tinytest.add('classification - quantile', function (test) {
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "population": 5
      },
      "geometry": {
        "type": "Point",
        "coordinates": [5, 5]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 40
      },
      "geometry": {
        "type": "Point",
        "coordinates": [1, 3]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 80
      },
      "geometry": {
        "type": "Point",
        "coordinates": [14, 2]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 90
      },
      "geometry": {
        "type": "Point",
        "coordinates": [13, 1]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [19, 7]
      }
    }]
  };

  var result = turf.quantile(
    points, 'population', [25, 50, 75, 99]);
  var expected = [40, 80, 90, 100];
  test.equal(result, expected);
});