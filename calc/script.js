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
        return;
    }
    let y = prompt("y?");
    if(y == ""){
        return;
    }
    x = Number(x);
    y = Number(y);
    if(times == 0){
        print(quaso);
        alert(quaso + " (skip me)");
        print(quaso);
        alert(quaso + " (skip me)");
        print(quaso);
        alert(quaso + " (skip me)");
        print(quaso);
    }
    let action = Number(prompt("what to do with them? (1 = \"+\", 2 = \"-\", 3 = \"x\", 4 = \"÷\")"));
    print(action);
    switch (action) {
        case 1:
        print(x+y);
        alert(x+y);
        times = times + 1;
        print("done!");
        calc();
    case 2:
        print(x-y);
        alert(x-y);
        times = times + 1;
        print("done!");
        calc();
    case 3:
        print(x*y);
        alert(x*y)
        times = times + 1;
        print("done!");
        calc();
    case 4:
        print(x/y);
        alert(x/y);
        times = times + 1;
        print("done!");
        calc();
    }
}
