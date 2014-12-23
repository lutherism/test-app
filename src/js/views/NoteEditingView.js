define(["react", "stores", "dispatcher"], function(
  React, stores, dispatcher
  ) {
  var NoteEditingView = React.createClass({displayName: "NoteEditingView",
    getInitialState: function() {
      return {
        'subject': stores.getNotes().get(this.props.noteId).get('subject'),
        'message': stores.getNotes().get(this.props.noteId).get('message')
      };
    },
    render: function() {
      return (
        React.createElement("div", {className: "form-group"}, 
          React.createElement("label", null, "Subject:"), 
          React.createElement("input", {className: "form-input", value: this.state.subject, 
            onChange: this.setSubjectState}), 
          React.createElement("br", null), React.createElement("label", null, "Body"), 
          React.createElement("textarea", {className: "text-input", value: this.state.message, 
            onChange: this.setBodyState}), 
          React.createElement("button", {onClick: this.cancelEdit, 
            className: "btn btn-xs btn-defualt"}, "Cancel"), 
          React.createElement("button", {onClick: this.saveNote, 
            className: "btn btn-xs btn-success"}, "Save")
        )
      )
    },
    setBodyState: function(e) {
      this.setState({
        message: e.target.value
      });
    },
    setSubjectState: function(e) {
      this.setState({
        subject: e.target.value
      });
    },
    cancelEdit: function() {
      dispatcher.dispatchViewAction({
        type: 'notes',
        concern: 'update',
        data: {
          cid: this.props.noteId,
          editing: false
        }
      });
    },
    saveNote: function() {
      dispatcher.dispatchViewAction({
        type: 'notes',
        concern: 'update',
        data: {
          cid: this.props.noteId,
          subject: this.state.subject,
          message: this.state.message,
          editing: false
        }
      });
      dispatcher.dispatchViewAction({
        type: 'notes',
        concern: 'save',
        data: {
          cid: this.props.noteId
        }
      });
    }
  });
  return NoteEditingView;
});
