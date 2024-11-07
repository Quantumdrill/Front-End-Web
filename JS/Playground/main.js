let flexBox = document.querySelector("section");
let orientationStatus = true
function toggleOrientation() {
   orientationStatus = !orientationStatus;
   if (orientationStatus === true){
     flexBox.style.flexDiretion = row;
   } else {
     flexBox.style.flexDiretion = column;
   }
}
document.querySelector("#OrienBtn").onclick = toggleOrientation();
document.getElementById("OrienBtn").onclick = console.log(1);