//unique sorted union
const uniteUnique = (...arrs) => {
  let resArr = [];
  for (let arr of arrs) {
    for (let number of arr) {
      if (!resArr.includes(number)) {
        resArr.push(number);
      }
    }
  }
  return resArr;
};
// random password
let str =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
const generatePassword = (len) => {
  let resStr = "";
  for (let x = 1; x <= len; x++) {
    let randomIndex = Math.floor(Math.random() * 72);
    resStr = resStr.concat("", str[randomIndex]);
  }
  return resStr;
};
let password = generatePassword(10);
console.log(`Generated password: ${password}`);

console.log(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    .length,
); //72
//"a" + "b" = "ab"?
console.log("a" + "b"); //yes
//concat
console.log("a".concat("134", "b"));
// sum all
const sumAll = (arr) => {
  let num1;
  let num2;
  if (arr[0] < arr[1]) {
    num1 = arr[0];
    num2 = arr[1];
  } else {
    num1 = arr[1];
    num2 = arr[0];
  }
  return ((num1 + num2) * (num2 - num1 + 1)) / 2;
};
console.log(sumAll([1, 4]));
//dna pairing
const pairElement = (str) => {
  let resArr = [];
  let tempArr = [];
  for (let ch of str) {
    switch (ch) {
      case "A":
        tempArr = ["A", "T"];
        break;
      case "T":
        tempArr = ["T", "A"];
        break;
      case "C":
        tempArr = ["C", "G"];
        break;
      default:
        tempArr = ["G", "C"];
    }
    resArr.push(tempArr);
  }
  return resArr;
};
//html entity converter
/**由于字符串的replace方法会返回新字符串,
 * 对于如何使新字符串再次加入循环,
 * 没有太好的方法,
 * 因此考虑转化为字符数组
 * */
const convertHTML = (str) => {
  let arr = str.split("");
  for (let i = 0; i < str.length; i++) {
    switch (arr[i]) {
      case "&":
        arr[i] = "&amp;";
        break;
      case "<":
        arr[i] = "&lt;";
        break;
      case ">":
        arr[i] = "&gt;";
        break;
      case '\"':
        arr[i] = "&quot;";
        break;
      case "'":
        arr[i] = "&apos;";
        break;
    }
    // console.log(ch);
  }
  return arr.join("");
};
console.log(convertHTML('Stuff in "quotation marks"'));
//find the sum of odd Fibonacci(number < n)
function sumFibs(num) {
  let a = 0;
  let b = 1;
  let c;
  let sumOfOddNumbers = 1;
  for (c = 0; c < num; ) {
    //a, b, c, (a), (b), (c)
    if (a + b <= num) {
      c = a + b;
      if (c % 2 !== 0) {
        sumOfOddNumbers += c;
      }
    } else {
      return sumOfOddNumbers;
    }

    if (b + c <= num) {
      a = b + c;
      if (a % 2 !== 0) {
        sumOfOddNumbers += a;
      }
    } else {
      return sumOfOddNumbers;
    }

    if (c + a <= num) {
      b = c + a;
      if (b % 2 !== 0) {
        sumOfOddNumbers += b;
      }
    } else {
      return sumOfOddNumbers;
    }
  }
  console.log(sumOfOddNumbers);
  return sumOfOddNumbers;
}
console.log(sumFibs(4000000));
//skip elements
function dropElements(arr, func) {
  for (let n of arr) {
    if (func(n)) {
      return arr.slice(arr.indexOf(n));
    }
  }
  return [];
}
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
);
