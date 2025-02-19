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
    x = Number(x);
    y = Number(y);
    if(times <= 0){
        print(quaso);
        alert(quaso + " (skip me)");
        print(quaso);
        alert(quaso + " (skip me)");
        print(quaso);
        alert(quaso + " (skip me)");
        print(quaso);
    }
    let action = prompt("what to do with them? (1 = \"+\", 2 = \"-\", 3 = \"x\", 4 = \"÷\")");
    print(action);
    if (action == "1") {
        print(x+y);
        alert(x+y);
        times = times + 1;
        print("done!");
        calc();
    } else if(action == "2"){
        print(x-y);
        alert(x-y);
        times = times + 1;
        print("done!");
        calc();
    } else if(action == "3"){
        print(x*y);
        alert(x*y)
        times = times + 1;
        print("done!");
        calc();
    } else if(action == "4"){
        print(x/y);
        alert(x/y);
        times = times + 1;
        print("done!");
        calc();
    }
}
