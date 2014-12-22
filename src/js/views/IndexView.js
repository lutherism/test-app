define(["react"], function(React) {
  var IndexView = React.createClass({displayName: "IndexView",
    render: function() {
      return (React.createElement("div", {className: "container"}, 
        React.createElement("h2", {className: "hello_world"}, 
          "Welcome to my demo app!"
        ), 
        React.createElement("h3", {className: "nav-list"}, 
          "Links"
        ), 
        React.createElement("ul", null, 
          React.createElement("li", null, React.createElement("a", {href: "notes"}, "Notes"))
        ))
      )
    }
  });
  return IndexView;
});
