define(['flux'], function(Flux) {

    /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @param {string} id
   * @internal
   */
  Flux.Dispatcher.prototype.dispatcherInvokeCallback=function(id) {
    this.dispatcherIsPending[id] = true;
    this.dispatcherCallbacks[id](this.dispatcherPendingPayload);
    this.dispatcherIsHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @param {object} payload
   * @internal
   */
  Flux.Dispatcher.prototype.dispatcherStartDispatching=function(payload) {
    for (var id in this.dispatcherCallbacks) {
      this.dispatcherIsPending[id] = false;
      this.dispatcherIsHandled[id] = false;
    }
    this.dispatcherPendingPayload = payload;
    this.dispatcherIsDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  Flux.Dispatcher.prototype.dispatcherStopDispatching=function() {
    this.dispatcherPendingPayload = null;
    this.dispatcherIsDispatching = false;
  };
  /**
  * The PG dispatcher api methods `handle*Action` take an action
  * originating from a domain and append that information to a wrapper
  * object around the action to be dispatched -- the combined data
  * is what should be expected by registered dispatch callbacks
  *
  * payload = { source: ..., action: {...}}
  *
  * @internal
  */
  Flux.Dispatcher.prototype._handler=function(source, action) {
    var payload = {
      source: source,
      action: action
    };
    this.dispatch(payload);
  };
      /**
  * dispatched from the Router or its delegated action_creators
  */
  Flux.Dispatcher.prototype.dispatchRouteAction = function(action) {
    this._handler(this.constants.ROUTE_SOURCE, action);
  };

  /**
  * dispatched from Views or their delegated action_creators
  */
  Flux.Dispatcher.prototype.dispatchViewAction = function(action) {
    this._handler(this.constants.VIEW_SOURCE, action);
  };

  Flux.Dispatcher.prototype.constants = {
    ROUTE_SOURCE: "route_source",
    VIEW_SOURCE: "view_source"
  };

  return new Flux.Dispatcher();
});
