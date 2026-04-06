//finding the longest word
const findLongestWordLength = (str) =>{
  let maxLength = -1;
  if(str.trim() === ""){
    return maxLength;
  }
  for(let x of str.split(" ")){
    if(maxLength < x.length){
      maxLength = x.length;
    }
  }
  return maxLength;
}
//factorical calculation
let num = 9;
function factorialCalculator(num){
  let result = 1;
  for(let x = 1; x <= num; x++){
    result *= x;
  }
  return result;
}
let factorial = factorialCalculator(num);
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg);
//只看：第二个字符串里出现过的每一种字母，第一个字符串里有没有
function mutation(arr){
  if(arr.length < 2){
    return false;
  }
  for(let x of arr[1].toLowerCase())
  if(!arr[0].toLowerCase().includes(x)){
    return false;
  }
  return true;
}
//array chunking
function chunkArrayInGroups(arr,num){
  let resultArr = [];
  for(let x = 0; x < arr.length; x += num){
    resultArr.push(arr.slice(x,x + num));
  }
  return resultArr;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
//data query
let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name,prop){
  let copyArr = contacts.slice();
  for(let x of copyArr){
    if(x.firstName === name){
      return x[prop] ?? "No such property";
    }
  }
  return "No such contact";
}
//copy string
function repeatStringNumTimes(str,num){
  let resStr = "";
  for(let i = 0; i<num;i++){
    resStr += str;
  }
  return resStr;
}
//find the missing letter
function fearNotLetter(str){
  let startCharCode = str[0].charCodeAt();
  let endCharCode = str[str.length-1].charCodeAt();
  for(let i = startCharCode;i <= endCharCode; i++){
    if(!str.includes(String.fromCharCode(i))){
      return String.fromCharCode(i)
    }
  }
  return undefined;
}
