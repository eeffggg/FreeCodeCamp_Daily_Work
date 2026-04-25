const mdInput = document.querySelector("#markdown-input");
const rawHtmlOutput = document.querySelector("#html-output");
const previewHtml = document.querySelector("#preview");


function convertMarkdown(){//不要做并联,要做串联,这样嵌套的markdown也能转

  const mdValue = mdInput.value;
  let res = mdValue;

  //convert ###### hello To <h6>hello</h6>
  //加^避免some text # title 1, 但是加^,导致 #title 1#title 1第二个不翻译 => 使用多行模式m
  //.=>[^#]
  //(卡壳)如何消除两个中间的换行符? 让中间([^#]*)吃掉,然后用trim()消除即可
  const regex1 = /^(#{1,6})\s([^#]*)/gm;
  if(regex1.test(mdValue)){
    res = res.replace(regex1,(match,p1,p2)=>{
      const len = p1.length;
      return `<h${len}>${p2.trim()}</h${len}>`;
    });
  }
  //convert **hello** / __hello__ To <strong>hello</strong>
  //[abcde]指找出一位拿来比较看是不是abcde中的一个
  //写(.*)的时候一定要注意它可能把后面的吞了 
  //解决方法[^...]=>但是问题在于如果只有一个*或_呢,这里要匹配两个 => (\*\*|__)
  //使用非贪婪匹配:.*? 直到遇到和后面的匹配条件完全相同的字符们才会停止
  //怎么让同一个正则运行多次?加g
  const regex2 = /(\*\*|__)(.+?)\1/g;
  if(regex2.test(mdValue)){
    res =  res.replace(regex2,(match,p1,p2)=>{        
      return `<strong>${p2}</strong>`;
    });
  }

  //非贪婪匹配里只要后面的条件满足就不吃了,因此这里即便给.加上了s,但是因为换行符在*后面,所以还是吃不到, 
  //*this is italic*\n*this is also italic*

  //不同于# title 1\n#title 2 =>这里单独加一个[^#]?效果就不好,因为前面本来就吃除了#的一切包括换行,你要先排除中间吃换行,然后再添加
  //这里是*this is italic*\n*this is also italic* =>因为(中间)*\n,*把中间挡住了,所以这里单独加就很好
  //对第二行没有\n所以加"?"
  const regex21 = /(\*|_)(?![\*_])(.+?)\1[\s]?/g;
  if(regex21.test(mdValue)){
    res =  res.replace(regex21,(_,p1,p2)=>{
      return `<em>${p2.trim()}</em>`;
    });
  }

  //convert ![alt-text](image-source)
  //![风景图片](https://picsum.photos/300/200)
  //<img alt="" src="" />
  const regex3 = /!\[(.*?)\]\((.*?)\)[\s]?/g;
  if(regex3.test(mdValue)){
    res =  res.replace(regex3,(_,p1,p2)=>{
      return `<img alt="${p1}" src="${p2}" />`
    });
  }

  //convert [link text](URL)
  //<a href="URL">link text</a>
  //<a href="URL">link text<a/>
  //[百度官网](https://www.baidu.com)
  //<a href="${p2}">${p1}<a/>
  const regex4 = /\[(.*?)\]\((.*?)\)/g;
  if(regex4.test(mdValue)){
    res = res.replace(regex4,(_,p1,p2)=>{
      return `<a href="${p2}">${p1}</a>`;
    });
  }

  //convert "> abcd"
  //<blockquote cite="">${p1}</blockquote>
  const regex5 = /^\>\s(.*)/gm;
  if(regex5.test(mdValue)){
    res = res.replace(regex5,(_,p1)=>{
      return `<blockquote>${p1}</blockquote>`;
    });
  }


  //show res
  rawHtmlOutput.innerText = res;
  //to HTML
  previewHtml.innerHTML = res;
  return res;
}
// console.log(convertMarkdown("# title 1"));
// console.log(convertMarkdown("**hello**"));
// console.log(convertMarkdown("![风景图片](https://picsum.photos/300/200)"));
// console.log(convertMarkdown("[百度官网](https://www.baidu.com)"));
// console.log(convertMarkdown("> abcd"));

//EventListener
mdInput.addEventListener("input",()=>{
    convertMarkdown();
});

