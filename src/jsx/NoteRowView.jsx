define(["react", "stores"], function(React) {
  var NoteRowView = React.createClass({
    render: function() {
      return (
        <div class="row">
          <div class="col-xs-8">
            <NotesMetaView noteId={this.props.noteId} />
          </div>
          <div class="col-xs-4">
            <NoteActionsView />
          </div>
        </div>
      )
    }
  });
  return NoteRowView;
});
