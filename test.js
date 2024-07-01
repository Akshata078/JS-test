// Write a function to generate the first n numbers in the Fibonacci sequence.
// function fibonacciSequence(n){
//     let i=0;
//     let j = 1;
//     let k = 0;
//     let count = 0;

//     while(count!==n){
//         console.log(k);
//         i=j;
//         j=k;
//         k=i+j;
//         count++;
//     }
// }
// fibonacciSequence(5);


// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// function returnIndices(target){
//     let arr = [1,2,3];
//     for (let i=0; i<arr.length; i++){
//         if(arr[i]+arr[i+1] == target){
//             console.log(i, i+1);
//         }
//     }
// }
// returnIndices(5);


// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
// function validString(str){
//     let start = 0;
//     let end = str.length - 1;
    
//     while(start!=end){
//         if(str[start]==str[end]){
//             start++;
//             end--;
//         }
//     }

// }
// validString("(})");


// Given a string, find the length of the longest substring without repeating characters.
// function longestSubstring(str){

//     let newStr = str.split("");

//     for(let i=0; i<newStr.length; i++){
//         let j = 0;
//         while(j<newStr.length){
//             if (newStr[i]===newStr[j]){
//                 newStr.splice(i, 1);
//             }
//             j++;
//         }
//     }
//     console.log(newStr.length);
// }
// longestSubstring("aaakbaahhhhjjjjkjjj");


// Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

// function newArrayWithProduct(){
//     let newArr = [];
//     let arr = [1,2,3,4];
    
//     for (let i=0; i<arr.length; i++){
//         let product = 1;
//         let j = 0;
//         while(j<=arr.length - 1){
//             if(arr[i]!=arr[j]){
//                 product = product * arr[j];
//             }
//             j++;
//         }
//         newArr.push(product);
//     }
// console.log(newArr);
// }
// newArrayWithProduct();


// Given an array of strings, group anagrams together.




// Find the kth largest element in an unsorted array.


// Given n non-negative integers representing the heights of walls, find the maximum area of water that can be trapped between the walls.


// Given an integer array, return all possible subsets (the power set).


// Write a function to check if a given string is a palindrome.

// function palindromeString(str){
//     let reverse = str.split("").reverse().join("");
//     if(reverse==str){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(palindromeString("abaa"));
















