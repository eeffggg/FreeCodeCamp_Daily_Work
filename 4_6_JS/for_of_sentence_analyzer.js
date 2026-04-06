function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);

function getConsonantCount(sentence) {
  const consonants = "bcdfghjklmnpqrstvwxyz";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }
  return count;
}

const consonantCount = getConsonantCount("Coding is fun");
console.log(`Consonant Count: ${consonantCount}`);

function getPunctuationCount(sentence){
  let countVowel = getVowelCount(sentence);
  let countConsonant = getConsonantCount(sentence);
  let countNull = 0;
  for(const ch of sentence){
    if(ch === " "){
      countNull++;
    }
  }
  return sentence.length - countVowel - countConsonant - countNull;
}

let punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log(`Punctuation Count: ${punctuationCount}`);

function getWordCount(sentence){
  if(sentence.trim() === ""){
    return 0;
  }else{
    return sentence.split(" ").length;
  }
}

let wordCount = getWordCount("I love freeCodeCamp");
console.log(`Word Count: ${wordCount}`);
