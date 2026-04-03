const confirmEnding = (string1,string2) => {
  if(string1.length < string2.length){
    return false;
  }
  if(string1.length == string2.length){
    return string1 === string2 ? true : false;
  }
  let slictString1 = string1.slice((-1)*string2.length);
  console.log(slictString1);
  console.log(string2);
    return slictString1 === string2 ? true : false;
}

console.log(confirmEnding("Bastian", "n"));
