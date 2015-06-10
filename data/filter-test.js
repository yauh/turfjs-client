Tinytest.add('data - filter', function (test) {
  var features = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "species": "oak"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.581777, 44.260875]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "birch"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.570018, 44.260691]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "oak"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.576284, 44.257925]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "redwood"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.56916, 44.254605]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "maple"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.581691, 44.24858]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "oak"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.583837, 44.255773]
      }
    }]
  };

  var key = "species";
  var value = "oak";
  var result = turf.filter(features, key, value);
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "species": "oak"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.581777, 44.260875]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "oak"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.576284, 44.257925]
      }
    }, {
      "type": "Feature",
      "properties": {
        "species": "oak"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-72.583837, 44.255773]
      }
    }]
  };
  test.equal(result, expected);
});