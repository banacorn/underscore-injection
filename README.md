# Underscore Injection

Instead of doing this:

``` javascript
_.chain([1, 2, 3, 4, 5, 6, 7, 8])
    .map(Math.sin)
    .map(times10)
    .map(Math.floor)
    .filter(isEven)
    .reduce(add, 0)
    .value();
=> -4
```

Now you can do this!


``` javascript
[1, 2, 3, 4, 5, 6, 7, 8]
    .map(Math.sin)
    .map(times10)
    .map(Math.floor)
    .filter(isEven)
    .reduce(add, 0);
=> -4
```

Chaining like a boss!

Extends the ECMAScript 5's Array iterating methods.

Injects [Underscore](http://documentcloud.github.com/underscore/) collection and array goodies right into your Array.prototype. (Excepts for `toArray` and `range`)

# Install

    $ npm install underscore-injection
    
# Usage

``` javascript
var _ = require('underscore');
require('underscore-injection');
```

That's all, don't even bother giving it a variable name.

# Test

    $ make test
