Tinytest.add('transformation - convex', function (test) {
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [10.195312, 43.755225]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [10.404052, 43.8424511]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [10.579833, 43.659924]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [10.360107, 43.516688]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [10.14038, 43.588348]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [10.195312, 43.755225]
      }
    }]
  };

  var result = turf.convex(points);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [10.360107, 43.516688],
          [10.14038, 43.588348],
          [10.195312, 43.755225],
          [10.404052, 43.8424511],
          [10.579833, 43.659924],
          [10.360107, 43.516688]
        ]
      ]
    },
    "properties": {}
  };
  test.equal(result, expected);
});