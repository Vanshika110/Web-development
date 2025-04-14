let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}

function levelup(){
    userSeq=[];
    level++;
h2.innerText=`Level ${level}`;
let ridx=Math.floor(Math.random() *5);
let rClr=btns[ridx];
let rbtn=document.querySelector(`#${rClr}`);
gameSeq.push(rClr);
console.log(gameSeq);
gameflash(rbtn);
}

function check(i){
//  console.log("curr level:" , level);
if(userSeq[i]===gameSeq[i]){
   if(userSeq.length== gameSeq.length){
setTimeout(levelup,500);
}
}
else{
    h2.innerHTML=`Game Over ! Your score was <b>${level}</b> <br> press any key to start.`;
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
},150);
    reset();
}
}

function btnpress(){
let btn=this;
userflash(btn);
userClr=btn.getAttribute("id");
userSeq.push(userClr);
check(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}