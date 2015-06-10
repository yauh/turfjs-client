Tinytest.add('joins - within', function (test) {
  var searchWithin = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [-46.653, -23.543],
            [-46.634, -23.5346],
            [-46.613, -23.543],
            [-46.614, -23.559],
            [-46.631, -23.567],
            [-46.653, -23.560],
            [-46.653, -23.543]
          ]
        ]
      }
    }]
  };
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.6318, -23.5523]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.6246, -23.5325]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.6062, -23.5513]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.663, -23.554]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.643, -23.557]
      }
    }]
  };

  var result = turf.within(points, searchWithin);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.6318, -23.5523]
      }
    }, {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Point",
        "coordinates": [-46.643, -23.557]
      }
    }]
  };
  test.equal(result, expected);
});