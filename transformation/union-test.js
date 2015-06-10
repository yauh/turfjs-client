Tinytest.add('transformation - union', function (test) {
  var poly1 = {
    "type": "Feature",
    "properties": {
      "fill": "#0f0"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-82.574787, 35.594087],
          [-82.574787, 35.615581],
          [-82.545261, 35.615581],
          [-82.545261, 35.594087],
          [-82.574787, 35.594087]
        ]
      ]
    }
  };
  var poly2 = {
    "type": "Feature",
    "properties": {
      "fill": "#00f"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-82.560024, 35.585153],
          [-82.560024, 35.602602],
          [-82.52964, 35.602602],
          [-82.52964, 35.585153],
          [-82.560024, 35.585153]
        ]
      ]
    }
  };
  var result = turf.union(poly1, poly2);
  var expected = {
    "type": "Feature",
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-82.574787, 35.594087],
          [-82.574787, 35.615581],
          [-82.545261, 35.615581],
          [-82.545261, 35.602602],
          [-82.52964, 35.602602],
          [-82.52964, 35.585153],
          [-82.560024, 35.585153],
          [-82.560024, 35.594087],
          [-82.574787, 35.594087]
        ]
      ]
    },
    "properties": {
      "fill": "#0f0"
    }
  };
  test.equal(result, expected);
});