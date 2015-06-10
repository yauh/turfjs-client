Tinytest.add('geometry - polygon', function (test) {
  var rings = [
    [
      [-2.275543, 53.464547],
      [-2.275543, 53.489271],
      [-2.215118, 53.489271],
      [-2.215118, 53.464547],
      [-2.275543, 53.464547]
    ]
  ];
  var properties = {
    'name': 'A polygon'
  };
  var result = turf.polygon(rings, properties);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-2.275543, 53.464547],
          [-2.275543, 53.489271],
          [-2.215118, 53.489271],
          [-2.215118, 53.464547],
          [-2.275543, 53.464547]
        ]
      ]
    },
    "properties": {
      "name": "A polygon"
    }
  };
  test.equal(result, expected);
});