module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.initConfig({
        jasmine: {
            taskName: {
                src: [
                   'src/js/**/*.js',
                   '!src/spec/*spec.js'
                ],
                options: {
                    specs: 'src/js/spec/*.js',
                    template: 'src/js/spec/esri_amd.html',
                    keepRunner: true,
                    vendor: []
                }
            }
        }
    });

    grunt.registerTask("test", "jasmine");
};
