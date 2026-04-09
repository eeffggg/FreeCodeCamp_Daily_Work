let books = [
  {
    title: "隐语",
    authorName: "薛超伟",
    releaseYear: 1916,
  },
  {
    title: "隐语2",
    authorName: "薛超伟",
    releaseYear: 1915,
  },
  {
    title: "隐语3",
    authorName: "薛超伟",
    releaseYear: 1917,
  },
  {
    title: "隐语4",
    authorName: "薛超伟",
    releaseYear: 2015,
  },
  {
    title: "隐语5",
    authorName: "薛超伟",
    releaseYear: 2016,
  },
  {
    title: "隐语6",
    authorName: "薛超伟",
    releaseYear: 2017,
  },
];

//接受两个书籍也就是两个子元素--对象,如何传递数组呢?不传递数组怎么修改呢?
//还是说在调用它的那个函数中传递数组?但是它也不接受数组作为参数啊?
//没让修改,记得吗?数组.sort(函数),可以传入函数作为参数, 来更正比较的标准
//这里只是让写那个作为参数的, 比较的函数
const sortByYear = (book1, book2) => {
  let temp = book1.releaseYear - book2.releaseYear;
  if (temp < 0) {
    return -1;
  } else if (temp > 0) {
    return 1;
  } else {
    return 0;
  }
};

const filteredArr = (books) => {
  return books.filter((item) => item.releaseYear < 1950);
};
let filteredBooks = filteredArr(books);

//这里的sortByYear()的两个对象参数怎么写?
//只写名字,sort自动调用函数,自动传两个参数
function sortArr(books) {
  return books.sort(sortByYear);
}

filteredBooks.sort(sortByYear);
// console.log(sortArr(filteredBooks));
