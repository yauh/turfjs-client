Tinytest.add('aggregation - aggregate', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [1.669921, 48.632908],
            [1.669921, 49.382372],
            [3.636474, 49.382372],
            [3.636474, 48.632908],
            [1.669921, 48.632908]
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
            [2.230224, 47.85003],
            [2.230224, 48.611121],
            [4.361572, 48.611121],
            [4.361572, 47.85003],
            [2.230224, 47.85003]
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
        "coordinates": [2.054443, 49.138596]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [3.065185, 48.850258]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [2.329101, 48.79239]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [2.614746, 48.334343]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [3.416748, 48.056053]
      }
    }]
  };
  var aggregations = [{
    aggregation: 'sum',
    inField: 'population',
    outField: 'pop_sum'
  }, {
    aggregation: 'average',
    inField: 'population',
    outField: 'pop_avg'
  }, {
    aggregation: 'median',
    inField: 'population',
    outField: 'pop_median'
  }, {
    aggregation: 'min',
    inField: 'population',
    outField: 'pop_min'
  }, {
    aggregation: 'max',
    inField: 'population',
    outField: 'pop_max'
  }, {
    aggregation: 'deviation',
    inField: 'population',
    outField: 'pop_deviation'
  }, {
    aggregation: 'variance',
    inField: 'population',
    outField: 'pop_variance'
  }, {
    aggregation: 'count',
    inField: '',
    outField: 'point_count'
  }];
  var result = turf.aggregate(
    polygons, points, aggregations);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "pop_sum": 900,
        "pop_avg": 300,
        "pop_median": 200,
        "pop_min": 100,
        "pop_max": 600,
        "pop_deviation": 216.02468994692867,
        "pop_variance": 46666.666666666664,
        "point_count": 3
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [1.669921, 48.632908],
            [1.669921, 49.382372],
            [3.636474, 49.382372],
            [3.636474, 48.632908],
            [1.669921, 48.632908]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "pop_sum": 500,
        "pop_avg": 250,
        "pop_median": 250,
        "pop_min": 200,
        "pop_max": 300,
        "pop_deviation": 50,
        "pop_variance": 2500,
        "point_count": 2
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [2.230224, 47.85003],
            [2.230224, 48.611121],
            [4.361572, 48.611121],
            [4.361572, 47.85003],
            [2.230224, 47.85003]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});