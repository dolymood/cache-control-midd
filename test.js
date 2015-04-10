var cacheControl = require('./index.js');
var express = require('express');
var request = require('supertest');

describe('cache control middleware', function () {
  
  it('set to no-cache if passed the value ""', function (done) {
    
    var app = express();
    
    app.use(cacheControl(''));
    
    request(app)
      .get('/')
      .expect('cache-control', 'no-cache, no-store, must-revalidate')
      .expect('Expires', '0')
      .expect('Pragma', 'no-cache')
      .end(done);
  });
  
  it('set to a max-age if passed a number value', function (done) {
    
    var app = express();
    
    app.use(cacheControl(500));
    
    request(app)
      .get('/')
      .expect('cache-control', 'public, max-age=500')
      .end(done);
  });
  
  it('set to a max-age if passed a string value that can be parsed to to a number', function (done) {
    
    var app = express();
    
    app.use(cacheControl('500'));
    
    request(app)
      .get('/')
      .expect('cache-control', 'public, max-age=500')
      .end(done);
  });
  
  it('set to a max-age if passed the value "minute"', function (done) {
    
    var app = express();
    
    app.use(cacheControl('minute'));
    
    request(app)
      .get('/')
      .expect('cache-control', 'public, max-age=600')
      .end(done);
  });
  
  it('set to a max-age if passed the value "hour"', function (done) {
    
    var app = express();
    
    app.use(cacheControl('hour'));
    
    request(app)
      .get('/')
      .expect('cache-control', 'public, max-age=3600')
      .end(done);
  });

});