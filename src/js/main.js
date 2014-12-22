define(["underscore", "backbone", "react", "stores", "dispatcher", "pathStore"], function(
  _,
  Backbone,
  React,
  stores,
  dispatcher,
  PathStore
  ) {
  var MyRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'notes': 'notes'
    },
    index: function() {
      dispatcher.dispatchRouteAction({
        type: 'index',
        concern: 'update',
        data: {
          route: 'index'
        }
      });
    },
    notes: function() {
      dispatcher.dispatchRouteAction({
        type: 'notes',
        concern: 'update',
        data: {
          route: 'notes'
        }
      });
    }
  });
  return MyRouter;
});
