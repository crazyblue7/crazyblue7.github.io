let password = "";
let min = Number(document.getElementById("mintxt").value);
let max = Number(document.getElementById("maxtxt").value);
let len = Math.floor((Math.random()*12)+8);
let labelius = document.getElementById("labelius");
function main() {
    const lowerchars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const upperchars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const special   =  ["1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","/","*","-","+","?"];
    for (let i = 0; i < len +1; i++) {
      arrayToUse = Math.floor(Math.random()*3) + 1;
      if (arrayToUse == 1) {
        password += lowerchars[Math.floor(Math.random()*lowerchars.length + 1)];
      } else if (arrayToUse == 2) {
        password += upperchars[Math.floor(Math.random()*upperchars.length + 1)];
      } else {
        password += special[Math.floor(Math.random()*special.length)];
      }
    }
    labelius.innerHTML = "password: " + password;
}