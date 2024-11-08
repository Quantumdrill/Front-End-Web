let flexBox = document.querySelector("section");
let orientationStatus = true;
let wrapStatus = false;
let itemDirStatus = true;
let wrapDirStatus = true;
let newItemCount = 0;

function directionToggle() {
  if (orientationStatus === true){
    if (itemDirStatus === true){
      flexBox.style.flexDirection = "row";
    } else {
      flexBox.style.flexDirection = "row-reverse";
    }
  } else {
    if (itemDirStatus === true){
      flexBox.style.flexDirection = "column";
    } else {
      flexBox.style.flexDirection = "column-reverse";
    }
  }
}
function wrapToggle() {
  if (wrapStatus === false){
    flexBox.style.flexWrap = "nowrap";
  } else if (wrapDirStatus === true){
    flexBox.style.flexWrap = "wrap";
  } else {
    flexBox.style.flexWrap = "wrap-reverse"
  }
}

document.getElementById("AddBtn").onclick = () => {
  newItem = document.createElement("div");
  newItem.classList.add("FlexItems");
  newItem.textContent = newItemCount;
  newItemCount ++;
  newItem.id = "newItemNo_"+newItemCount;
  flexBox.appendChild(newItem);
}
document.getElementById("RmvBtn").onclick = () => {
  if (newItemCount > 0){
    flexBox.removeChild(document.getElementById("newItemNo_"+newItemCount));
    newItemCount --;
  }
}
document.getElementById("OrienBtn").onclick = () =>{
  orientationStatus = !orientationStatus;
   directionToggle();
};
document.getElementById("WrapBtn").onclick = () => {
  wrapStatus = !wrapStatus;
  wrapToggle();
}
document.getElementById("ItemDirBtn").onclick = () => {
  itemDirStatus = !itemDirStatus;
  directionToggle();
}
document.getElementById("WrapDirBtn").onclick = () => {
  wrapDirStatus = !wrapDirStatus;
  wrapToggle();
}