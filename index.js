// Express/Connect middleware to set response header cache options

var setCacheHeader = require('cache-header-control');

module.exports = function(time) {
  
  return function(req, res, next) {
    setCacheHeader(res, time);
    next();
  };
};