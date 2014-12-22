define(["react", "stores", "views/NoteRowView"], function(React, stores, NoteRowView) {
  var NoteListView = React.createClass({
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
      return <div class="table">
        {stores.getNotes().map(function(note) {
          return <NoteRowView noteId={note.id} />;
        })}
        </div>
    }
  });
  return NoteListView;
});

