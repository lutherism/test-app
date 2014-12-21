define(['react', 'dispatcher', 'views/IndexView', 'stores'], function (
  React,
  dispatcher,
  IndexView,
  stores
  ) {
  var ViewManager = React.createClass({displayName: "ViewManager",
    componentDidMount: function(options) {
      this.el = 'body';
      stores.get('pathStore').on('change:emit', this.handlePathChange, this);
    },
    getInitialState: function() {
      return {
        'route': ''
      }
    },
    render: function() {
      var ret = (React.createElement("h2", null, "404"));
      switch (this.state.route) {
        case 'index':
          ret = (React.createElement(IndexView, null));
          break;
      }
      return ret;
    },
    handlePathChange: function() {
      this.setState({
        route: stores.get('pathStore').get('route')
      });
    }
  });
  return ViewManager;
});
