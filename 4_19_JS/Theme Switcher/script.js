const themes = [
  {
    name:"light",
    message:"Light Theme"
  },
  {
    name:"dark",
    message:"Dark Theme"
  },
  {
    name:"ocean",
    message:"Ocean Theme"
  },
  {
    name:"nord",
    message:"Nord Theme"
  },
];

//打开 / 收起菜单
const btnEl = document.getElementById("theme-switcher-button");
btnEl.addEventListener("click",()=>{
  const controlledPart = document.getElementById(btnEl.getAttribute('aria-controls'));
  //html中带-的属性,用点访问法,搬过来要用驼峰命名法写
  //但是用set/getAttribute的时候还是用原名
  let flag = btnEl.getAttribute("aria-expanded") === "true";
  btnEl.setAttribute("aria-expanded",String(!flag));
  //hidden属性设置为false才是展开
  controlledPart.hidden = flag;
});


//点击菜单项,更改背景主题
//对li的点击怎么做? =>给父容器添加监听器
const menuitems = document.getElementById("theme-dropdown");
menuitems.addEventListener("click",(e)=>{
  /************更改按钮文字为:root中相关的颜色************/
  const html = document.documentElement;
  //获取主题名
  const themeName = e.target.innerText.toLowerCase().trim();
  //构造自定义颜色的变量名
  const varName = `--${themeName}-2-color`;
  //获取颜色
  const varColor = getComputedStyle(html).getPropertyValue(varName).trim();
  //设置颜色
  html.style.setProperty("--button-color",varColor)

  /************给body元素的类(class)添属性************/
  //方法一:xxx.classList.add:这种有弊端,就是上次的添加类值会存在,
  //导致多个css样式同时生效
  //方法二:setAttribute,会覆盖原属性(不仅仅能给class赋值)的值
  const bodyEl = document.querySelector("body");
  const thName = `theme-${e.target.innerText.toLowerCase()}`;
  bodyEl.setAttribute("class",thName);
  console.log(bodyEl.classList);

  /************增加message语句************/
  //找到显示文字的容器
  const divMessage = document.querySelector("#status");
  //从数组中取值
  let message = ""; 
  themes.forEach(obj=>{
    if(obj.name === themeName){
      message = obj.message;
    }
  })
  //显示文字
  divMessage.innerText = message;
});











