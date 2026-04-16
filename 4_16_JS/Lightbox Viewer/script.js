const galleryEle = document.querySelector(".gallery");
const closedBtn = document.querySelector("#close-btn");
const lightBox = document.querySelector(".lightbox");

function showBigPicture(strInformation){
  const lightBoxImg = document.querySelector("#lightbox-image");
  lightBox.style.display = "flex";
  console.log(`lightBox.style.display: `+lightBox.style.display);
  lightBoxImg.src = strInformation.replace("-thumbnail","");
}

//获得真正点击的事件e.target,此时它就等同于触发点击事件的元素
galleryEle.addEventListener("click",(e)=>{
  showBigPicture(e.target.src);
})

function closePicture(){
  lightBox.style.display = "none";
}

closedBtn.addEventListener("click",closePicture);
lightBox.addEventListener("click",closePicture);


