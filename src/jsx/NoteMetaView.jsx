define(["react", "stores"], function(React, stores) {
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
          <h3>{stores.getNotes().get(this.props.noteId).get('subject')}
          <small>&nbsp;{stores.getNotes().get(this.props.noteId).get('creatorId')}</small>
          </h3>
          <br />
          <h4>{stores.getNotes().get(this.props.noteId).get('message')}</h4>
        </div>
      )
    }
  });
  return NoteMetaView;
});
