function OrderBtnHover (){
    anime({
        targets: "#ChangeOrderBtnBG",
        height: "100%",
        duration: 200,
        easing: "easeInOutCubic",
    });
    anime({
        targets: "#ChangeOrderBtnText",
        color: "rgb(1, 13, 10)",
        duration: 40,
        easing: "easeInOutCubic",
        delay: 80,
    })
}

function OrderBtnUnhover (){
    anime({
        targets: "#ChangeOrderBtnBG",
        height: "0%",
        duration: 200,
        easing: "easeInOutCubic",
    });
    anime({
        targets: "#ChangeOrderBtnText",
        color: "#fff",
        duration: 40,
        easing: "easeInOutCubic",
        delay: 80,
    })
}

let OrderStateIfCollection = true;

function OrderChange (){
    anime({
        targets: "#OrderIndication",
        right: ["-4.7em","-6em"],
        duration: 250,
        easing: "easeInOutCubic",
        direction: "alternate",
    });
    anime({
        targets: "#ChangeOrderBtnText",
        opacity: ["100%","0%"],
        duration: 200,
        easing: "easeInOutQuad",
        direction: "alternate",
    });
    if (OrderStateIfCollection === true){
        setTimeout(()=>{OrderIndication.textContent = "BY TIME ORDER"},200);
        setTimeout(()=>{ChangeOrderBtnText.textContent = "CHANGE TO COLLECTION ORDER"},200);
        
        OrderStateIfCollection = false;
    } else {
        setTimeout(()=>{OrderIndication.textContent = "BY COLLECTION"},200);
        setTimeout(()=>{ChangeOrderBtnText.textContent = "CHANGE TO TIME ORDER"},200);
        OrderStateIfCollection = true;
    };
    
}

ChangeOrderBtn.addEventListener("mouseenter",OrderBtnHover);
ChangeOrderBtn.addEventListener("mouseleave",OrderBtnUnhover);

ChangeOrderBtn.addEventListener("click",OrderChange);