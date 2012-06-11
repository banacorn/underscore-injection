var _       = require('underscore'),
    should  = require('should');

require('../index.js');

describe('Collections', function () {
    
    var list = [1, 2, 3, 4, 5];
      
        
    it('each', function (done) {      
        list.should.have.property('each');        
        var listB = [];        
        list.each(function (e) {
            listB.push(e)
        });        
        listB.should.eql(list);        
        done();
    });
    
    it('forEach', function (done) {      
        list.should.have.property('forEach');        
        var listB = [];        
        list.forEach(function (e) {
            listB.push(e)
        });        
        listB.should.eql(list);        
        done();
    });
    
    it('map', function (done) {        
        list.should.have.property('map');        
        var listB = list.map(function (e) {
            return e;
        });        
        listB.should.eql(list);        
        done();
    });
    
    it('collect', function (done) {        
        list.should.have.property('collect');        
        var listB = list.collect(function (e) {
            return e;
        });        
        listB.should.eql(list);        
        done();
    });
    
    it('reduce', function (done) {        
        list.should.have.property('map');        
        var result = list.reduce(function (acc, e) {
            return acc + e;
        }, 0);
        result.should.eql(15);        
        done();        
    });
    
    it('inject', function (done) {        
        list.should.have.property('inject');        
        var result = list.inject(function (acc, e) {
            return acc + e;
        }, 0); 
        result.should.eql(15);        
        done();        
    });
    
    it('foldl', function (done) {        
        list.should.have.property('foldl');        
        var result = list.foldl(function (acc, e) {
            return acc + e;
        }, 0);
        result.should.eql(15);        
        done();        
    });
    
    it('reduceRight', function (done) {        
        list.should.have.property('reduceRight');        
        var result = list.reduceRight(function (acc, e) {
            return acc + e;
        }, 0);
        result.should.eql(15);        
        done();        
    });
    
    it('foldr', function (done) {        
        list.should.have.property('foldr');        
        var result = list.foldr(function (acc, e) {
            return acc + e;
        }, 0);
        result.should.eql(15);        
        done();        
    });
    
    it('find', function (done) {        
        list.should.have.property('find');        
        var result = list.find(function (e) {
            return e % 2 === 0;
        });
        result.should.eql(2);        
        done();        
    });
    
    it('detect', function (done) {        
        list.should.have.property('detect');        
        var result = list.detect(function (e) {
            return e % 2 === 0;
        });
        result.should.eql(2);        
        done();        
    });
    
    it('filter', function (done) {        
        list.should.have.property('filter');        
        var result = list.filter(function (e) {
            return e % 2 === 0;
        });
        result.should.eql([2, 4]);        
        done();        
    });
    
    it('select', function (done) {        
        list.should.have.property('select');        
        var result = list.select(function (e) {
            return e % 2 === 0;
        });
        result.should.eql([2, 4]);        
        done();        
    });
    
    it('reject', function (done) {        
        list.should.have.property('reject');        
        var result = list.reject(function (e) {
            return e % 2 === 0;
        });
        result.should.eql([1, 3, 5]);        
        done();        
    });
    
    it('all', function (done) {
        list.should.have.property('all');        
        var result = list.all(function (e) {
            return e > 3;
        });
        result.should.eql(false);             
        var result = list.all(function (e) {
            return e > 0;
        });
        result.should.eql(true);        
        done();        
    });
    
    it('every', function (done) {
        list.should.have.property('every');        
        var result = list.every(function (e) {
            return e > 3;
        });
        result.should.eql(false);             
        var result = list.every(function (e) {
            return e > 0;
        });
        result.should.eql(true);        
        done();        
    });
    
    it('any', function (done) {
        list.should.have.property('any');        
        var result = list.any(function (e) {
            return e > 5;
        });
        result.should.eql(false);             
        var result = list.any(function (e) {
            return e > 4;
        });
        result.should.eql(true);        
        done();        
    });
    
    it('some', function (done) {
        list.should.have.property('some');        
        var result = list.some(function (e) {
            return e > 5;
        });
        result.should.eql(false);             
        var result = list.some(function (e) {
            return e > 4;
        });
        result.should.eql(true);        
        done();        
    });
    
    it('include', function (done) {
        list.should.have.property('include');        
        var result = list.include(9);
        result.should.eql(false);             
        var result = list.include(2);
        result.should.eql(true);        
        done();        
    });
    
    it('contains', function (done) {
        list.should.have.property('contains');        
        var result = list.contains(9);
        result.should.eql(false);             
        var result = list.contains(2);
        result.should.eql(true);        
        done();        
    });
    
    it('invoke', function (done) {
        var list = [[5, 1, 7], [3, 2, 1]];
        list.should.have.property('invoke');        
        var result = list.invoke('sort');
        result.should.eql([[1, 5, 7], [1, 2, 3]]);        
        done();        
    });
    
    it('pluck', function (done) {
        var list = [{name : 'moe', age : 40}, {name : 'larry', age : 50}, {name : 'curly', age : 60}];
        list.should.have.property('pluck');        
        var result = list.pluck('name');
        result.should.eql(["moe", "larry", "curly"]);        
        done();        
    });
    
    it('max', function (done) {
        list.should.have.property('max');        
        var result = list.max();
        result.should.eql(5);        
        done();        
    });
    
    it('min', function (done) {
        list.should.have.property('min');        
        var result = list.min();
        result.should.eql(1);        
        done();        
    });
    
    it('sortBy', function (done) {
        list.should.have.property('sortBy');        
        var result = list.sortBy(function (num) {
            return Math.sin(num);
        });
        result.should.eql([5, 4, 3, 1, 2]);        
        done();        
    });
    
    it('groupBy', function (done) {
        var list = [1.3, 2.1, 2.4];
        list.should.have.property('groupBy');        
        var result = list.groupBy(function (num) {
            return Math.floor(num);
        });
        result.should.eql({1: [1.3], 2: [2.1, 2.4]});        
        done();        
    });
    
    
    it('size', function (done) {
        list.should.have.property('size');        
        var result = list.size();
        result.should.eql(5);        
        done();        
    });
});

describe('Arrays', function () {
    
    var list = [1, 2, 3, 4, 5];      
    
    it('first', function (done) {
        list.should.have.property('first');        
        var result = list.first();
        result.should.eql(1);        
        done();        
    });
    
    it('head', function (done) {
        list.should.have.property('head');        
        var result = list.head();
        result.should.eql(1);        
        done();        
    });
    
    it('initial', function (done) {
        list.should.have.property('initial');        
        var result = list.initial();
        result.should.eql([1, 2, 3, 4]);        
        done();        
    });
    
    it('last', function (done) {
        list.should.have.property('last');        
        var result = list.last();
        result.should.eql(5);        
        done();        
    });
    
    it('rest', function (done) {
        list.should.have.property('rest');        
        var result = list.rest();
        result.should.eql([2, 3, 4, 5]);        
        done();        
    });
    
    it('tail', function (done) {
        list.should.have.property('tail');        
        var result = list.tail();
        result.should.eql([2, 3, 4, 5]);        
        done();        
    });
    
    it('compact', function (done) {
        var list = [0, 1, false, 2, '', 3];
        list.should.have.property('compact');        
        var result = list.compact();
        result.should.eql([1, 2, 3]);        
        done();        
    });
    
    it('flatten', function (done) {
        var list = [1, [2], [3, [[4]]]];
        list.should.have.property('flatten');        
        var result = list.flatten();
        result.should.eql([1, 2, 3, 4]);        
        done();        
    });
    
    it('without', function (done) {
        var list = [1, 2, 1, 0, 3, 1, 4];
        list.should.have.property('without');        
        var result = list.without(0, 1);
        result.should.eql([2, 3, 4]);        
        done();        
    });
    
    it('union', function (done) {
        var list = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
        list.should.have.property('union');        
        var result = list.union();
        result.should.eql([1, 2, 3, 101, 10]);        
        done();        
    });
    
    it('intersection', function (done) {
        var list = [[1, 2, 3], [101, 2, 1, 10], [2, 1]];
        list.should.have.property('intersection');        
        var result = list.intersection();
        result.should.eql([1, 2]);        
        done();        
    });
    
    it('difference', function (done) {
        list.should.have.property('difference');        
        var result = list.difference([5, 2, 10]);
        result.should.eql([1, 3, 4]);        
        done();        
    });
    
    it('uniq', function (done) {
        var list = [1, 2, 1, 3, 1, 4];
        list.should.have.property('uniq');        
        var result = list.uniq();
        result.should.eql([1, 2, 3, 4]);        
        done();        
    });
    
    it('unique', function (done) {
        var list = [1, 2, 1, 3, 1, 4];
        list.should.have.property('unique');        
        var result = list.unique();
        result.should.eql([1, 2, 3, 4]);        
        done();        
    });
    
    it('zip', function (done) {
        var list = [['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]];
        list.should.have.property('zip');        
        var result = list.zip();
        result.should.eql([["moe", 30, true], ["larry", 40, false], ["curly", 50, false]]);        
        done();        
    });
    
    it('indexOf', function (done) {
        list.should.have.property('indexOf');        
        var result = list.indexOf(3);
        result.should.eql(2);        
        done();        
    });
    
    it('lastIndexOf', function (done) {
        list.should.have.property('lastIndexOf');        
        var result = list.indexOf(3);
        result.should.eql(2);        
        done();        
    });
});
