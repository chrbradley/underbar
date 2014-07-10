/**
 * Created by chrbradley on 7/9/14.
 */

// EACH:
var animals = ['ant', 'bat', 'cat'];
//var iterationInputs = [];
//
//animals.shouldBeIgnored = 'Ignore me!';
//
//function each(collection, iterator) {
//    for (var i=0; i< collection.length;i++) {
//        iterator(collection[i],i,collection);
//    }
//}
//
//each(animals, function(animal, index, list) {
//    iterationInputs.push([animal, index, list]);
//});
//
//console.log(iterationInputs);

//var snakes = { a: 'copperhead', b: 'mamba', c: 'python' };
//var snakeInputs = [];
//
//function eachObject(collection, iterator) {
//    for (var i in collection) {
//        iterator(collection[i],i,collection);
//    }
//};
//
//eachObject(snakes, function(animal, index, list) {
//    snakeInputs.push([animal, index, list]);
//});
//
//console.log(Array.isArray(animals));
//console.log(Array.isArray(snakes));

function each(collection, iterator) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            iterator(collection[i], i, collection);
        }
    }
    else {
        for (var i in collection) {
            iterator(collection[i],i,collection);
        }
    }
};


// indexOf
var numbers = [10, 20, 30, 40, 50, 30, 30, 30];
numbers.indexOf = null;

function indexOf(array, target) {
    var result = -1;

    each(array, function(item, index){
        if (item === target && result === -1) {
            result = index;
        }
    });

    return result;
}

//console.log(indexOf(numbers,30));


// FILTER

//function filter(collection, test) {
//    var passed = [];
//
//    for (var i=0; i < collection.length; i++) {
//        console.log(test(collection[i]));
//        if (test(collection[i])) {
//            passed.push(collection[i]);
//        }
//    }
//    return passed;
//
//};

function filter(collection, test) {
    var passed = [];
    each(collection, function(item, index){
        if (test(collection[index])) {
            passed.push(collection[index]);
        }
    });
    return passed;
};

var digits =[10,9,8,7,6,5,4,3,2,1];

var isEven = function(num) {
//    console.log(num % 2 === 0);
    return num % 2 === 0;
};

var evens = filter(digits, isEven);

var isOdd = function(num) {
    return num % 2 !== 0;
};

var odds = filter(digits, isOdd);

// Reject

function reject(collection, test) {
    var rejected = [];

//    each(collection, function(item,index) {
//        if (!test(collection[index])) {
//            rejected.push(collection[index]);
//        }
//    })

    return rejected;
}

//console.log(reject(digits,isOdd));

// uniq

function uniq(array) {
    var only = [];
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        obj[array[i]] = 0;
    }
    for ( i in obj ) {
        only.push(i);
    }
    return only;
}


var list = [1, 2, 1, 3, 1, 4];
var listB = [1, 2, 2, 3, 4, 4]
//console.log(uniq(listB));

// map
function map(collection,iterator) {
    var newArray = [];
    for (var i = 0; i < collection.length; i++) {
        newArray.push(iterator(collection[i]));
    }
    return newArray;
}

var doseMe = map([1,2,3,4,5,6,7,8,9], function(num) {
    return num*2;
});

//console.log(doseMe);

// invoke

function invoke(collection, functionOrKey, args) {
    var result = [];

        for (var i = 0; i < collection.length; i++) {
            if (String.prototype.hasOwnProperty(functionOrKey)) {
//                var stringerBell = collection[i]+"."+functionOrKey+"()";
//                console.log(collection[i]+"."+functionOrKey+"()")
//                result.push(stringerBell);
                result.push(String.prototype.functionOrKey.apply(collection[i], args));
            } else {
                result.push(functionOrKey.apply(collection[i], args));
            }
        }
    return result;
}

var reverse = function(){
    return this.split('').reverse().join('');
};
//console.log(invoke(animals,reverse));
//console.log(invoke(animals,'toUpperCase'));

// REDUCE
function reduce(collection, iterator, accumulator) {
    var current;
    var start = accumulator;
    if (Array.isArray(collection)) {
        if (start !== undefined) {
            current = start;
        } else {
            current = collection[0];
        }
        for (var i = 0; i<collection.length; i++) {
            current = iterator(current, collection[i]);
        }
    } else {
        if (start !== undefined) {
            current = start;
        } else {
            current = collection[Object.keys(collection)[0]];
        }
        for (var i in collection) {
            current = iterator(current, collection[i]);
        }
    }
    return current;
};

//var add = function(tally, item) {
// return tally + item;
// };
//var totalA = reduce([1, 2, 3], add, 0);
//var totalB = reduce([1, 2, 3], add);
//
//console.log(totalA);
//console.log(totalB);


// Contains
function contains(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
        if (wasFound) {
            return true;
        }
        return item === target;
    }, false);
}

// Every
function identity(val) {
    return val;
};

every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
    var result = true;
    for (var i = 0; i < collection.length; i++) {
        if ( iterator !== undefined ) {
            if (iterator(collection[i])) {
                result = true;
            } else {
                return false;
            };
        }
        else {
            if (collection[i]) {
                result = true;
            } else {
                return false;
            }
        }
    }

    return result;
};

// Some
function some(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    if ( iterator == undefined ) {
        iterator = identity;
    }
    var result = false;
    if (collection == null) return result;
    for (var i = 0; i < collection.length; i++) {
        if (iterator(collection[i])) {
            return true;
        }
    }
    return result;
};

//console.log(some([]));

// Extend

function extend(obj) {
    var result = obj;
    for (var i = 1; i < arguments.length; i++) {
        console.log(arguments[i])
//        keys.push(Object.getOwnPropertyNames(arguments[i]));
//        console.log("The keys are " + keys);
//        for (var i = 0; i < keys.length; i++) {
//            result[keys[i]] = arguments[i][keys[i]];
//        }
    }
    return result;
};

var to = {};
var from = {a:'b', y:'z'};
from['m'] = 'n';
var extended = extend({x:1}, {a:2}, {b:3});

console.log(extended);

