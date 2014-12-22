define(['backbone', 'env'], function(
  Backbone, env
  ) {
  var NoteModel = Backbone.Model.extend({
    url: function() {
      return env.apiServer + 'notes/' + this.id;
    },
    defualts: {
      'subject': 'default subject.',
      'message': 'defualt message.'
    }
  });

  return NoteModel;
});
