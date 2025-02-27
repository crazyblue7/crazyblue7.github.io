let quaso = "quaso";

setInterval(() => {
    let separatorSpace = document.getElementById("separatorSpace").value;
    console.log(separatorSpace);
    console.log(quaso);
    let separator1 = document.getElementById("separator1");
    separator1.style.fontSize =  String(separatorSpace) + "px";
    let separator2 = document.getElementById("separator2");
    separator2.style.fontSize =  String(separatorSpace) + "px";
}, 30);