let quaso = "quaso";

function doc(abajab) {
    return doc(abajab);
}
let bodyportfolio = doc("portfolio");
let body = doc("mainbody");
if (body != null) {
    setInterval(() => {
        let separatorSpace = doc("separatorSpace").value;
        console.log(separatorSpace);
        // console.log(quaso);
        let separator1 = doc("separator1");
        separator1.style.fontSize =  String(separatorSpace) + "px";
        let separator2 = doc("separator2");
        separator2.style.fontSize =  String(separatorSpace) + "px";
    }, 30);
}
if (bodyportfolio != null) {
    
    let finishedEle = doc("finished");
    let good = doc("goodMorning")
    
    let finished = false;
    setInterval(() => {
        finishedEle.hidden = finished;
        let minimumSize = 20;
        if (Number(good.style.fontSize-"px") < minimumSize) {
            good.style.fontSize = minimumSize + "px";
        } 
    }, 30);    
}