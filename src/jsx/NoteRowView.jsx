define(["react", "stores", "views/NoteMetaView", "views/NoteActionsView",
  "views/NoteEditingView"], function(
  React, stores, NoteMetaView, NoteActionsView, NoteEditingView
  ) {
  var NoteRowView = React.createClass({
    render: function() {
      var noteView;
      if (stores.getNotes().get(this.props.noteId).get('editing')) {
        noteView = <NoteEditingView noteId ={this.props.noteId}/>;
      } else {
        noteView = <NoteMetaView noteId={this.props.noteId} />
      }
      return (
        <div className="row">
          <div className="col-xs-8">
            {noteView}
          </div>
          <div className="col-xs-4">
            <NoteActionsView noteId={this.props.noteId}/>
          </div>
        </div>
      )
    }
  });
  return NoteRowView;
});
