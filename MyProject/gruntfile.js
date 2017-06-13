/**
 * Created by victor on 13/06/17.
 */
module.exports = function(grunt)
{
    // Project Configuration
    grunt.initConfig({
        jshint:{
            all:['student.js']// including file. This file is going to be tested
        },
        concat:{ // Task definition: It allows to unify "script1" and "script2" into "joined.js"
            dist:{
                src: ['student.js', 'script1.js', 'script2.js'], // => Source files
                dest: 'joined.js' // => Source destiny
            }
        },
        uglify:{ // Task definition: It allows to compress the code
            dist: {
                src: 'joined.js', // Once the scripts are joined into one it'll be the source
                dest: 'build/joined.min.js' // Output "build/joined.js" file compressed
            }
        }
    });

    // Calling npm task: Including grunt plugins to be used
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task loaded when grunt runs
    // Registering the tasks
    grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
};