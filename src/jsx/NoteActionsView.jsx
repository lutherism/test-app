define(["react", "stores", "dispatcher"], function(
  React, stores, dispatcher
  ) {
  var NoteActionsView = React.createClass({
    getInitialState: function() {
      return {
        'editing': false
      };
    },
    componentDidMount: function(options) {
      this.note = stores.getNotes().get(this.props.noteId);
    },
    render: function() {
      return (
        <div className="container">
          <button className="btn btn-xs btn-warning"
            onClick={this.editNote}>Edit</button>
          <button className="btn btn-xs btn-danger"
            onClick={this.deleteNote}>DEL</button>
        </div>
      )
    },
    editNote: function() {
      dispatcher.dispatchViewAction({
        type:'notes',
        concern:'update',
        data: {
          cid: this.props.noteId,
          editing: true
        }
      });
    },
    deleteNote: function() {
      dispatcher.dispatchViewAction({
        type:'notes',
        concern:'delete',
        data: {
          cid: this.props.noteId
        }
      });
    }
  });
  return NoteActionsView;
});
