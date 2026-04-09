//判断一个数如果放进数字数组中了,索引是多少?
//concat也可以起到push的作用,但是两者有不同:
// 1. push对原数组进行修改,返回数组新长度,因而不能继续链式调用sort(),因为这样成立"数.sort()",而它需要"数组.sort()"
// 2. concat返回新数组,所以可以继续调用sort()
// 3. sort()直接对原数组排序,返回排序后的原数组
function getIndexToIns(arr, num) {
  let newArr = arr.concat(num).sort((a, b) => a - b);
  return newArr.findIndex((item) => item === num);
}
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

//对称差函数,查找两个相较圆的非公共部分(返回只在一个数组中出现的数构成的数组)
function diffArray(arr1, arr2) {
  let sameArr = arr1.filter((item) => arr2.includes(item)); //找出公共部分
  let allArr = arr1.concat(arr2); //求出大集合
  return allArr.filter((item) => !sameArr.includes(item)); //找大集合中不位于公共部分的剩余部分
}

//可变参数中,对于第一个参数(数组)中的所有元素,如果后续参数有出现,则去除
function destroyer(...arrs) {
  let [firstArr, ...otherArr] = arrs; //数组解构,这是关键,区分了第一个参数和剩余的参数
  return firstArr.filter((item) => !otherArr.includes(item));
}
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

//对象现在就是filter中的item,但是怎么让两个对象比较属性和值呢?
//我是说,值好比较,但是属性名,不管是hasOwnProperty()还是Object.hasOwn()都需要提供现成的属性 => for...in可以遍历属性
//转json干,待查找的obj去除{}后, 看是否在arr->item(对象).stringify()中被包括
function whatIsInAName(arr, obj) {
  let stringArr = arr.map((item) => JSON.stringify(item)); //map对所有子元素应用操作,这里是将对象化数组=>字符串数组,每一个就是一个str
  let objToStrArr = JSON.stringify(obj).slice(1, -1).split(","); //对于给定的obj对象,字符串化,去除{},然后转化为字符串数组objToStrArr,因为考虑到可能多个属性未必再str中按照理想情况排序
  let resArr = stringArr.filter((str) => {
    //关键:想要获得怎样的输出,就使用对谁使用filter
    return objToStrArr.every((item) => str.includes(item)); //关键:every()对于所有子元素进行判断,所有都符合才返回true,解决了obj转化的数组中可能有多个属性的问题(你写到objToStrArr[2],但如果还有更多呢), 同时也解决了objToStrArr数组中的所有值都应该在str中,这样的str才是符合要求的str
  });
  return resArr.map((item) => JSON.parse(item)); //最后返回时记得解析,将字符串数组,转为对象数组
}
