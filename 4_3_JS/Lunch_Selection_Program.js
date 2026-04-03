const lunches = [];
const addLunchToEnd = (arr, string1) =>{
  arr.push(string1);
  console.log(`${arr[arr.length-1]} added to the end of the lunch menu.`);
  return arr;
}

const addLunchToStart = (arr,string1) =>{
  arr.unshift(string1);
  console.log(`${arr[0]} added to the start of the lunch menu.`);
  return arr;
}

const removeLastLunch = arr =>{
  if(!(arr.length)) {
    console.log("No lunches to remove.");
    return arr;
  }
  let popI = arr.pop();
  console.log(`${popI} removed from the end of the lunch menu.`);
  return arr;
}

const removeFirstLunch = arr =>{
  if(!(arr.length)) {
    console.log("No lunches to remove.");
    return arr;
  }
  let removeI = arr.shift();
  console.log(`${removeI} removed from the start of the lunch menu.`);
  return arr;
}
console.log(removeFirstLunch(["Sushi", "Pizza", "Burger"]));

const getRandomLunch = arr =>{
  if(!(arr.length)) {
    console.log("No lunches available.");
    return arr;
  }
  //[0,4]
  let randomI = Math.floor(Math.random()*arr.length);
  console.log(`Randomly selected lunch: ${arr[randomI]}`);
}

const showLunchMenu = arr =>{
  if(!(arr.length)) {
    console.log("The menu is empty.");
    return;
  }
  console.log(`Menu items: ${arr.join(', ')}`);
}
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
