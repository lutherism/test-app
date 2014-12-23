define(['backbone', 'env'], function(
  Backbone, env
  ) {
  var NoteModel = Backbone.Model.extend({
    idAttribute: "_id",
    url: function() {
      return env.apiServer + 'notes/' + (this.id?this.id:'');
    },
    defaults: {
      'subject': 'default subject.',
      'message': 'defualt message.'
    }
  });

  return NoteModel;
});
