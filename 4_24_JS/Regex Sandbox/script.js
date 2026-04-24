const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

/**函数 */
function getFlags(){
  //虽然flag的值确实会在每次运行时置为空
  let flag='';
  //但是上次选中的选项,依旧会通过.checked判断,靠它才会有gi/ig这种输出
  if(globalFlag.checked) flag += "g";
  if(caseInsensitiveFlag.checked) flag += "i";
  console.log("getFlags: " + flag);
  return flag;
}

function getSetValue(ch){
  const regex = regexPattern.value;
  const str = stringToTest.innerText;
  //怎么截取字符串呢
      // =>方法1:match + 多个捕获组 
      // =>多捕获组,首个取反(\D接收数字以外的字符
  //但是这道题应该"查找所需"然后replace替换为被html元素包裹的
      // =>replace本身就能够对满足正则条件的多个项全部替换
  //正则和修饰符能项字符串那样拼接吗?不行 => new RegExp('正则',修饰符)
  
  //如何对变量施加捕获组以便replace中替换使用?不需要=>使用$&
      // =>$&不论有无捕获组都可用,代表当前匹配到的所有子串
  const newRegex = new RegExp(regex,ch);
  console.log(newRegex);
  // const res = [0];
  const resHtml = str.replace(newRegex,`<span class="highlight">$&</span>`);
  stringToTest.innerHTML = resHtml;
  const matchs = str.match(newRegex);
  if(matchs !== null){//match方法未找到时返回空
    testResult.textContent = matchs.join(", ");
    console.log(matchs);
  }else{
    testResult.textContent = "no match";
  }
  console.log(testResult.innerHTML);
}

/**监听器 */
//g
globalFlag.addEventListener("change",(e)=>{
  if(e.target.checked){
    getFlags();
  }
});
//i
caseInsensitiveFlag.addEventListener("change",(e)=>{
  if(e.target.checked){
    getFlags();
  }
});
//testButton
testButton.addEventListener("click",()=>{
  getSetValue(getFlags());
});



