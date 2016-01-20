module.exports = function(config){
    config.set({

        basePath : '',

        // load templates as module
        preprocessors: {

        },

        files : [
            'bower_components/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'application.js',
            'app/**/*.spec.js'
        ],

        reporters: ['progress'],

        // optionally, configure the reporter
        coverageReporter: {
            type : 'json',
            subdir : '.',
            file : 'coverage-final.json'
        },

        autoWatch : true,

        captureConsole: true,

        frameworks: ['jasmine', 'angular-filesort'],

        browsers : ['Firefox'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-angular-filesort'
        ],


        angularFilesort: {
            whitelist: [
                'components/**/*.js'
            ]
        },

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
