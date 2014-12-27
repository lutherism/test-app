define(['backbone', 'dispatcher', 'pathStore', 'NotesCollection'], function(
  Backbone, dispatcher, PathStore, NotesCollection
  ) {
  var Store = Backbone.Model.extend({
    initialize: function(options) {
      this.set('pathStore', new PathStore());
      this.set('notesStore', new NotesCollection());
      this.getNotes().fetch({
        success: function() {
          this.getNotes().trigger('change:emit');
        }.bind(this)
      });
      dispatcher.register(this.dispatchHandler.bind(this));
    },
    dispatchHandler: function(payload) {

    },
    getNotes: function() {
      return this.get('notesStore');
    },
    getPath: function() {
      return this.get('pathStore');
    }
  });
  return new Store();
});
