let btnlan=document.getElementById("btnlan");
let lanbox=document.querySelector(".language");
lanbox.style.display="none";
btnlan.addEventListener("click",function()
{
    lanbox.style.display="block";  
    lanbox.style.position="fixed";
    lanbox.style.bottom="100px";
    
})
btnlan.addEventListener("dblclick",function()
{
    lanbox.style.display="none";   
})




let btncount=document.getElementById("btnaount");
btncount.style.cursor="pionter";
let acountsection=document.querySelector(".acount");
acountsection.style.display="none";
btncount.addEventListener("click",function()
{
    acountsection.style.display="block"; 
    acountsection.style.position="fixed";
    acountsection.style.bottom="200px";
})
acountsection.addEventListener("mouseleave",function()
{
    acountsection.style.display="none"; 
})



let menu2=document.querySelector(".menu2");
// let nextmenu=document.getElementById("nextmenu");
let nextmenu=document.querySelector(".text");
nextmenu.addEventListener("click",function()
{
    menu2.style.left="0";
 
   
   
})
let menu1=document.querySelector(".menu1");
let next=document.getElementById("n");

next.addEventListener("click",function()
{
    menu2.style.left="-100%";
})

let allbody=document.querySelector(".allmenu");
let close=document.getElementById("close");
allbody.style.transition="1s";

allbody.addEventListener("click",function()
{
   
})

let menu=document.getElementById("main-meun");
menu.addEventListener("click",function()
{
    allbody.style.left="0";
    allbody.style.position="fixed";
})

close.addEventListener("click",function()
{
    allbody.style.left="-100%";
})

let img=document.querySelector(".hero img");

const textlod=()=>
{
    setTimeout(()=>{
        img.src="pic/1.jpg";
        img.style.transition="1s";
    },0);


    setTimeout(()=>{
        img.src="pic/6.jpg";
        img.style.transition="1s";
       },4000);

       setTimeout(()=>{
        img.src="pic/4.jpg";
        img.style.transition="1s";
       },8000)
}
textlod();
setInterval(textlod,12000);



