Tinytest.add('data - remove', function (test) {
  var points = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        'marker-color': '#00f'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.235004, 5.551918]
      }
    }, {
      "type": "Feature",
      "properties": {
        'marker-color': '#f00'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.209598, 5.56439]
      }
    }, {
      "type": "Feature",
      "properties": {
        'marker-color': '#00f'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.197753, 5.556018]
      }
    }, {
      "type": "Feature",
      "properties": {
        'marker-color': '#000'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.217323, 5.549526]
      }
    }, {
      "type": "Feature",
      "properties": {
        'marker-color': '#0f0'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.211315, 5.543887]
      }
    }, {
      "type": "Feature",
      "properties": {
        'marker-color': '#00f'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.202217, 5.547134]
      }
    }, {
      "type": "Feature",
      "properties": {
        'marker-color': '#0f0'
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.231227, 5.56644]
      }
    }]
  };
  var result = turf.remove(points, 'marker-color', '#00f');;
  var expected = {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      "properties": {
        "marker-color": "#f00"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.209598, 5.56439]
      }
    }, {
      "type": "Feature",
      "properties": {
        "marker-color": "#000"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.217323, 5.549526]
      }
    }, {
      "type": "Feature",
      "properties": {
        "marker-color": "#0f0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.211315, 5.543887]
      }
    }, {
      "type": "Feature",
      "properties": {
        "marker-color": "#0f0"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-0.231227, 5.56644]
      }
    }]
  };
  test.equal(result, expected);
});