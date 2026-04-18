//质因数分解法
//要有函数:判断一个数是否是质数
//一:先遍历从a-b中的所有数,
//1.1: a-b中的质数直接添加到map中<key=底数,value=指数>
//1.2: 非质数,让除数从1开始遍历,当除数为质数时做除法
//1.2.1: 能整除->商继续从1开始遍历质数做除法->值到商为质停止,统计不同种类的质数的数量,如果>map字典此质数的个数,就更新
//1.2.2: 不能整除,舍弃此质数,继续往后遍历
//直到遍历结束,map字典中将包括所有质数以及它们的最大指数
//将这些值相乘

//短除法
//将数据写在一行,然后用质数依次试探
//能有两个以上的数整除的就写下商,不能就原样写下来
//如此往复直到最后的值没有公约数:比如5 8 9
//把期间除的数和最后的数相乘 
//1 2 3 4 5 
//  1 3 2 5  :2
//60

//2 3 4 5 6 7 8 9 10
//1 3 2 5 3 7 4 9 5  :2 
//1 3 1 5 3 7 2 9 5  :2
//1 1 1 5 1 7 2 3 5  :3
//1 1 1 1 1 7 2 3 1  :5
//7  2 3 2 2 3 5 = 840 * 3 = 2520

//判断一个数是否是质数(未使用)
function isPrime(num){
  let len = Math.sqrt(num)-2+1;
  let testArr = Array.from({length:len},(_,i)=>i+2);
  return testArr.every(n=>num%n !== 0)
}

//判断数组中是否能有至少两个数约分
function hasCommonDivisor(arr){
  //比如2, 9, 12这种,如果遍历到2就结束,是不足以确定数组中就没有至少两个数还有公约数的,所以我判断到最大数i <= arr[arr.length-1]
  for(let i = 2; i <= arr[arr.length-1]; i++){
    let count = 0;
    for(let num of arr){
      if (num%i === 0){
        count++;
      }
    }
    if(count >= 2){
      return i;
    }
  }
  //对于一个数组,用从2开始到数组中的最大值,的数去遍历测试每一个值是否能被整除,如果到index=数组中最大值,还凑不齐至少两个数能被整除,就返回-1,意味着这里面的各个数,没有公约数了,比如1 3 7这种
  return -1; 
}
// console.log("return a num: "+hasCommonDivisor([1,1,1,1,1,7,2,3,1]));

//给定确定能让至少两个数约分的i和数组,执行约分并返回新数组
function division(arr, i){
  return arr.map(item=>{
    if(item%i === 0){
      return item/i;
    }
    return item;
  })
}
// console.log("division: "+division([1,1,1,5,1,7,2,3,5],5));

//主函数:构建目标数组->while中调用上面的两个方法->最后把除数数组和结果数组的值相乘返回结果
function smallestCommons(arr){
  //根据提供区间生成数组
  arr.sort((a,b)=>a-b);
  let testArr =  Array.from({length:arr[1]-arr[0]+1},(_,i)=>arr[0]+i);
  let divisorArr = [];
  while(hasCommonDivisor(testArr) !== -1){
    let commonDivisor = hasCommonDivisor(testArr);
    divisorArr.push(commonDivisor);
    testArr = division(testArr,commonDivisor); 
    console.log("testArr: "+testArr);
  }
  let prod1 = testArr.reduce((acc,cur)=>{return acc*cur},1)
  let prod2 = divisorArr.reduce((acc,cur)=>{return acc*cur},1)
  return prod1*prod2;
}
//text
console.log(
(smallestCommons([23,18]))
);
