define(["react", "stores"], function(React, stores) {
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
          React.createElement("h3", null, stores.getNotes().get(this.props.noteId).get('subject'), 
          React.createElement("small", null, " ", stores.getNotes().get(this.props.noteId).get('creatorId'))
          ), 
          React.createElement("br", null), 
          React.createElement("h4", null, stores.getNotes().get(this.props.noteId).get('message'))
        )
      )
    }
  });
  return NoteMetaView;
});
