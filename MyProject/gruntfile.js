/**
 * Created by victor on 13/06/17.
 */
module.exports = function(grunt)
{
    // Project Configuration
    grunt.initConfig({
        jshint:{
            all:['student.js']// including file
        }
    });

    // Calling npm task
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task loaded when grunt runs
    grunt.registerTask('default', ['jshint']);
};