module.exports = function(grunt) {
    // Load the plugins
    grunt.loadNpmTasks('grunt-stylelint');

    // Project configuration
    grunt.initConfig({
        stylelint: {
            scss: {
                options: {
                    quietDeprecationWarnings: true,
                    customSyntax: 'postcss-scss',
                },
                src: ['snippets/**/*.scss']
            }
        },
        watch: {
            scss: {
                files: ['snippets/**/*.scss'],
                tasks: ['stylelint:scss']
            }
        }
    });

    // Register default task
    grunt.registerTask('default', ['stylelint:scss']);
};