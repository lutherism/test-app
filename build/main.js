define(["underscore", "backbone", "react", "stores", "dispatcher", "pathStore"], function(
  _,
  Backbone,
  React,
  ViewManager,
  IndexView,
  stores,
  dispatcher,
  PathStore
  ) {
  var MyRouter = Backbone.Router.extend({
    initialize: function() {
      stores.set('pathStore', new PathStore());
    },
    routes: {
      '': 'index'
    },
    index: function() {
      dispatcher.dispatchRouteAction({
        type: 'index',
        concern: 'update',
        date: {
          route: 'index'
        }
      });
    }
  });
  return MyRouter;
});
