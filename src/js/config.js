require.config({
    baseUrl: "./src/js",
    paths: {
      "react": "../../bower_components/react/react-with-addons",
      "backbone": "../../bower_components/backbone/backbone",
      "underscore": "../../bower_components/underscore/underscore",
      "env": "../json/env",
      "flux": "../../bower_components/flux/dist/Flux",
      "jquery": "../../bower_components/jquery/dist/jquery"
    },
    jsx: {
      fileExtension: '.jsx'
    },
    shims: {
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      'underscore': {
        exports: '_'
      }
    },
  });

define(['backbone', 'main', 'react', 'views/ViewManager'], function(
  Backbone, AppRouter, React, ViewManager) {
  var myApp = new AppRouter();
  React.render(
    React.createElement(ViewManager, null),
    document.querySelector('body')
  );
  Backbone.history.start({pushState: true});
});
