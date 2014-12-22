define(["react"], function(React) {
  var IndexView = React.createClass({
    render: function() {
      return (<div class="container">
        <h2 class="hello_world">
          Welcome to my demo app!
        </h2>
        <h3 class="nav-list">
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
