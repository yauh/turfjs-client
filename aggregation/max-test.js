Tinytest.add('aggregation - max', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [101.551437, 3.150114],
            [101.551437, 3.250208],
            [101.742324, 3.250208],
            [101.742324, 3.150114],
            [101.551437, 3.150114]
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
            [101.659927, 3.011612],
            [101.659927, 3.143944],
            [101.913986, 3.143944],
            [101.913986, 3.011612],
            [101.659927, 3.011612]
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
        "coordinates": [101.56105, 3.213874]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 600
      },
      "geometry": {
        "type": "Point",
        "coordinates": [101.709365, 3.211817]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 100
      },
      "geometry": {
        "type": "Point",
        "coordinates": [101.645507, 3.169311]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 200
      },
      "geometry": {
        "type": "Point",
        "coordinates": [101.708679, 3.071266]
      }
    }, {
      "type": "Feature",
      "properties": {
        "population": 300
      },
      "geometry": {
        "type": "Point",
        "coordinates": [101.826782, 3.081551]
      }
    }]
  };

  var result = turf.max(polygons, points, 'population', 'max');
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "max": 600
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [101.551437, 3.150114],
            [101.551437, 3.250208],
            [101.742324, 3.250208],
            [101.742324, 3.150114],
            [101.551437, 3.150114]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "max": 300
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [101.659927, 3.011612],
            [101.659927, 3.143944],
            [101.913986, 3.143944],
            [101.913986, 3.011612],
            [101.659927, 3.011612]
          ]
        ]
      }
    }]
  };
  test.equal(result, expected);
});