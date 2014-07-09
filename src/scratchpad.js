/**
 * Created by chrbradley on 7/9/14.
 */

// EACH:
//var animals = ['ant', 'bat', 'cat'];
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

//    for (var i=0; i < collection.length; i++) {
//        console.log(test(collection[i]));
//        if (test(collection[i])) {
//            passed.push(collection[i]);
//        }
//    }

    each(collection,test(item,index) {
        console.log(collection[index])
    })
    return passed;

};

var digits =[10,9,8,7,6,5,4,3,2,1];

var isEven = function(num) {
//    console.log(num % 2 === 0);
    return num % 2 === 0;

};

var evens = filter(digits, isEven);

console.log("The evens are "+evens);


var isOdd = function(num) {
    return num % 2 !== 0;
};

var odds = filter(digits, isOdd);


console.log("The odds are "+odds);