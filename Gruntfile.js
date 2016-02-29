module.exports = function(grunt) {

    // Configuration for all grunt tasks.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Config for Typescript Compiler
        ts: {
            app: {
                src: ['app/**/*.ts', '!app/**/*.spec.ts', 'typings/**/*.ts'],
                out: 'application.js',
                reference: 'app/_references.ts',
                options: {
                    target: 'es5',
                    sourceMap: true,
                    declaration: false
                }
            },
            test: {
                src: ['app/**/*.spec.ts'],
                dest: '',
                options: {
                    target: 'es5',
                    sourceMap: true,
                    declaration: false
                }
            }
        },

        // Config for Karma (Unit Test) Task
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true,
                autoWatch: false
            },
            continuous: {
                configFile: 'karma.conf.js',
                singleRun: false,
                autoWatch: true
            }
        },

        // Config for Connect (Start Webserver) Task
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 8080,
                    base: 'app'
                }
            }
        },

        // Config for Watch Task
        watch: {
            // Whenever an application Typescript file is modified, re-build the application
            app: {
                files: ['app/**/*.ts', '!app/_references.ts'],
                tasks: ['ts:app'],
                options: {
                    atBegin: true
                }
            },
            dev: {
                files: ['app/**/*.ts', '!app/_references.ts'],
                tasks: ['ts:app', 'ts:test', 'karma:unit'],
                options: {
                    atBegin: true
                }
            }
        },

        // Config for Clean Task
        clean: {
            app: [
                'app/**/*.js',
                'app/**/*.js.map'
            ],
            cache: [
                '.tscache'
            ],
            all: [
                'app/**/*.js',
                'app/**/*.js.map',
                '.tscache'
            ]
        }
    });

    // Load all necessary plugins
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ts');


    // Build application files
    grunt.registerTask('dist', [
        'ts:app'
    ]);

    // Build application and run a single test
    grunt.registerTask('test', [
        'dist',
        'ts:test',
        'karma:unit'
    ]);

    // Watch task (rebuilds application whenever a Typescript file changes)
    grunt.registerTask('dev', [
        'watch:app'
    ]);

    // Watch task (rebuilds application and runs tests whenever a Typescript file changes)
    grunt.registerTask('devwithtest', [
        'watch:dev'
    ]);

    // Build distribution as default
    grunt.registerTask('default', [
        'dist'
    ]);

};
