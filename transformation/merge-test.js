Tinytest.add('transformation - merge', function (test) {
  var polygons = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "fill": "#0f0"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [9.994812, 53.549487],
            [10.046997, 53.598209],
            [10.117721, 53.531737],
            [9.994812, 53.549487]
          ]
        ]
      }
    }, {
      "type": "Feature",
      "properties": {
        "fill": "#00f"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [10.000991, 53.50418],
            [10.03807, 53.562539],
            [9.926834, 53.551731],
            [10.000991, 53.50418]
          ]
        ]
      }
    }]
  };

  var result = turf.merge(polygons);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [10.005390809136088, 53.55936379867258],
          [10.046997, 53.598209],
          [10.117721, 53.531737],
          [10.026838636912657, 53.54486184801601],
          [10.000991, 53.50418],
          [9.926834, 53.551731],
          [10.005390809136088, 53.55936379867258]
        ]
      ]
    },
    "properties": {
      "fill": "#0f0"
    }
  };
  test.equal(result, expected);
});