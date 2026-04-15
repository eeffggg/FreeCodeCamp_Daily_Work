const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }
]

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

//change监听器检测下拉列表的使用,然后执行instrumentCards根据取到的value去找符合的结果 => 放到html格式的字符串中, 然后收进[]中
//然后用这个字符串去覆盖html中的innerHTML属性,从而达到该页面的效果
 function instrumentCards(instrumentCategory) {
  const instruments =
    //没有把判断语句放在filter循环中,就只是执行一次
    instrumentCategory === "all"
      ? instrumentsArr //这里直接返回的是原数组
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );

  let resString = [];
   instruments.forEach(item=>resString.push(`
          <div class="card">
            <h2>${item.instrument}</h2>
            <p>$${item.price}</p>
          </div>
        `));
  return resString.toString().split(",").join("");
}
  //"="右边返回符合要求的结果的[数组],数组赋给innerHTML会自动使用toString方法
  //[<<div>...</div>,div>...</div>,<div>...</div>],那么中间就会有逗号
selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value);
});
