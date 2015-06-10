Package.describe({
  name: 'yauh:turfjs-client',
  version: '0.2.0-beta1',
  // Brief, one-line summary of the package.
  summary: 'turf.js library for geospatial operations (analyze, aggregate, and transform GeoJSON data)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yauh/turfjs-client',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});


Package.onUse(function (api) {
  api.versionsFrom('1.0.4.1');

  api.addFiles([
      'turf.min.js'
    ],
    'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('yauh:turfjs-client');
  api.addFiles([
    'aggregation/aggregate-test.js',
    'aggregation/average-test.js',
    'aggregation/count-test.js',
    'aggregation/deviation-test.js',
    'aggregation/max-test.js',
    'aggregation/median-test.js',
    'aggregation/min-test.js',
    'aggregation/sum-test.js',
    'aggregation/variance-test.js',

    'classification/jenks-test.js',
    'classification/quantile-test.js',
    'classification/reclass-test.js',

    'data/filter-test.js',
    'data/remove-test.js',
    'data/sample-test.js',

    'geometry/featurecollection-test.js',
    'geometry/linestring-test.js',
    'geometry/point-test.js',
    'geometry/polygon-test.js',

    'interpolation/isobands-test.js',
    'interpolation/isolines-test.js',
    'interpolation/planepoint-test.js',
    'interpolation/tin-test.js',

    'grids/hex-grid-test.js',
    'grids/point-grid-test.js',
    'grids/square-grid-test.js',
    'grids/triangle-grid-test.js',

    'joins/inside-test.js',
    'joins/tag-test.js',
    'joins/within-test.js',

    'measurement/along-test.js',
    'measurement/area-test.js',
    'measurement/bbox-polygon-test.js',
    'measurement/bearing-test.js',
    'measurement/center-test.js',
    'measurement/centroid-test.js',
    'measurement/destination-test.js',
    'measurement/distance-test.js',
    'measurement/envelope-test.js',
    'measurement/extent-test.js',
    'measurement/line-distance-test.js',
    'measurement/midpoint-test.js',
    'measurement/nearest-test.js',
    'measurement/point-on-surface-test.js',
    'measurement/size-test.js',
    'measurement/square-test.js',

    'misc/combine-test.js',
    'misc/explode-test.js',
    'misc/flip-test.js',
    'misc/kinks-test.js',

    'transformation/bezier-test.js',
    'transformation/buffer-test.js',
    'transformation/concave-test.js',
    'transformation/convex-test.js',
    'transformation/erase-test.js',
    'transformation/intersect-test.js',
    'transformation/merge-test.js',
    'transformation/simplify-test.js',
    'transformation/union-test.js'
  ], 'client');

});
