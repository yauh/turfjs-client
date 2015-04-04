Package.describe({
  name: 'yauh:turfjs-client',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Turf.js library for geospatial operations (analyze, aggregate, and transform GeoJSON data)',
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
  api.use(['yauh:turfjs-client', 'templating', 'ui'], 'client');
  api.addFiles([
    'turfjs-tests.js'
  ], 'client');
});