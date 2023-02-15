let elem=document.querySelector("input");
function onick(){
if(elem.width===0){
    elem.style.width=700+"px";
    elem.style.height=150+"px";
    console.log("asdf")
}else{  
    elem.style.width=700-"px";
    elem.style.height=150-"px";
}
}