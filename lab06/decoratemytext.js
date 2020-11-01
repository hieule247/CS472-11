var timerId = null;
function onClickBigger() {
    if (timerId == null)
        timerId = setInterval(changeFont, 2000);
    else
    {
        clearInterval(timerId);
        timerId = null;
    }        
}

function changeFont() {
    var txtInputId = document.getElementById("txtInputId");
    var curFontSize = txtInputId.style.fontSize;
    if(curFontSize && parseInt(curFontSize) < 30)
    {
        txtInputId.style.fontSize = (parseInt(curFontSize) + 2) + "px";
    } else 
    {
        txtInputId.style.fontSize = "12px";  
    }
}

function onChangeBigger() {
    // alert("Hello, world!");
    var chkBlingId = document.getElementById("chkBlingId");
    var txtInputId = document.getElementById("txtInputId");

    // alert();
    if (chkBlingId.checked == true) {
        txtInputId.style.fontWeight = "bold";
        txtInputId.style.color = "green";
        txtInputId.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('hundred-dollar-bill.jpg')";
    }
    else {
        txtInputId.style.fontWeight = "normal";
        txtInputId.style.color = "black";
        txtInputId.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}

function onClickMalkovitch() {
    let result = document.getElementById("txtInputId").value;
    let arr = result.split(" ");

    for (let i=0; i < arr.length; i++) {
        if (arr[i].length >= 5){
            result = result.replace(arr[i], "Malkovitch");
        }        
    }
    document.getElementById("txtInputId").value = result;
}

function onClickIgPay() {
    var txtInputId = document.getElementById("txtInputId");

    alert("onClickIgPay");
}






