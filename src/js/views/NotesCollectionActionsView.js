define(["react", "stores", "dispatcher"], function(
  React, stores, dispatcher) {
  var NotesCollectionActionsView = React.createClass({displayName: "NotesCollectionActionsView",
    getInitialState: function() {
      return {
        'editing': false
      };
    },

    render: function() {
      return (
        React.createElement("div", {className: "well"}, 
          React.createElement("button", {className: "btn btn-xs btn-success", 
            onClick: this.createClick}, "Create")
        )
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
