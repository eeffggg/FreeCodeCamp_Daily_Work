//reverse a string
function reverseString(arr) {
  return arr.split("").reverse().join("");
}
//find the biggest number in each member array of the 2D-array;
function largestOfAll(twoDArr) {
  let resultArr = [];
  for (let x of twoDArr) {
    let maxNumber = -Infinity;
    for (let y of x) {
      if (maxNumber < y) {
        maxNumber = y;
      }
    }
    resultArr.push(maxNumber);
  }
  return resultArr;
}
//element finder
function findElement(arr, func) {
  for (let x of arr) {
    if (func(x)) {
      return x;
    }
  }
  return undefined;
}
//slicing and splicing
function frankenSplice(arr1, arr2, index) {
  let arr3 = [];
  for (let i = 0; i < index; i++) {
    arr3.push(arr2[i]);
  }
  for (let x of arr1) {
    arr3.push(x);
  }
  for (let j = index; j < arr2.length; j++) {
    arr3.push(arr2[j]);
  }
  return arr3;
}
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
////如何表现字符串金字塔?
// console.log("0\n000");
//如何添加空格
// console.log(" ".repeat(3) + "0");
function pyramid(str, height, boolean) {
  let string1 = "\n";
  if (!boolean) {
    for (let x = 1; x <= height; x++) {
      string1 += " ".repeat(height - x) + str.repeat((x - 1) * 2 + 1) + "\n";
    }
    return string1;
  }
  let string2 = "\n";
  for (let y = height; y >= 1; y--) {
    string2 += " ".repeat(height - y) + str.repeat((y - 1) * 2 + 1) + "\n";
  }
  return string2;
}
console.log(pyramid("o", 4, false));

//title case
function titleCase(str) {
  let arr = str.toLowerCase().split(" ");
  let resArr = [];
  // console.log(arr);
  for (let x of arr) {
    let temp = "";
    temp = x.replace(x[0], String.fromCharCode(x.charCodeAt(x[0]) - 32));
    resArr.push(temp);
  }
  return resArr.join(" ");
  // console.log(resArr.join(" "));
}
//test
console.log(titleCase("sHoRt AnD sToUt"));

//falsy value remover
function bouncer(arr) {
  let resArr = [];
  for (let x of arr) {
    if (Boolean(x)) {
      resArr.push(x);
    }
    // console.log(Boolean(x));
  }
  return resArr;
}
bouncer([false, null, 0, "", undefined, NaN]); //false,false,false,false,false,false

