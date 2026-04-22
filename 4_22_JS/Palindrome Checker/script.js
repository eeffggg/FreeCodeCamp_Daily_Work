/*** 元素 */
//不要去对html页面添加监听器,因为事件会冒泡,最终变为整个页面的监听器
//对于:root中的自定义变量如何修改?
//1. 使用document.documentElement / 2.setProperty("名称","值"));
const root = document.documentElement;
const inputEl = document.querySelector("#text-input");
const themeChange = document.querySelector("#change-theme");
const bis = document.querySelectorAll(".bi");
//check按钮
const checkBtn = document.querySelector("#check-btn");
//展示div
const resDiv = document.querySelector("#result");

/*** 函数 */
//输入框函数:对输入框设置动态效果
function textInputChangeWidth() {
  //聚焦输入框后清除上一次的结果
  if (resDiv.innerText !== "RESULT SHOWN HERE") {
    resDiv.innerText = "RESULT SHOWN HERE";
    resDiv.style.color = "var(--theme-color)";
  }
  //如果超过20长度就不再接收,使用textaria.value = textaria.value.slice(0,50);
  if (inputEl.value.length >= 20) {
    inputEl.value = inputEl.value.slice(0, 20);
  }
  //css中width只接受值,不接受8rem+10rem这种表达式
  inputEl.style.width = `${10 + inputEl.value.length * 1}rem`; //留初始值
}

//主题更改函数(背景+图标切换)
//在设置值以前,把所有的hidden和aria-label属性值修改了(通过对于父容器操作?)这里不用改aria-label
//控制显隐为什么没有按期进行? 先显示所有,再隐藏当前的
function changeTheme(event) {
  //全局更改:显示所有
  bis.forEach((bi) => (bi.hidden = false));
  //隐藏当前的
  event.hidden = true;
  //控制背景 + 文字颜色
  //修改:root
  if (event.ariaLabel === "moon-theme") {
    root.style.setProperty(
      "--html-background",
      "linear-gradient(45deg, #A5B8C9, #faf0e6)",
    );
    root.style.setProperty("--theme-color", "#566078");
  } else {
    root.style.setProperty(
      "--html-background",
      "linear-gradient(45deg, #2e3440 30%, #561505)",
    );
    root.style.setProperty("--theme-color", "linen");
  }
}
//取值 / 展示函数
//获取用户输入->格式化->传入检查函数->得到布尔值
//将布尔值传入展示函数->展示函数根据true/false展示相应的语句到屏幕
//input取值? 用value
function getAndPutRes() {
  let str = inputEl.value;
  let flag = false;
  if (str !== "") {
    //格式化
    const res = str
      .split("")
      .filter((ch) => {
        return /(?:\d|[a-z])/i.test(ch);
      })
      .join("");
    flag = checkRes(res.toLowerCase());
  } else {
    alert("Please input a value");
    return;
  }
  isPalindrome(flag, str);
}

//检查函数,传入字符串判断是否是回文
function checkRes(str) {
  if (str.length === 1) {
    return str;
  }
  let j = str.length - 1;
  //6个:只需要走完前3个,索引2
  //5个:也可以走完前3个,索引2,都是length/2-1
  //这里要+等号
  for (let i = 0; i <= str.length / 2 - 1; i++) {
    if (str[i] === str[j]) {
      j--;
    } else {
      return false;
    }
  }
  return true;
}

//展示函数:根据传入的布尔值展示相应的语句到屏幕上
function isPalindrome(boolValue, str) {
  if (boolValue) {
    //js中加粗resDiv.style.fontWeight = 'bold';
    //部分加粗resDiv.innerHTML = `<strong>${str}</strong> is a Palindrome`;
    resDiv.innerHTML = ` <strong>${str}</strong> is a Palindrome`;
    resDiv.style.color = "green";
  } else {
    resDiv.innerHTML = ` <strong>${str}</strong> is not a Palindrome`;
    resDiv.style.color = "red";
  }
}

// console.log((checkRes("23455432")));

/*** 监听器 */
//输入框
inputEl.addEventListener("input", textInputChangeWidth);
//切换主题图标
themeChange.addEventListener("click", (e) => {
  changeTheme(e.target);
});
//check按钮
checkBtn.addEventListener("click", () => {
  getAndPutRes();
});
