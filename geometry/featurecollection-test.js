Tinytest.add('geometry - featurecollection', function (test) {
  var features = [{
    "type": "Feature 1",
    "geometry": {
      "type": "Point",
      "coordinates": [5, 10]
    },
    "properties": {
      "name": "A point"
    }
  }, {
    "type": "Feature 2",
    "geometry": {
      "type": "Point",
      "coordinates": [10, 5]
    },
    "properties": {
      "name": "Another point"
    }
  }];
  var result = turf.featurecollection(features);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature 1",
      "geometry": {
        "type": "Point",
        "coordinates": [5, 10]
      },
      "properties": {
        "name": "A point"
      }
    }, {
      "type": "Feature 2",
      "geometry": {
        "type": "Point",
        "coordinates": [10, 5]
      },
      "properties": {
        "name": "Another point"
      }
    }]
  };
  test.equal(result, expected);
});