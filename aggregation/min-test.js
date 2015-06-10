Tinytest.add('aggregation - min', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.809658, 18.961818],
            [72.809658, 18.974805],
            [72.827167, 18.974805],
            [72.827167, 18.961818],
            [72.809658, 18.961818]
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
            [72.820987, 18.947043],
            [72.820987, 18.95922],
            [72.841243, 18.95922],
            [72.841243, 18.947043],
            [72.820987, 18.947043]
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
        "coordinates": [72.814464, 18.971396]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [72.820043, 18.969772]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [72.817296, 18.964253]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [72.83575, 18.954837]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [72.828197, 18.95094]
      }
    }]
  };
  var result = turf.min(polygons, points, 'population', 'min');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "min": 100
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.809658, 18.961818],
            [72.809658, 18.974805],
            [72.827167, 18.974805],
            [72.827167, 18.961818],
            [72.809658, 18.961818]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "min": 200
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [72.820987, 18.947043],
            [72.820987, 18.95922],
            [72.841243, 18.95922],
            [72.841243, 18.947043],
            [72.820987, 18.947043]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});