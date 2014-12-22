define(["react", "stores"], function(React) {
  var NoteMetaView = React.createClass({displayName: "NoteMetaView",
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
        React.createElement("div", {class: "well"}, 
          React.createElement("label", null, "Subject:"), 
          React.createElement("small", null, this.note.get('subject')), 
          React.createElement("label", null, "From:"), 
          React.createElement("small", null, this.note.get('creatorId')), 
          React.createElement("label", null, "Body:"), 
          React.createElement("h4", null, this.note.get('message'))
        )
      )
    }
  });
  return NoteMetaView;
});
