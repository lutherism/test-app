define({
	requireConfig: {
    out: "app.js",
    baseUrl: ".",
    paths: {
      "react": "../../bower_components/react/react-with-addons",
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
    jsx: {
      fileExtension: '.jsx'
    },
    stubModules: ['jsx'],
    modules: [
      {
        name: "main",
        exclude: ["react", "JSXTransformer", "text"]
      }
    ]
	},
  apiServer: "http://localhost:8008/"
});

