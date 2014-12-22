define(["react"], function(React) {
  var IndexView = React.createClass({displayName: "IndexView",
    render: function() {
      return (React.createElement("div", {class: "container"}, 
        React.createElement("h2", {class: "hello_world"}, 
          "Welcome to my demo app!"
        ), 
        React.createElement("h3", {class: "nav-list"}, 
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
