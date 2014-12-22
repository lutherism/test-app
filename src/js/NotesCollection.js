define(['backbone', 'NoteModel', 'env'], function(
  Backbone, NoteModel, env
  ) {
  var NotesCollection = Backbone.Collection.extend({
    model: NoteModel,
    url: function() {
      return env.apiServer + 'notes/';
    },
  });

  return NotesCollection;
});
