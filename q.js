let todo=[];
var r=prompt("Enter ur req");
while(true){
    if(r=="quit"){
        console.log("quitting app");
        break;
    }
    if(r=="list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
    }
    console.log("----------");
}
else if(r=="add"){
   let t= prompt("Enter task u want");
   todo.push(t);
   console.log("task added");

}
else if(r=="dlt"){
 let idx=prompt("enter tsk index");
 todo.splice(idx,1);
 console.group("task deleted");
}
else{
    console.log("wrong req");
}
var r=prompt("Enter ur req");

    }

let b=document.querySelector("button");
b.addEventListener("click", function () {
let ran=Rc();
document.querySelector("h3").innerText=ran;
let div=document.querySelector(".colr");
div.style.backgroundColor=ran;
div.innerText=ran;
console.log("color updated to",ran );
});
function Rc(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
return`rgb(${r}, ${g}, ${b})`;

}