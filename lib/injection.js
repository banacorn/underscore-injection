var _ = require('underscore');

var addProperty = function (method) {
    Array.prototype[method] = function () {
        var args = [this].concat(Array.prototype.slice.call(arguments)); 
        return _[method].apply(null, args);
    };
};



_([
    // Collections
    'each',
    'forEach',
    'map',
    'collect',
    'reduce',
    'inject',
    'foldl', 
    'reduceRight', 
    'foldr',
    'find',
    'detect',
    'filter',
    'select',
    'reject',
    'all',
    'every',
    'any',
    'some',
    'include',
    'contains',
    'invoke',
    'pluck',
    'max',
    'min',
    'sortBy',
    'groupBy',
    'sortedIndex',
    'shuffle',
    'toArray',
    'size',
    // Array exclusives
    'first',
    'head',
    'initial',
    'last',
    'rest',
    'tail',
    'compact',
    'flatten',
    'without',
    'difference',
    'uniq',
    'unique',
    'indexOf',
    'lastIndexOf'
]).forEach(function (method) {
    addProperty(method);
});

Array.prototype.union = function () {
    return _.union.apply(null, this);
};

Array.prototype.intersection = function () {
    return _.intersection.apply(null, this);
};

Array.prototype.zip = function () {
    return _.zip.apply(null, this);
};
