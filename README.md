# cache-control-midd

Express/Connect middleware to set response header cache options

## Install

```
npm install cache-control-midd --save
```

## Usage

```js
var express = require('express');
var cacheControl = require('cache-control-midd');

var app = express();

// Sets `Cache-Control` header to `public, max-age=600`
// and `Expires` to `600`
// 'minute' -> 10 minutes -> 600 seconds

app.get('/', cacheControl('minute'), function(req, res) {
	res.send('ok');
});

app.listen(3000, function () {
  
});
```

### cacheControl(timeValue)

see [cache-header-control](https://github.com/dolymood/cache-header-control#setcacheheaderresponseobject-timevalue) for details.

## Run Tests

```
npm install
npm test
```

