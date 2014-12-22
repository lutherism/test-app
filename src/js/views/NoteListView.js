define(["react", "stores", "views/NoteRowView"], function(React, stores, NoteRowView) {
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
      return React.createElement("div", {class: "table"}, 
        stores.getNotes().map(function(note) {
          return React.createElement(NoteRowView, {noteId: note.id});
        })
        )
    }
  });
  return NoteListView;
});

