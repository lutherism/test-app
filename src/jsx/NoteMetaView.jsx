define(["react", "stores"], function(React) {
  var NoteMetaView = React.createClass({
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
        <div class="well">
          <label>Subject:</label>
          <small>{this.note.get('subject')}</small>
          <label>From:</label>
          <small>{this.note.get('creatorId')}</small>
          <label>Body:</label>
          <h4>{this.note.get('message')}</h4>
        </div>
      )
    }
  });
  return NoteMetaView;
});
