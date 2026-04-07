let inventory = [];

function findProductIndex(productName){
  for(let i = 0; i < inventory.length; i++){
    if(productName.toLowerCase() === inventory[i].name){
      return i;
    }
  }
  return -1;
}
// console.log(findProductIndex("flour"));

function addProduct(productObj){
  productObj.name = productObj.name.toLowerCase();
  let flag = false;
  for(let obj of inventory){
    if(productObj.name === obj.name){
      obj.quantity += productObj.quantity;
      console.log(obj.name + " quantity updated");
      flag = true;
    }
  }
  if(!flag){
    inventory.push(productObj);
    console.log(productObj.name + " added to inventory");
  }
}
addProduct({name: "FLOUR", quantity: 5})
// console.log(inventory);

function removeProduct(productName, num){
  productName = productName.toLowerCase();
  let flag = false;
  let quantity = -1;
  for(let obj of inventory){
    if(productName === obj.name){
      flag = true;
      if(obj.quantity < num){
        console.log(`Not enough ${obj.name} available, remaining pieces: ${obj.quantity}`);
        return;
      }
      obj.quantity -= num;
      quantity = obj.quantity;
      if(!quantity){
        inventory.splice(findProductIndex(obj.name), 1) ;
      }
    }
  }
  if(flag){
    console.log(`Remaining ${productName} pieces: ${quantity}`);
  }else{
    console.log(`${productName} not found`);
  }
}
removeProduct("FLOUR",5);
console.log(inventory);


//Not enough flour available, remaining pieces: 5
//Not enough flour available, remaining pieces: 5
