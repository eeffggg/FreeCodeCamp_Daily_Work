const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};
/**
 * 函数参数:
 * records:包含很多专辑的对象
 * id:要修改的id
 * prop:要修改的属性(参考每张专辑的结构)
 * value:要更新到records里的值
 */

/**
 * 每张专辑的结构
 * id:{
 *    artist: ,
 *    title: ,
 *    tracks:[ ],
 * }
 */

//因为这个函数里面id / prop是变量名,所以必须用方括号访问法
const updateRecords = (records, id, prop, value) => {
  if (value === "") {
    delete records[id][prop];
  }
  if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  //track不存在添加[value],两者有重复,所以要用if / else if
  if (
    prop === "tracks" &&
    value !== "" &&
    !Object.hasOwn(records[id], [prop])
  ) {
    records[id][prop] = [value];
  } //track存在push进去一个值
  else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  }
  return records;
};

console.log(
  updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"),
);
