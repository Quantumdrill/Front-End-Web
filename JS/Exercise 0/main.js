function output(val){
    for(let i = 0; i<val;i++){
        display.innerHTML+=`We got: ${(i+1)**2}<br>`;
    }
}

inpt.oninput = function(){
    display.innerHTML="";
    if (inpt.value>500){
        window.alert("NO");
    } else {
        output(inpt.value);
    }
}

inptColor.oninput = function(){
    console.log(inptColor.value);
}