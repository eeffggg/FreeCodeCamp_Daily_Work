function steamrollArray(arr){
  //思路三: 因为对于整体的toString是难以避免的,所以考虑使用它
  //但是里面的对象很碍事,怎么解决? 
  //map
  /**const map = new Map();
   * map.set(2, { foo: "bar" }); */
  //用map键值对,也不可靠,因为变化后, [1,2]这种原本一个索引的会变成两个,这样原本存的对象索引就无用了
  //思路四,把对象转为json,再toString()

  //现在嵌套的[]都解决了
  const resArr =  arr.map(item=>{
    if(Array.isArray(item)===false && typeof(item) === "object"){
      return JSON.stringify(item);
    }
    return item;
  });
  //去空槽
  let resArr2 =  resArr.toString().split(",")
  .filter(item1=>item1 !== "")
  .map(item2=>{
    //->把字符串数字转数字
    if(Number.isInteger(Number(item2))){
      return Number(item2);
    }
    //->把json转对象
    if(item2[0]==='{'&&item2.slice(-1)==='}'){
      return JSON.parse(item2);
    }
    return item2;
  });
  return resArr2;
}
//有什么方法可以先剔除数组中的空数组,空对象,空字符串呢?(空对象不剔除)
//有的兄弟,有的:Object.keys(item).length 
//filter中的语句是:为true就保留,为false自动丢掉

//不排除,直接转化,分门别类的对每个操作还是太难了,放弃此想法
//对于map这种/ filter等等, 如果用了{},但是对于部分情况不执行任何操作的,记住一定要返回(map 返回item)(filter返回布尔判断)

// let temp = [[1], {},[],[[],[]],"",[3, [[4]]], [2, [3]]];
// let temp = [[1], [], [2, [3]]];
// let temp = [1, {"foo": "bar"}, [2]];
// let temp = ["baz", [1, 2], {name:"zhangsan"}];
let temp = [1, [], [3, [[4]]]];

console.log(steamrollArray(temp));
