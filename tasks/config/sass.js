/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 */

module.exports = function(grunt) {
    grunt.config.set("sass", {
        dev: {
            files: [
                {
                    expand: true,
                    cwd: "assets/styles/",
                    src: [
                        "Base.scss",
                        "Admin.scss",
                        "Template-*.scss",
                        "Prepage.scss"
                    ],
                    dest: ".tmp/public/styles/",
                    ext: ".css"
                }
            ]
        }
    });

    grunt.loadNpmTasks("grunt-sass");
};
