define(["react", "stores", "views/NoteRowView",
  "views/NotesCollectionActionsView"], function(
    React, stores, NoteRowView, NotesCollectionActionsView) {
  var NoteListView = React.createClass({displayName: "NoteListView",
    getInitialState: function() {
      return {
        'loading': true
      }
    },
    componentDidMount: function(options) {
      stores.getNotes().on('change:emit', this.handleNotesChange);
    },
    handleNotesChange: function() {
      this.setState({
        'loading': false
      });
    },
    render: function() {
      return (
        React.createElement("div", {className: "container clearfix"}, 
          React.createElement("div", {className: "container"}, 
            React.createElement("div", {className: "pull-right"}, 
              React.createElement(NotesCollectionActionsView, null)
            )
          ), 
          React.createElement("div", {className: "table"}, 
          stores.getNotes().map(function(note) {
            return React.createElement(NoteRowView, {noteId: note.cid});
          })
          )
        ));
    }
  });
  return NoteListView;
});

