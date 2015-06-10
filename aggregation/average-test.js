Tinytest.add('aggregation - average', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [10.666351, 59.890659],
            [10.666351, 59.936784],
            [10.762481, 59.936784],
            [10.762481, 59.890659],
            [10.666351, 59.890659]
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
            [10.764541, 59.889281],
            [10.764541, 59.937128],
            [10.866165, 59.937128],
            [10.866165, 59.889281],
            [10.764541, 59.889281]
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
        "coordinates": [10.724029, 59.926807]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [10.715789, 59.904778]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [10.746002, 59.908566]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [10.806427, 59.908910]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [10.79544, 59.931624]
      }
    }]
  };

  var result = turf.average(polygons, points, 'population', 'pop_avg');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "pop_avg": 300
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [10.666351, 59.890659],
            [10.666351, 59.936784],
            [10.762481, 59.936784],
            [10.762481, 59.890659],
            [10.666351, 59.890659]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "pop_avg": 250
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [10.764541, 59.889281],
            [10.764541, 59.937128],
            [10.866165, 59.937128],
            [10.866165, 59.889281],
            [10.764541, 59.889281]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});