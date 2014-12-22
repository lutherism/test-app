define(["react", "stores"], function(React) {
  var NoteRowView = React.createClass({displayName: "NoteRowView",
    render: function() {
      return (
        React.createElement("div", {class: "row"}, 
          React.createElement("div", {class: "col-xs-8"}, 
            React.createElement(NotesMetaView, {noteId: this.props.noteId})
          ), 
          React.createElement("div", {class: "col-xs-4"}, 
            React.createElement(NoteActionsView, null)
          )
        )
      )
    }
  });
  return NoteRowView;
});
