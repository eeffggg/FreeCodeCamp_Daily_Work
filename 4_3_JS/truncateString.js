const truncateString = (string, num) => {
  if(string.length > num){
    let sliceString = string.slice(num);
    return string.replace(sliceString, '.'.repeat(3));
  }
  return string;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
