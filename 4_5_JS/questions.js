const question1 = {
  category: "技能",
  question: "处于\"能量禁咒\"范围中的敌人使用技能会怎样?",
  choices: ["击飞", "沉默并禁锢","眩晕"],
  answer: "沉默并禁锢"
} 
const question2 = {
  category: "技能",
  question: "受到持续伤害效果的敌人被\"蓄意放逐\"后其掉血效果会如何?",
  choices: ["保持原速率扣血", "加倍扣血","放逐期间不扣血技能结束后受到总量伤害"],
  answer: "加倍扣血"
}
const question3 = {
  category: "技能",
  question: "恶昭咒会给敌人施加一个持续伤害的效果,直到什么情况时,这个效果会增强?",
  choices: ["敌人造成了伤害","敌人使用了技能","敌人生命值过低"],
  answer: "敌人造成了伤害"

}
const question4 = {
  category: "被动",
  question: "残酷本性会使得对于下面哪一个单位造成的伤害增加?",
  choices:  ["生命值<50%的敌人","魔法量低于你的敌人", "生命值百分比低于你的敌人"],
  answer: "生命值百分比低于你的敌人"
}
const question5 = {
  category: "技能",
  question: "使用恶昭咒然后蓄意放逐敌人,恶昭咒在放逐期间的伤害会怎样?",
  choices: ["蓄意放逐加倍扣血的同时恶昭咒的效果还会增强", "都不增强","蓄意放逐加倍扣血但是恶昭咒不会增强"],
  answer: "蓄意放逐加倍扣血但是恶昭咒不会增强"
} 
let questions = [question1,question2,question3,question4,question5];

function getRandomQuestion(choices){
  let randomChoice = Math.floor(Math.random()*5);
  return choices[randomChoice]
  
}

function getRandomComputerChoice(choices){
  let randomChoice = Math.floor(Math.random()*4);
  return choices[randomChoice];
}

function getResults(question,computerChoice){
  if(question.answer === computerChoice){
    return "The computer's choice is correct!";
  } 
  return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
