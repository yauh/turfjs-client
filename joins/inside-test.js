var pt1 = {
  "type": "Feature",
  "properties": {
    "marker-color": "#f00"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-111.467285, 40.75766]
  }
};
var pt2 = {
  "type": "Feature",
  "properties": {
    "marker-color": "#0f0"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [-111.873779, 40.647303]
  }
};
var poly = {
  "type": "Feature",
  "properties": {},
  "geometry": {
    "type": "Polygon",
    "coordinates": [
      [
        [-112.074279, 40.52215],
        [-112.074279, 40.853293],
        [-111.610107, 40.853293],
        [-111.610107, 40.52215],
        [-112.074279, 40.52215]
      ]
    ]
  }
};

var features = {
  "type": "FeatureCollection",
  "features": [pt1, pt2, poly]
};

Tinytest.add('joins - inside false', function (test) {

  var result = turf.inside(pt1, poly);
  var expected = false;
  test.equal(result, expected);
});

Tinytest.add('joins - inside true', function (test) {

  var result = turf.inside(pt2, poly);
  var expected = true;
  test.equal(result, expected);
});