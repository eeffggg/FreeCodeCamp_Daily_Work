//data
const testManifest = {
  containerId: 1,
  destination: "Monterey, California, USA",
  weight: undefined,
  unit: "lb",
  hazmat: false
}
const testManifest2={ 
  containerId: 55, 
  destination: "Carmel", 
  weight: 400, 
  unit: "lb", 
  hazmat: false 
}
const testManifest3={
  containerId: 55, 
  destination: "Carmel", 
  weight: 400, 
  unit: "lb", 
  hazmat: false 
}

////Functions
//First
const normalizeUnits = manifest => {
  const {...newManifest} = manifest;
  if(newManifest.unit !== "kg"){
    newManifest.weight *= 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

//Second
const validateManifest = manifest => {
  //shallow copy
  const {...copyManifest} = manifest;
  const resultManifest = {};

  //containerId
  let tempID = copyManifest.containerId;
  if(tempID !== undefined && tempID !==null){//有值
    if(typeof tempID !== "number" 
      || tempID < 0 
      || tempID === 0
      || !(Number.isInteger(tempID))){
        resultManifest.containerId = "Invalid" ;//值类型不对
    }
  }else{//没有值,也就是为null / undefined
    resultManifest.containerId = "Missing" ;
  }
  //destination
  let tempDst = copyManifest.destination;
  if(tempDst !== undefined && tempDst !==null){
    if(typeof tempDst !== "string" || tempDst.trim() === ""){
      resultManifest.destination = "Invalid" ;
    }
  }else{
    resultManifest.destination = "Missing" ;
  }
  //weight
  let tempWeight = copyManifest.weight;
  if(tempWeight !== undefined && tempWeight !==null){
    if(typeof tempWeight !== "number"
      || tempWeight < 0 
      || tempWeight === 0 
      || Number.isNaN(tempWeight)){
        resultManifest.weight = "Invalid" ;
    }
  }else{
    resultManifest.weight = "Missing" ;
  }
  //unit
  let tempUnit = copyManifest.unit;
  if(tempUnit!== undefined && tempUnit!==null){
    if(typeof tempUnit !== "string" 
      || !(tempUnit === "kg" 
      || tempUnit === "lb")){
        resultManifest.unit = "Invalid" ;
    }
  }else{
    resultManifest.unit = "Missing" ;
  }
  //hazmat
  if(copyManifest.hazmat !== undefined && copyManifest.hazmat !==null){
    if((typeof copyManifest.hazmat) !== "boolean"){
      resultManifest.hazmat = "Invalid" ;
    }
  }else{
    resultManifest.hazmat = "Missing" ;
  }
  return resultManifest; 
}


//Third
const processManifest = (manifest) => {
  const {...copyManifest} = manifest;
  //Check if the Object is {}
  if (Object.keys(validateManifest(copyManifest)).length === 0){
    //ID
    console.log(`Validation success: ${copyManifest.containerId}`);
    //Weight: Format only when the data is valid
    let formatManifest = normalizeUnits(copyManifest);
    console.log(`Total weight: ${formatManifest.weight} kg`);
  }else{
    console.log(`Validation error: ${copyManifest.containerId}`);
    console.log(validateManifest(copyManifest));
  }
}



//test
console.log(validateManifest(testManifest2));

processManifest(testManifest2)



