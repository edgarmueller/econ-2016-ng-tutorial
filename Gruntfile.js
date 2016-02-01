module.exports = function(grunt) {

    // TODO: let stefan review this

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Config for Concat Task
        concat: {
            options: {
                // Remove all existing banners
                stripBanners: true,

                // Replace all 'use strict' statements in the code with a single one at the top
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                },

                // Add new banner on top of generated file
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %> Copyright (c) EclipseSource Muenchen GmbH and others. */ \n' +
                "'use strict';\n"
            },
            dist: {
                // Concat all files from components directory and include the embedded templates
                src: ['app/**/*.js'],
                filter: 'isFile',
                dest: 'app.js'
            }
        },

        ts: {
            dist: {
                src: ['app/**/*.ts', '!app/**/*.spec.ts'], //'typings/**/*.ts']],
                out: 'application.js',
                //reference: 'app/_references.ts',
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: true,
                    declaration: false
                }
            },
            test: {
                src: ['app/**/*.spec.ts'],
                dest: '',
                //reference: 'app/_references.ts',
                options: {
                    target: 'es5',
                    module: 'commonjs',
                    sourceMap: true,
                    declaration: false
                }
            }
        },

        copy: {
            app: {
                files: [
                    // dist to app
                    {expand:true, cwd: 'dist/', src: ['**'], dest: 'app'}
                ]
            }
        },

        // Config for Karma (Unit Test) Task
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        // Config for Connect (Start Webserver) Task
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: 'app'
                }
            }
        },

        watch: {
            js: {
                files: 'components/**',
                tasks: ['concat:dist']
            },
            templates: {
                files: 'templates/**',
                tasks: ['ngtemplates:dist', "concat:dist", 'uglify:dist']
            },
            examples: {
                files: ['dist/**'],
                tasks: ['copy:app']
            }
        },

        clean: {
            dist: [
                'dist/**',
                'temp/**'
            ],
            examples: [
                'app/js/jsonforms*',
                'app/css/jsonforms*'
            ],
            dev: [
                'components/references.ts',
                'components/**/*.js',
                'components/**/*.js.map',
                'tests/references.ts',
                'tests/**/*.js',
                '!**/*.conf.js',
                'tests/**/*.js.map'
            ],
            downloads: [
                'app/bower_components',
                'node_modules'
            ],
            coverage: [
                'coverage'
            ],
            cache: [
                '.tscache'
            ],
            all: [
                'dist',
                'temp',
                'app/js/jsonforms*',
                'app/css/jsonforms*',
                'components/references.ts',
                'components/**/*.js',
                'components/**/*.js.map',
                'tests/references.ts',
                'tests/**/*.js',
                '!**/*.conf.js',
                'tests/**/*.js.map',
                'app/bower_components',
                'node_modules',
                'coverage',
                '.tscache'
            ]
        }
    });

    // Load the plugin that provides the "concat" task.
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.loadNpmTasks('grunt-contrib-copy');

    // clean
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Load the plugin that provides the "karma" task.
    grunt.loadNpmTasks('grunt-karma');

    // Load the plugin that provides the "connect" task.
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-ts');
    // Build distribution
    grunt.registerTask('dist', [
        //'clean:dist',
        'ts:dist'
    ]);

    // Test unit and e2e tests
    grunt.registerTask('test', [
        'dist',
        'ts:test',
        'karma',
        'connect'
    ]);

    // Build distribution as default
    grunt.registerTask('default', [
        'dist'
    ]);

};