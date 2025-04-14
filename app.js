let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let ip=document.querySelector("input");

btn.addEventListener("click", function(){
    let itm=document.createElement("li");
    itm.innerText=ip.value;
    let dlt=document.createElement("button");
dlt.innerText="delete";
dlt.classList.add("delete");

itm.appendChild(dlt);
    ul.appendChild(itm);
  //  console.log(ip.value);
    ip.value="";
});

ul.addEventListener("click",function() {
if(event.target.nodeName=="BUTTON"){
    let listi=event.target.parentElement;
    listi.remove();
console.log("deleted");
}
});
//let dltb=document.querySelectorAll(".dlt");
//for(dlt of dltb){
   // dlt.addEventListener("click", function(event) {
     //   console.dir(event.target.NodeName);
       // console.log("button clicked");
//let par=this.parentElement;
  //      console.log(par);
    //    par.remove();
    //});
//}