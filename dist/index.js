(function(){
  var colors, log, ref$;
  colors = require('colors');
  log = function(opt){
    var name, this$ = this;
    opt == null && (opt = {});
    name = opt.name ? "[" + opt.name + "]" : '';
    [['info', 'green'], ['warn', 'yellow'], ['error', 'red']].map(function(n){
      return this$[n[0]] = function(){
        var args, res$, i$, to$;
        res$ = [];
        for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
          res$.push(arguments[i$]);
        }
        args = res$;
        args = [n[0].toUpperCase()[n[1]] + "\t: " + name].concat(args);
        return console[n[0]].apply(console, args);
      };
    });
    return this;
  };
  log.prototype = (ref$ = Object.create(Object.prototype), ref$.info = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    args = ["INFO\t: " + this.name].concat(args);
    return console.info.apply(console, args);
  }, ref$.warn = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    args = ["WARN\t: " + this.name].concat(args);
    return console.warn.apply(console, args);
  }, ref$.error = function(){
    var args, res$, i$, to$;
    res$ = [];
    for (i$ = 0, to$ = arguments.length; i$ < to$; ++i$) {
      res$.push(arguments[i$]);
    }
    args = res$;
    args = ["ERROR\t: " + this.name].concat(args);
    return console.error.apply(console, args);
  }, ref$);
  module.exports = log;
}).call(this);
