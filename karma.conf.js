// Karma configuration
// Generated on Sat Mar 26 2016 00:02:58 GMT-0600 (Mountain Daylight Time)
var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'sinon-chai'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      '__tests__/**/*-test.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    client: {
      chai: {
        includeStack: true
      }
    },

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '__tests__/**/*-test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sinon-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],


    webpackServer:{
      noInfo: true
    },
    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
