define(["react"], function(React) {
  var IndexView = React.createClass({displayName: "IndexView",
    render: function() {
      return (
        React.createElement("h2", {class: "hello_world"}, 
          "Hello World!"
        )
      )
    }
  });
  return IndexView;
});
