/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, function2test) {
    let result = function2test();

    if(Array.isArray(expected)){
        expected = expected.toString();
    }
    if(Array.isArray(result)){
        result = result.toString();
    }
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return "TEST FAILED.  Expected " + expected + " found " + function2test();
    }
}
// Sample
function myarr(){
    return [1,1];
}
/*
console.log("Expected output of myarr() is 40  " + myFunctionTest([1,1], function () {
    return myarr();
}));
*/
// ---- max
function max(a, b){
    return (a > b) ? a : b;
}
/*
console.log("Expected output of max(10, 20) is 20  " + myFunctionTest(20, function () {
    return max(10, 20);
}));
*/
// ---- maxOfThree
function maxOfThree(a, b, c){
    let maxab = (a > b) ? a : b;
    return (maxab > c) ? maxab : c;
}
/*
console.log("Expected output of maxOfThree(10, 20, 5) is 20  " + myFunctionTest(20, function () {
    return maxOfThree(10, 20, 5);
}));
*/
// ---- isVowel
function isVowel(c){
    // check valid
    if (c.length != 1)
        return false; 
    // return value
    return ("AEIOU").includes(c.toUpperCase());
}
/*
console.log("Expected output of isVowel('e') is true  " + myFunctionTest(true, function () {
    return isVowel("e");
}));
*/
// ---- sum
function sum(arr){
    let sumAll = 0;
    for (let i = 0; i < arr.length; i++)
        sumAll += arr[i];
    return sumAll;
}
/*
console.log("Expected output of sum([1,2,3,4]) is 10  " + myFunctionTest(10, function () {
    return sum([1,2,3,4]);
}));
*/
// ---- multiply
function multiply(arr){
    let mulAll = 1;
    for (let i = 0; i < arr.length; i++)
        mulAll *= arr[i];
    return mulAll;
}
/*
console.log("Expected output of multiply([1,2,3,4]) is 24  " + myFunctionTest(24, function () {
    return multiply([1,2,3,4]);
}));
*/
// ---- reverse
function reverse(str){
    let result = "";

    for (let i = (str.length - 1); i >= 0 ; i--)
        result += str.charAt(i);
    return result;
}
/*
console.log("Expected output of reverse('jag testar') is 'ratset gaj'  " + myFunctionTest('ratset gaj', function () {
    return reverse("jag testar");
}));
*/
// ---- findLongestWord
function findLongestWord(arr){
    let longestWord = "";
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length > longestWord.length)
            longestWord = arr[i];
    }    
    return longestWord.length;
}
/*
console.log("Expected output of findLongestWord(['1', '12', '1234', '123']) is 4  " + myFunctionTest(4, function () {
    return findLongestWord(['1', '12', '1234', '123']);
}));
*/
// ---- filterLongWords
function filterLongWords(arr, len){
    let result = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].length > len)
        {
            result[count] = arr[i];
            count++; 
        }
    }    
    return result;
}
/*
console.log("Expected output of filterLongWords(['1', '12', '1234', '123'], 2) is ['1234', '123'] " + myFunctionTest(['1234', '123'], function () {
    return filterLongWords(['1', '12', '1234', '123'], 2);
}));
*/
// ---- map10
function map10(arr){
    let result = arr.map(function(ele, i, arr){
        return ele*10;
    });
    return result;
}
/*
console.log("Expected output of map10([1,3,5,3,3]) is [10,30,50,30,30]  " + myFunctionTest([10,30,50,30,30], function () {
    return map10([1,3,5,3,3]);
}));
*/
// ---- filter3
function filter3(arr){
    let result = arr.filter(function(ele, i, arr){
        return (ele == 3);
    });
    return result;
}
/*
console.log("Expected output of filter3([1,3,5,3,3]) is [3,3,3]  " + myFunctionTest([3,3,3], function () {
    return filter3([1,3,5,3,3]);
}));
*/
// ---- product
function product(arr){
    let result = arr.reduce(function(accumulator, currentValue, currentIndex, arr){
        return (accumulator *= currentValue);
    });
    return result;
}
/*
console.log("Expected output of product([1,3,5,3,3]) is 135  " + myFunctionTest(135, function () {
    return product([1,3,5,3,3]);
}));
*/
