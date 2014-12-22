define(["react", "stores", "views/NoteRowView",
  "views/NotesCollectionActionsView"], function(
    React, stores, NoteRowView, NotesCollectionActionsView) {
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
      return (
        <div className="container clearfix">
          <div className="container">
            <div className="pull-right">
              <NotesCollectionActionsView />
            </div>
          </div>
          <div className="table">
          {stores.getNotes().map(function(note) {
            return <NoteRowView noteId={note.cid} />;
          })}
          </div>
        </div>);
    }
  });
  return NoteListView;
});

