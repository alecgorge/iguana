# Generated on 2013-11-09 using generator-angular-fullstack 0.1.0
"use strict"

# # Globbing
# for performance reasons we're only matching one level down:
# 'test/spec/{,*/}*.js'
# use this if you want to recursively match all subfolders:
# 'test/spec/**/*.js'

config = require './lib/config'

module.exports = (grunt) ->
  require("load-grunt-tasks") grunt
  require("time-grunt") grunt
  grunt.initConfig
    env:
      options:
        PORT: process.env.PORT or 9000

      dev:
        NODE_ENV: 'development'

      prod:
        NODE_ENV: 'production'

    yeoman:

      # configurable paths
      app: require("./bower.json").appPath or "app"
      dist: "public"

    forever:
      prod:
        options:
          command: 'coffee'
          index: 'server.coffee'
          logDir: 'logs'

    express:
      options:
        port: process.env.PORT or 9000
        cmd: 'node_modules/.bin/coffee'

      dev:
        options:
          script: "server.coffee"

      prod:
        options:
          script: "server.coffee"
          node_env: "production"
          background: false
          delay: 1000

    jade:
      compile:
        options:
          pretty: true
        files: [
            expand: true
            src: "views/**/*.jade"
            dest: "app"
            ext: ".html"
          ,
            src: "views/index.jade"
            dest: "app/index.html"
          ]

    open:
      server:
        url: "http://localhost:<%= express.options.port %>"

    watch:
      coffee:
        files: ["<%= yeoman.app %>/scripts/{,*/}*.coffee"]
        tasks: ["coffee:dist"]

      coffeeTest:
        files: ["test/spec/{,*/}*.coffee"]
        tasks: ["coffee:test"]

      express:
        files: ["<%= yeoman.app %>/{,*//*}*.html", "{.tmp,<%= yeoman.app %>}/styles/{,*//*}*.css", "{.tmp,<%= yeoman.app %>}/scripts/{,*//*}*.js", "<%= yeoman.app %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}", "server.coffee", "lib/{,*//*}*.{coffee,js,json}"]
        tasks: ["express:dev"]
        options:
          livereload: true
          nospawn: true #Without this option specified express won't be reloaded

      styles:
        files: ["<%= yeoman.app %>/styles/{,*/}*.{css,styl}"]
        tasks: ["copy:styles", "autoprefixer", "stylus"]

    autoprefixer:
      options: ["last 1 version"]
      dist:
        files: [
          expand: true
          cwd: ".tmp/styles/"
          src: "{,*/}*.css"
          dest: ".tmp/styles/"
        ]

    stylus:
      compile:
        options:
          paths: ["<%= yeoman.app %>/bower_components/bootstrap-stylus/stylus"]
          define: config.get('stylus')
        expand: true
        cwd: ".tmp/styles/"
        src: "{,*/}*.styl"
        dest: ".tmp/styles/"
        ext: '.css'

    clean:
      dist:
        files: [
          dot: true
          src: [".tmp", "<%= yeoman.dist %>/*", "!<%= yeoman.dist %>/.git*"]
        ]

      heroku:
        files: [
          dot: true
          src: ["heroku/*", "!heroku/.git*", "!heroku/Procfile"]
        ]

      server: ".tmp"

    jshint:
      options:
        jshintrc: ".jshintrc"
        reporter: require("jshint-stylish")

      all: ["Gruntfile.js", "<%= yeoman.app %>/scripts/{,*/}*.js"]

    coffee:
      options:
        sourceMap: true
        sourceRoot: ""

      dist:
        files: [
          expand: true
          cwd: "<%= yeoman.app %>/scripts"
          src: "{,*/}*.coffee"
          dest: ".tmp/scripts"
          ext: ".js"
        ]

      test:
        files: [
          expand: true
          cwd: "test/spec"
          src: "{,*/}*.coffee"
          dest: ".tmp/spec"
          ext: ".js"
        ]


    # not used since Uglify task does concat,
    # but still available if needed
    #concat: {
    #      dist: {}
    #    },
    rev:
      dist:
        files:
          src: ["<%= yeoman.dist %>/scripts/{,*/}*.js", "<%= yeoman.dist %>/styles/{,*/}*.{styl,css}", "<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}", "<%= yeoman.dist %>/styles/fonts/*"]

    useminPrepare:
      html: "<%= yeoman.app %>/index.html"
      options:
        dest: "<%= yeoman.dist %>"

    usemin:
      html: ["<%= yeoman.dist %>/{,*/}*.html"]
      css: ["<%= yeoman.dist %>/styles/{,*/}*.css"]
      options:
        dirs: ["<%= yeoman.dist %>"]

    imagemin:
      dist:
        files: [
          expand: true
          cwd: "<%= yeoman.app %>/images"
          src: "{,*/}*.{png,jpg,jpeg}"
          dest: "<%= yeoman.dist %>/images"
        ]

    svgmin:
      dist:
        files: [
          expand: true
          cwd: "<%= yeoman.app %>/images"
          src: "{,*/}*.svg"
          dest: "<%= yeoman.dist %>/images"
        ]

    cssmin: {}

    # By default, your `index.html` <!-- Usemin Block --> will take care of
    # minification. This option is pre-configured if you do not wish to use
    # Usemin blocks.
    # dist: {
    #   files: {
    #     '<%= yeoman.dist %>/styles/main.css': [
    #       '.tmp/styles/{,*/}*.css',
    #       '<%= yeoman.app %>/styles/{,*/}*.css'
    #     ]
    #   }
    # }
    htmlmin:
      dist:
        options: {}

        #removeCommentsFromCDATA: true,
        #          // https://github.com/yeoman/grunt-usemin/issues/44
        #          //collapseWhitespace: true,
        #          collapseBooleanAttributes: true,
        #          removeAttributeQuotes: true,
        #          removeRedundantAttributes: true,
        #          useShortDoctype: true,
        #          removeEmptyAttributes: true,
        #          removeOptionalTags: true
        files: [
          expand: true
          cwd: "<%= yeoman.app %>"
          src: ["*.html", "views/*.html"]
          dest: "<%= yeoman.dist %>"
        ]


    # Put files not handled in other tasks here
    copy:
      dist:
        files: [
          expand: true
          dot: true
          cwd: "<%= yeoman.app %>"
          dest: "<%= yeoman.dist %>"
          src: ["*.{ico,png,txt}", ".htaccess", "bower_components/**/*", "images/{,*/}*.{gif,webp}", "fonts/*"]
        ,
          expand: true
          cwd: ".tmp/images"
          dest: "<%= yeoman.dist %>/images"
          src: ["generated/*"]
        ]

      heroku:
        files: [
          expand: true
          dot: true
          dest: "heroku"
          src: ["<%= yeoman.dist %>/**"]
        ,
          expand: true
          dest: "heroku"
          src: ["package.json", "server.coffee", "lib/**/*"]
        ]

      styles:
        expand: true
        cwd: "<%= yeoman.app %>/styles"
        dest: ".tmp/styles/"
        src: "{,*/}*.{css,styl}"

    concurrent:
      server: ["coffee:dist", "copy:styles"]
      test: ["coffee", "copy:styles"]
      dist: ["coffee", "copy:styles", "imagemin", "svgmin", "htmlmin"]

    cdnify:
      dist:
        html: ["<%= yeoman.dist %>/*.html"]

    ngmin:
      dist:
        files: [
          expand: true
          cwd: "<%= yeoman.dist %>/scripts"
          src: "*.js"
          dest: "<%= yeoman.dist %>/scripts"
        ]

    uglify:
      dist:
        files:
          "<%= yeoman.dist %>/scripts/scripts.js": ["<%= yeoman.dist %>/scripts/scripts.js"]

  grunt.registerTask "express-keepalive", "Keep grunt running", ->
    @async()

  grunt.registerTask "server", (target) ->
    return grunt.task.run(["env:prod", "jade", "build", "express:prod"])  if target is "dist"
    grunt.task.run ["env:dev", "clean:server", "concurrent:server", "autoprefixer", "stylus", "express:dev", "open", "watch"]

  grunt.registerTask "build", ["clean:dist", "concurrent:dist", "useminPrepare", "autoprefixer", "stylus", "copy:dist", "concat", "cssmin", "cdnify", "ngmin", "rev", "usemin"]
  grunt.registerTask "default", ["jshint", "test", "build"]
