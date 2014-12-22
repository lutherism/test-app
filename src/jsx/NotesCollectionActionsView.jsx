define(["react", "stores", "dispatcher"], function(
  React, stores, dispatcher) {
  var NotesCollectionActionsView = React.createClass({
    getInitialState: function() {
      return {
        'editing': false
      };
    },

    render: function() {
      return (
        <div className="well">
          <button className="btn btn-xs btn-success"
            onClick={this.createClick}>Create</button>
        </div>
      )
    },

    createClick: function() {
      dispatcher.dispatchViewAction({
        type: 'notes',
        concern: 'create',
        data: {
          editing: true
        }
      });
    }
  });
  return NotesCollectionActionsView;
});
