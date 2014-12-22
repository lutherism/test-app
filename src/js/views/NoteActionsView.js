define(["react", "stores", "dispatcher"], function(
  React, stores, dispatcher
  ) {
  var NoteActionsView = React.createClass({displayName: "NoteActionsView",
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
        React.createElement("div", {className: "container"}, 
          React.createElement("button", {className: "btn btn-xs btn-warning", 
            onClick: this.editNote}, "Edit"), 
          React.createElement("button", {className: "btn btn-xs btn-danger", 
            onClick: this.deleteNote}, "DEL")
        )
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
