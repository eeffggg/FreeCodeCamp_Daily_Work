function translatePigLatin(str){
    if(/[aeiou]/i.test(str[0])){
        return `${str}way`;
    }
    const regex = /([^aeiou]+)(.*)/i
    return str.replace(regex,`$2$1ay`);
}
console.log(translatePigLatin("bcdf"));
//
function myReplace(str, word, newWord) {
  if (/[A-Z]/.test(word[0])) {
    newWord = newWord.replace(newWord[0], newWord[0].toUpperCase());
  } else {
    newWord = newWord.replace(newWord[0], newWord[0].toLowerCase());
  }
  return str.replace(word, newWord);
}
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
