Tinytest.add('transformation - erase', function (test) {
  var poly1 = {
    "type": "Feature",
    "properties": {
      "fill": "#0f0"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-46.738586, -23.596711],
          [-46.738586, -23.458207],
          [-46.560058, -23.458207],
          [-46.560058, -23.596711],
          [-46.738586, -23.596711]
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
          [-46.650009, -23.631314],
          [-46.650009, -23.5237],
          [-46.509246, -23.5237],
          [-46.509246, -23.631314],
          [-46.650009, -23.631314]
        ]
      ]
    }
  };
  var result = turf.erase(poly1, poly2);
  var expected = {
    "type": "Feature",
    "properties": {
      "fill": "#0f0"
    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [
        [
          [-46.738586, -23.596711],
          [-46.738586, -23.458207],
          [-46.560058, -23.458207],
          [-46.560058, -23.5237],
          [-46.650009, -23.5237],
          [-46.650009, -23.596711],
          [-46.738586, -23.596711]
        ]
      ]
    }
  };
  test.equal(result, expected);
});