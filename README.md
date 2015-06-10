# Turfjs-client for Meteor
This package is a simple wrapper for [Turf](https://github.com/Turfjs/turf) on the client. Manipulate GeoJSON objects, similar to PostGIS.

[![Build Status](https://travis-ci.org/yauh/turfjs-client.svg?branch=master)](https://travis-ci.org/yauh/turfjs-client)

Read [an introduction to Turf.js and spatial analysis](https://www.mapbox.com/guides/intro-to-turf/).

## Usage
Install the package via command line:

```
$ meteor add yauh:turfjs-client
```

**Note** `turf` is only available on the client, not on the server. If you need it on the server install `yauh:turfjs-server`. To use it in both environments add the umbrella package `yauh:turfjs`.

See [the official docs](http://turfjs.org/static/docs/) for the correct syntax.
