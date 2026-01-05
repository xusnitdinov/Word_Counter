let counter = document.querySelector("#first");
let border = document.querySelector(".text");
let length;
border.oninput = function() {
    length = border.value.length;
    counter.innerHTML = length;
    if(length > 50){
        border.style.border = "3px solid red";
    }
    else{
        border.style.border = "3px solid green";
    }
    if(length >= 10){
        counter.style.marginLeft = "374px";
    }
    else{
        counter.style.marginLeft = "380px";
    }
};


