define(["react"], function(React) {
  var IndexView = React.createClass({
    render: function() {
      return (<div className="container">
        <h2 className="hello_world">
          Welcome to my demo app!
        </h2>
        <h3 className="nav-list">
          Links
        </h3>
        <ul>
          <li><a href="notes">Notes</a></li>
        </ul></div>
      )
    }
  });
  return IndexView;
});
