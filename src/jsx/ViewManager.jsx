define(['react', 'dispatcher', 'views/IndexView', 'stores'], function (
  React,
  dispatcher,
  IndexView,
  stores
  ) {
  var ViewManager = React.createClass({
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
      var ret = (<h2>404</h2>);
      switch (this.state.route) {
        case 'index':
          ret = (<IndexView />);
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
