define(["react", "stores", "views/NoteMetaView", "views/NoteActionsView",
  "views/NoteEditingView"], function(
  React, stores, NoteMetaView, NoteActionsView, NoteEditingView
  ) {
  var NoteRowView = React.createClass({displayName: "NoteRowView",
    render: function() {
      var noteView;
      if (stores.getNotes().get(this.props.noteId).get('editing')) {
        noteView = React.createElement(NoteEditingView, {noteId: this.props.noteId});
      } else {
        noteView = React.createElement(NoteMetaView, {noteId: this.props.noteId})
      }
      return (
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "col-xs-8"}, 
            noteView
          ), 
          React.createElement("div", {className: "col-xs-4"}, 
            React.createElement(NoteActionsView, {noteId: this.props.noteId})
          )
        )
      )
    }
  });
  return NoteRowView;
});
