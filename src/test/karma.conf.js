// Karma configuration
// Generated on Fri Mar 17 2017 23:39:21 GMT-0500 (CDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
        { pattern: '../main/resources/public/app/lib/angular/1.6.4/angular.min.js', watched: false},
        { pattern: '../main/resources/public/app/lib/angular/1.6.4/*.js', watched: false},
        { pattern: 'resources/public/app/lib/**/*.js', watched: false},
        { pattern: '../main/resources/public/app/core/people/people.module.js', watched: false},
        { pattern: '../main/resources/public/app/core/people/user.model.js', watched: false},
        { pattern: '../main/resources/public/app/core/people/person.model.js', watched: false},
        { pattern: '../main/resources/public/app/core/people/candidate.model.js', watched: false},
        { pattern: 'resources/public/**/*spec.js', watched: false}
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


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
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: 1,

    urlRoot: '/test'
  })
}
