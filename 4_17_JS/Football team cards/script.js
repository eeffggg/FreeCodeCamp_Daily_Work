const footballTeam = {
  team:"abc",
  year:1956,
  headCoach:"Mr.Wang",
  players:[
    {
      name:"zhangsan",
      position:"forward",
      isCaptain:true
    },
    {
      name:"lisi",
      position:"midfielder",
      isCaptain:false
    },
    {
      name:"wangwu",
      position:"defender",
      isCaptain:false
    },
    {
      name:"zhaoliu",
      position:"goalkeeper",
      isCaptain:false
    },
  ]
}
//test
// console.log(`footballTeam.players: `+footballTeam.players[1].name);

const headCoachSpan = document.querySelector("#head-coach");
const teamSpan = document.querySelector("#team");
const yearSpan = document.querySelector("#year");

headCoachSpan.innerText = footballTeam.headCoach;
teamSpan.innerText = footballTeam.team;
yearSpan.innerText = footballTeam.year;

//====对下拉列表添加监听器->获取下拉列表选值->用值作为函数参数找出对应的数据
function filterTeammates(filterRules){
  //找到数据后显示对应的数据
  //找要显示数据的父容器
  const playerCardsEle = document.querySelector("#player-cards");

  const resArr =  filterRules === "all" ? 
  footballTeam.players :
  footballTeam.players
  .filter(item=>item.position === filterRules);
  //这里forEach + innerHTML会出现覆盖
  //+=:会导致历史查询叠加到新查询的问题,在赋值给innerHTML以前清一下就好
  //构建html最终语句,然后用"="一次性赋值
  playerCardsEle.innerHTML = "";
  resArr.forEach(item2=>{
    let temp = "";
    if(item2.isCaptain){
      temp="(Captain) ";
    }
    playerCardsEle.innerHTML += 
   `<div class="player-card">
      <h2>${temp}${item2.name}</h2>
      <p>Position: ${item2.position}</p>
    </div>`;
  });
  // console.log(`playerCardsEle:`+playerCardsEle.innerHTML);

}
//取数据用的
const playersEle = document.querySelector("#players");
playersEle.addEventListener("change",(e)=>{
  filterTeammates(e.target.value);
  // console.log(`filterTeammates:`+filterTeammates(e.target.value));
});

