var text1 = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus";

var flag = 0;
function func1(){
    if(flag===0) {
        document.getElementById("hidethis1").innerText = text1;
        flag=1;
        document.getElementById("rr1").innerText="Show Less";
    }
    else{
        document.getElementById("hidethis1").innerText = "";
        flag=0;
        document.getElementById("rr1").innerText="Read more";
    }
}

var text2 = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus";

var flag2 = 0;
function func2(){
    if(flag===0) {
        document.getElementById("hidethis2").innerText = text1;
        flag=1;
        document.getElementById("rr2").innerText="Show Less";
    }
    else{
        document.getElementById("hidethis2").innerText = "";
        flag=0;
        document.getElementById("rr2").innerText="Read more";
    }
}


var text3 = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ex neque consequuntur, reprehenderit accus";

var flag3 = 0;
function func3(){
    if(flag===0) {
        document.getElementById("hidethis3").innerText = text1;
        flag=1;
        document.getElementById("rr3").innerText="Show Less";
    }
    else{
        document.getElementById("hidethis3").innerText = "";
        flag=0;
        document.getElementById("rr3").innerText="Read more";
    }
}