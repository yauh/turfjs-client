Tinytest.add('aggregation - median', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [18.400039, -33.970697],
            [18.400039, -33.818518],
            [18.665771, -33.818518],
            [18.665771, -33.970697],
            [18.400039, -33.970697]
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
            [18.538742, -34.050383],
            [18.538742, -33.98721],
            [18.703536, -33.98721],
            [18.703536, -34.050383],
            [18.538742, -34.050383]
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
        "coordinates": [18.514022, -33.860152]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [18.48999, -33.926269]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [18.583374, -33.905755]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [18.591613, -34.024778]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [18.653411, -34.017949]
      }
    }]
  };

  var result = turf.median(polygons, points, 'population', 'median');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "median": 200
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [18.400039, -33.970697],
            [18.400039, -33.818518],
            [18.665771, -33.818518],
            [18.665771, -33.970697],
            [18.400039, -33.970697]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "median": 250
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [18.538742, -34.050383],
            [18.538742, -33.98721],
            [18.703536, -33.98721],
            [18.703536, -34.050383],
            [18.538742, -34.050383]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});