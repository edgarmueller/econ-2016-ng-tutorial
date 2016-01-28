module.exports = function(config){
    config.set({

        basePath : '',

        files : [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-resource/angular-resource.js',
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
