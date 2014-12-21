var env = {
  require: {
    out: "./app.js",
    name: "config",
    baseUrl: "./src/js/",
    paths: {
      "react": "../../bower_components/react/react",
      "JSXTransformer": "../../bower_components/jsx-requirejs-plugin/js/JSXTransformer",
      "jsx": "../../bower_components/jsx-requirejs-plugin/js/jsx",
      "backbone": "../../bower_components/backbone/backbone",
      "underscore": "../../bower_components/underscore/underscore",
      "jquery": "../../bower_components/jquery/dist/jquery",
      "text": "../../bower_components/requirejs-text/text"
    },
    shims: {
      'backbone': {
        deps: ['underscore'],
        exports: 'Backbone'
      },
      'underscore': {
        exports: '_'
      }
    },
    stubModules: ['jsx']
  }
};

module.exports = env;
