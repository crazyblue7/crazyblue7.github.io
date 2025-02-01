let quaso = "quaso";
let label = document.getElementById("label1");
let slider = document.getElementById("slider1");
function print(prinitor){
        console.log(prinitor)
    }
function changeLabel(){
    label.ariaValueText = slider.ariaValueNow;
}
let times = 0;
function calc(){
    let x = prompt("x?");
    if(x == ""){
        return quaso
    }
    let y = prompt("y?");
    if(y == ""){
        return quaso
    }
    let newX = Number(x);
    let newY = Number(y);
    x = newX;
    y = newY;
    if(times <= 0){
        print(quaso);
        alert(quaso);
        print(quaso);
        alert(quaso);
        print(quaso);
        alert(quaso);
        print(quaso);
    }
    let action = prompt("what to do with them?");
    
    if (action = "1") {
        print(x+y);
        alert(x+y);
        times = times + 1;
        calc();
    } else if(action = "2"){
        print(x+y);
        alert(x-y);
        times = times + 1;
        calc();
    } else if(action = "3"){
        print(x+y);
        alert(x*y)
        times = times + 1;
        calc();
    } else if(action = "4"){
        print(x+y);
        alert(x/y);
        times = times + 1;
        calc();
    } else {
        return quaso;
    }
}
