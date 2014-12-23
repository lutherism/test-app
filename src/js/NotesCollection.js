define(['backbone', 'underscore', 'NoteModel', 'env', 'dispatcher'], function(
  Backbone, _, NoteModel, env, dispatcher
  ) {
  var NotesCollection = Backbone.Collection.extend({
    model: NoteModel,
    name: 'notes',
    initialize: function(options) {
      dispatcher.register(this.handleDispatch.bind(this));
    },
    url: function() {
      return env.apiServer + 'notes/';
    },
    handleDispatch: function(payload) {
      if (payload.source === dispatcher.constants.VIEW_SOURCE) {
        if (payload.action.type === this.name) {
          switch (payload.action.concern) {
            case 'create':
              model = new this.model(payload.action.data);
              this.add(model);
              model.save();
              this.trigger('change:emit');
              break;
            case 'update':
              var model = this.get(payload.action.data.cid);
              model.set(payload.action.data);
              model.save();
              model.trigger('change:emit');
              this.trigger('change:emit');
              break;
            case 'delete':
              this.find(payload.action.data).destroy();
              this.trigger('change:emit');
              break;
          }
        }
      }
    }
  });

  return NotesCollection;
});
