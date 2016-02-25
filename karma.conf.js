module.exports = function(config){
    config.set({

        basePath : '',

        files : [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/lodash/lodash.js',
            'application.js',
            'app/**/*.spec.js'
        ],

        reporters: ['progress'],

        frameworks: ['jasmine'],

        browsers : ['Firefox'],

        plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-safari-launcher',
            'karma-opera-launcher',
            'karma-jasmine'
        ]

    });
};
