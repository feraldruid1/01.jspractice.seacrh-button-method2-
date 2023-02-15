let elem=document.querySelector("input");
function onclick(){
if(elem.width===0){
    elem.style.width=700+"px";
    elem.style.height=150+"px";
}
if(elem.width===700){
    elem.style.width=0+"px";
    elem.style.height=0+"px";
}
}