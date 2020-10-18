/**
 * Objects, keys/properties and values
 */

// getGreeting should return a string containing
// 'Hello ' and the contents of `name`
function getGreeting (name) {

  
  return "Hello " +name;

   
}

// ageOneYear should return a new object with an `age` property 1 greater
// than the `age` property of `obj`
function ageOneYear (obj) {
  
  var objNew={};
  objNew.age=obj.age+1;

  return objNew
}

// makeObject should return an object that looks like this:
// (but using the arguments passed to the function)
// {
//   key: value
// }
function makeObject (key, value) {
     
    var obj={};
    obj[key]=value;
     return obj;  
}

// getPropertyValue should return the value of the
// property contained in the `key` of `obj`
function getPropertyValue (obj, key) {
    var value=obj.key;
    return value;

}

// addName should return a copy of `obj` with the addition of a `name`
// property that has the value of the `name` argument
// Tip: consider the object literal spread syntax
function addName (obj, name) {
    var objNew=obj;
    objNew.name=name;

    return objNew;

}

// deleteProperty should return a new copy of `obj` without the property name
// that matches the `key` parameter
// Tip: consider JavaScript's `delete` operator
function deleteProperty (obj, key) {
     var objNew={};
     delete obj[key];
     return objNew=obj;
} 

// returnErrorIfFalsy should return a JavaScript Error object with message:
//   'Oh no, an error!'
// if val evaluates to false
// Tip: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
function returnErrorIfFalsy (val) {

  try {

  if(val==false)
    throw new Error('Oh no, an error!')
  } catch (e) {
    console.error(e.name + ': ' + e.message)
  }
}

// keys should return an array of the object's property names (keys)
// For example, given { foo: 1, bar: 2 } it would return ['foo', 'bar']
function getKeys (obj) {
      var arr=[];
      for(var key in obj){
    
           arr.push(key);
      }


      return arr;
}

// getValues should return an array of the object's own values
// For example, given { foo: 1, bar: 2 } it would return [1, 2]
function getValues (obj) {

     var arr=[];
     for(var key in obj){
        arr.push(obj[key]);

     }

      return arr;
}

/**
 * Arrays
 */

// makeArrayOfItem should return an array that is `length` long, made up of
// `item`. For example, makeArrayOfItem('foo', 2) would return:
// ['foo', 'foo']
function makeArrayOfItem (item, length) {
     var arr=[];
     
     for(var i=0;i<length;i++){
         arr.push(item);
     }

    return arr;
}

// makeArrayOfItems should return an array containing all arguments passed to it
// Tip: consider JavaScript's Rest parameters
function makeArrayOfItems (...arr) {
     var arrNew=arr;

    
      return arrNew;
} 

// hasItem should return true if `item` is present in `arr` at least once,
// otherwise it should return false.
// Tip: there is an array function that makes this straightforward
function hasItem (arr, item) {

   

    var itemNew=arr.find(item =>{
         return item;
    });

    return !(itemNew==undefined);
}

// getItemAtIndex should return arr[idx] but only if that index exists:
// if it doesn't, return a JavaScript Error object.
function getI temAtIndex (arr, idx) {

  try {
    
    var value=arr[idx]
    if(idx>arr.length-1)
    throw new Error('Oh error occured')
  } catch (error) {
    console.error(error.name +":"+error.message);
  }

  return value;
}

// replaceItemAtIndex should return a copy of `arr` with
// the element at `idx` replaced with `item`
// Tip: consider the array literal spread syntax
function replaceItemAtIndex (arr, idx, item) {
     var arrNew=arr;


}

// insertItemAtIndex should return a copy of `arr` with `item` inserted at
// `idx` without overwriting any array values (the array should get longer)
function insertItemAtIndex (arr, item,  idx) {
}

// deleteItemAtIndex should return a copy of `arr` without
// the element at `idx` (the array should get shorter).
function deleteItemAtIndex (arr, idx) {
}

// deleteItem should return an array with every instance of `item` removed
function deleteItem (arr, item) {
}

// zipObject should return an object built from two arrays
// For example, given ['foo', 'bar'] and [1, 2] it would return
// { foo: 1, bar: 2 }
function zipObject (keys, values) {
}

// unzipObject should return an array of arrays, each one a pair of keys and values
// For example, given {foo: 1, bar: 2} it would return
// [['foo', 1], ['bar', 2]]
function unzipObject (obj) {
}

// findOneByProperty should return an object from `arr` that has the
// property AND value of `search`. For example, given:
//   [{a: 1}, {b: 2, c: 3}] and {b: 2}
// it will return:
//   {b: 2, c: 3}
function findOneByProperty (arr, search) {
}

// findAll should return an array containing all objects in `arr` that
// have the property and value of `search`
function findAll (arr, search) {

}

module.exports = {
  addName,
  ageOneYear,
  deleteItem,
  deleteItemAtIndex,
  deleteProperty,
  getGreeting,
  getItemAtIndex,
  getKeys,
  getPropertyValue,
  getValues,
  findOneByProperty,
  findAll,
  hasItem,
  insertItemAtIndex,
  makeArrayOfItem,
  makeArrayOfItems,
  makeObject,
  replaceItemAtIndex,
  returnErrorIfFalsy,
  unzipObject,
  zipObject
}
