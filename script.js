let quaso = "quaso";

let bodyportfolio = document.getElementById("portfolio");
let body = document.getElementById("mainbody");
if (body != null) {
    setInterval(() => {
        let separatorSpace = document.getElementById("separatorSpace").value;
        console.log(separatorSpace);
        // console.log(quaso);
        let separator1 = document.getElementById("separator1");
        separator1.style.fontSize =  String(separatorSpace) + "px";
        let separator2 = document.getElementById("separator2");
        separator2.style.fontSize =  String(separatorSpace) + "px";
    }, 30);
}
if (bodyportfolio != null) {
    function doc(abajab) {
        return document.getElementById(abajab);
    }
    let finishedEle = doc("finished");
    let good = doc("goodMorning")
    
    let finished = false;
    setInterval(() => {
        finishedEle.hidden = finished;
    }, 30);    
}