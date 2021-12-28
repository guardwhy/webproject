(function( window, undefined ) {
  let gwjQuery = function( ) {
    return new gwjQuery.prototype.init( );
  }
  // 自定义原型对象
  gwjQuery.prototype = {
    constructor: gwjQuery
  }
  gwjQuery.prototype.init.prototype = gwjQuery.prototype;
  window.gwjQuery = window.$ = gwjQuery;
})( window );