const textArea = document.querySelector("textarea");
const htmlEle = document.querySelector("html");

function countChar(){
  let countNumber = textArea.value.length;
  const countEle = document.querySelector("#char-count");
  if(countNumber >= 50){
    countEle.innerText = `Character Count: 50/50`;
    textArea.value = textArea.value.slice(0,50);
    countEle.style.color="red";
  }else{
    countEle.innerText = `Character Count: ${countNumber}/50`
  } 
}

function changeBackground(){
  htmlEle.style.background = "linear-gradient(45deg,black,grey)";
}
function cleanChangeBackground(){
  htmlEle.style.background = "linear-gradient(45deg,grey,black)";
}

textArea.addEventListener("input",countChar);
textArea.addEventListener("focus",changeBackground);
textArea.addEventListener("blur",cleanChangeBackground);
