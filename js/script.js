// aos init //
AOS.init(); 

let buttonOne = document.getElementById("color-change-btn-1");
let buttonTwo = document.getElementById("color-change-btn-2");

function themeOne(){
 document.body.style.backgroundColor = "#FFFFFF";
 document.body.style.color = "#1CD464";
}

function themeTwo(){ 
    document.body.style.backgroundColor = "#040404";
    document.body.style.color = "#FCEC34";
}


buttonOne.addEventListener("click", themeOne);
buttonTwo.addEventListener("click", themeTwo);